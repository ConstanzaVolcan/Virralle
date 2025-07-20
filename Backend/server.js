require("dotenv").config();
const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// ⚠️ NECESARIO PARA WEBHOOK de PayPal:
app.use("/api/paypal/webhook", express.raw({ type: "application/json" }));

// 🔧 CONEXIÓN A MONGODB
const uri = process.env.MONGODB_URI; // <-- pon tu URI
const client = new MongoClient(uri);
let usuarios;

client.connect().then(() => {
  const db = client.db("virralle");
  usuarios = db.collection("usuarios");
  console.log("✅ Conectado a MongoDB");
});

// 🧠 FUNCIONES
async function guardarSuscripcionPro(email) {
  const ahora = new Date();

  const usuario = await usuarios.findOne({ email });
  const expiracionActual = usuario?.expiracionPro
    ? new Date(usuario.expiracionPro)
    : ahora;

  const nuevaExpiracion = new Date(
    Math.max(ahora, expiracionActual.getTime()) + 30 * 24 * 60 * 60 * 1000
  );

  await usuarios.updateOne(
    { email },
    {
      $set: {
        esPro: true,
        fechaPago: ahora,
        expiracionPro: nuevaExpiracion
      }
    },
    { upsert: true }
  );

  return nuevaExpiracion;
}

// 🔁 Confirmar pago manual (por botón antiguo)
app.post("/api/pro/confirmar", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Falta el email" });

  await guardarSuscripcionPro(email);
  res.json({ ok: true });
});

// 🛰️ Webhook de PayPal (subscripciones automáticas)
app.post("/api/paypal/webhook", async (req, res) => {
  try {
    const webhookEvent = req.body;

    if (webhookEvent.event_type === "BILLING.SUBSCRIPTION.ACTIVATED") {
      const email = webhookEvent.resource.subscriber.email_address;
      await guardarSuscripcionPro(email);
    }

    if (webhookEvent.event_type === "BILLING.SUBSCRIPTION.CANCELLED") {
      const email = webhookEvent.resource.subscriber.email_address;
      await usuarios.updateOne({ email }, { $set: { esPro: false } });
    }

    res.sendStatus(200);
  } catch (error) {
    console.error("❌ Error en webhook:", error);
    res.sendStatus(500);
  }
});

// 🔍 Estado actual de PRO
app.get("/api/pro/estado", async (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ error: "Falta el email" });

  const usuario = await usuarios.findOne({ email });
  const ahora = new Date();

  const sigueSiendoPro = usuario?.esPro && new Date(usuario.expiracionPro) > ahora;
  res.json({ pro: !!sigueSiendoPro, proHasta: usuario?.expiracionPro });
});

// 🚀 Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
