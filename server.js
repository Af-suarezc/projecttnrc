import express from 'express';
import path from 'path';
import {connect_SQL, get_tasks_options} from './db.js';
import serverRoutes from "./serverRoutes.js"

const app = express();
const dir = path.resolve();
const dir_front = "react-tasks/dist"
const port = process.env.PORT || 80;

// Serve the static files from the dist directory
app.use(express.static(dir_front));
app.use(express.json());
app.use(express.urlencoded({}));


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connect_SQL();

});


// app.get('/api/categories', (req, res)=>{
//     const data =  get_tasks_options();
//     console.log("Hola Aquí :)");
//     console.log(data);
//     res.send("Hola Mundo")
//     // res.status(200).json(data);
// })
app.use("/api/getCat", serverRoutes);
app.use("/api/createTask", serverRoutes);
app.use("/api/getTasks", serverRoutes);
app.use("/api/general", serverRoutes);

//manejamos la paginación de react con el selector * de esta manera aseguramos el funcionamiento de todo el enrutador del cliente.
app.get('*', (req, res) => {
    res.sendFile(dir+"/"+dir_front+"/"+"index.html")
});





  
