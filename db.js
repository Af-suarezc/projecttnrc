import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "TU HOST DE AMAZON WB SERVICE AQUI.amazonaws.com",
    database:"tasks",
    user: "afsc",
    password: "TU CONTRASEÑA AQUI"
})

export function connect_SQL() {
    db.connect(function(err){
        if(err){
            console.log(err)
        }
        else {
            console.log("Connected to the database")
        }
    })
}

export function insert_user(name, lastname, id) {
    let instruction_sql = "INSERT INTO users (id, name, lastname) VALUES ("+id+", '"+name+"', '"+lastname+"')"
    connection.query(instruction_sql, function(err, result) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("User added")
        }
    })
}

export  function get_tasks_options(req, res){
    const query = 'SELECT * FROM category';
    db.query(query, (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).send('Error executing query');
          return;
        }
        console.log("En BD File");
        console.log(results)
        return  results;
    });
}