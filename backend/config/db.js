import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anshull23:AntulBantai23011606@cluster0.papoa2l.mongodb.net/foodio?retryWrites=true&w=majority').then(()=>console.log("DB connected"))
}