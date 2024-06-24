import { db } from "./db.js";

export const categoriesInfo = (req, res)=>{
    const values =[];
    const query = 'SELECT * FROM category';
    db.query(query,values, (err, results) => {
        if (err) {
          console.log(err);
          return err.status(500).json("Fail adding consulting categories to DB");
        }
        console.log("Hola desde el controller Db");
        console.log(results)
        return res.status(200).json(results);
    });
}

export const addTaskInfo = (req, res)=>{
    console.log("AQUÍ AÑADIRE LOS DATOS");
    console.log(req.body);
    const values = [
        req.body.titulo.toLowerCase(),
        req.body.descripcion.toLowerCase(),
        req.body.category
      ];
    let query = "INSERT INTO tasks (titulo, descripcion, category) VALUES (?, ?, ?);"
    db.query(query, values, (error, data) => {
        if (error) {
          console.log(error);
          return error.status(500).json("Fail adding user to DB");
        }
        return res.status(200).json("Se Ha Creado el Registro De La Clase Con Éxito!");
    });

}

export const getTasksByCat =(req, res)=>{
    const selectedOption = req.params.id;
    console.log('Opción seleccionada:', selectedOption);
    const q ="SELECT id,titulo,descripcion,category FROM tasks WHERE category = ?";
    const values = [selectedOption];
    db.query(q, values, (error, data) => {
      if (error) {
        console.log(error);
        return error.status(500).json("Fail adding consulting class to DB");
      }
      if(data.length===0) return res.status(404).json([]);
      return res.status(200).json(data);
    });

}

export const getAllTasks =(req, res)=>{
    console.log('Opción general');
    const query ="SELECT * FROM tasks ";
    const values = [];
    db.query(query,values, (err, results) => {
        if (err) {
          console.log(err);
          return err.status(500).json("Fail  consulting DB");
        }
        console.log("Hola desde el controller Db");
        // console.log(results)
        return res.status(200).json(results);
    });

}