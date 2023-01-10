import mongoose from "mongoose";

mongoose.connect("mongodb+srv://magno:1234@alura.ohdmlvv.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;