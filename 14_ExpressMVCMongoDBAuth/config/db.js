import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todo_list");
    console.log("Conexión exitosa al servidor MongoDB");
  } catch (err) {
    console.error("Error de conexión a la base de datos", err);
    process.exit(1);
  }
};

export default connectDB;
