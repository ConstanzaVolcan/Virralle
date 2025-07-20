require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const OpenAI = require("openai");
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);
const Usuario = require("./models/Usuario");
// 🔧 Configurar opciones de CORS
const corsOptions = {
  origin: "https://www.virralle.com", // o "*" para pruebas
  methods: ["GET", "POST"],
  credentials: true
};

const app = express(); // 👈 Esto es lo que te faltaba

// 🧩 Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", authRoutes);


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((error) => console.error("❌ Error al conectar a MongoDB:", error));

// Ruta: registrar usuario PRO
app.post('/api/registro-pro', async (req, res) => {
  const { email } = req.body;
  const usuario = new Usuario({ email, esPro: true });
  await usuario.save();
  res.json({ mensaje: "Usuario registrado como PRO ✅" });
});
// Ruta: registrar usuario normal
app.post('/api/registrarse', async (req, res) => {
  const { email, password } = req.body;

  // Verifica si ya existe
  const existe = await Usuario.findOne({ email });
  if (existe) return res.status(400).json({ mensaje: 'Ese correo ya está registrado' });

  // Crea nuevo usuario
  const nuevoUsuario = new Usuario({ email, password, esPro: false });
  await nuevoUsuario.save();

  res.json({ mensaje: 'Usuario creado con éxito' });
});

// Ruta: verificar si usuario es PRO
app.get('/api/es-pro', async (req, res) => {
  const { email } = req.query;
  const usuario = await Usuario.findOne({ email });
  res.json({ esPro: usuario?.esPro || false });
});

// Ruta: generar idea viral
app.post("/api/idea-viral", async (req, res) => {
  const { categoria, tema } = req.body;

  try {
    const respuesta = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: `Génerame una idea viral de contenido para TikTok en la categoría "${categoria}", sobre el tema "${tema}". Incluye:
1. Una idea concreta o guión resumido.
2. Consejo de cómo grabar o presentar el contenido.
3. Hashtags virales sugeridos.
4. Mejor horario para publicar ese tipo de contenido.
5. Enfoque o estilo ideal para lograr viralidad.`
      }],
      temperature: 0.8,
    });

    const idea = respuesta.choices[0].message.content;
    res.json({ idea });
  } catch (error) {
    console.error("❌ Error al generar idea:", error);
    res.status(500).json({ error: "Error al generar la idea viral." });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en puerto ${PORT}`);
});
// 🔐 LOGIN de usuarios
app.post("/api/login", async (req, res) => {
  const { email, contraseña } = req.body;

  if (!email || !contraseña) {
    return res.status(400).json({ mensaje: "Faltan datos" });
  }

  const usuario = await usuarios.findOne({ email });

  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  const bcrypt = require("bcrypt");
  const coincide = await bcrypt.compare(contraseña, usuario.contraseña);

  if (!coincide) {
    return res.status(401).json({ mensaje: "Contraseña incorrecta" });
  }

  res.json({
    mensaje: "Inicio de sesión exitoso",
    esPro: usuario.esPro || false,
    expiracionPro: usuario.expiracionPro || null
  });
});
