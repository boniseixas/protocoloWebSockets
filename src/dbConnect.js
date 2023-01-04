import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://bonifaciosousa:familiass6@node-express-mongodb.9xk8604.mongodb.net/?retryWrites=true&w=majority");

try {
  await cliente.connect();

  const db = cliente.db("SeSo-websockets");
  const documentos = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!!");
} catch (erro) {
  console.log(erro);
}