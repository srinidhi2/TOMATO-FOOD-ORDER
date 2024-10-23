import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://gantasrinidhi:Advaithganta@cluster0.xxk1v.mongodb.net/food-del').then(()=>console.log("DB CONNECTED"));
}