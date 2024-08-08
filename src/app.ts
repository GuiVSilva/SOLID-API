import express from "express";
import { router } from "./routes";

const app = express();

// Adiciona um middleware para analisar o corpo das requisições como JSON
app.use(express.json());
app.use(router);

export { app };
