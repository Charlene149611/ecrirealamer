import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import { connectMySQL } from "./config/db_mysql.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import entryRoutes from "./routes/entryRoutes.js";
import ritualRoutes from "./routes/ritualRoutes.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT;

async function startServer() {
  try {
    // Connexion à MongoDB
    await connectDB();
    console.log("MongoDB connecté");

    // Connexion à MySQL
    const mysqlConnection = await connectMySQL();
    app.locals.mysql = mysqlConnection;
    console.log("MySQL connecté");

    // route test
    app.get("/", (req, res) => {
      res.send("Je suis un texte de test pour voir si je reste");
    });

    // middleware & routes
    app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Autoriser les requêtes CORS depuis le frontend

    app.use(express.json());
    app.use("/auth", authRoutes);
    app.use("/users", userRoutes);
    app.use("/api", entryRoutes);
    app.use("/api", ritualRoutes);

    //lancement du serveur
    app.listen(PORT, () => {
      console.log("Serveur tourne sur http://localhost:" + PORT);
    });
  } catch (error) {
    console.error("Erreur lors du démarrage du serveur :", error);
    process.exit(1);
  }
}

// On lance la fonction startServer
startServer();
