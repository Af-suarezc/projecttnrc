import express from 'express';
import path from 'path';

const app = express();
const dir = path.resolve();
const dir_front = "react-tasks/dist"
const port = process.env.PORT || 3030;

// Serve the static files from the dist directory
app.use(express.static(dir_front));
app.use(express.json());
app.use(express.urlencoded({}));


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


//manejamos la paginación de react con el selector * de esta manera aseguramos el funcionamiento de todo el enrutador del cliente.
app.get('*', (req, res) => {
    res.sendFile(dir+"/"+dir_front+"/"+"index.html")
});


  
