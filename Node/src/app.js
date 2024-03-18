import express from "express";
import morgan from "morgan";
import cors from "cors"

// Routes
import userRoutes from "./routes/user.routes";


const app = express();
const corsOPtions = {
    origin:['http://localhost:5500','http://127.0.0.1:5500'],
    optionsSuccessStatus: 200 // For legacy browser support
}


// settings 
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOPtions));

// Routes
app.use("/api/users",userRoutes);

export default app;