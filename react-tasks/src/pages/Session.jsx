import NavBar from "../components/NavBar"
import Cards from "../components/Cards"
import GenericAvatar from "../components/GenericAvatar"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState, useEffect } from "react";

import '../pageStyles/session.css'


import { Route, Routes, Link as RouterLink } from "react-router-dom";



export default function Session({tasks}) {
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  useEffect(() => {
    // Hacer la solicitud GET a la API
    const getCategoriesData  = async () =>{
      try {
        //
        let selectedCategories = await axios.get('/api/general/getall');
          if (selectedCategories.status == 200 && selectedCategories.data.length != 0) {
            setCategoriesOptions(selectedCategories.data);
            console.log(typeof categoriesOptions);
            console.log(categoriesOptions);
          }else{
            console.log("NO HAY DATOS CATEGORIA");
          }
      } catch (error) {
        console.log("error en el try para traer estado de cursos")
        console.log(error)
      }
  
    }
    getCategoriesData();

  
  }, []);
  
    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 550,
        height: 250,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
        elevation:5
      }));

  return (
    <>
      <div className="navcontainer">
       <NavBar></NavBar>
      </div>
      <br />
      <div className="mainContent">
      <div className="rightContainer">
      {/* variant="square" */}
       <GenericAvatar name={"User"}></GenericAvatar>
       <DemoPaper>Bienvenido al gestor de tareas, aquí podrás gestionar tus tareas a realizar</DemoPaper>
       <Stack spacing={4} direction="row">
        <Button variant="contained" component={RouterLink} to="/addtasks">Agregar Tareas</Button>
        <Button variant="outlined" component={RouterLink} to="/consulttasks">Consultar Tareas</Button>
       </Stack>
      </div>
      <div className="leftcontainer">
          <Stack spacing={1} direction="row" sx={{flexWrap: 'wrap' }}>
            {categoriesOptions.length != 0? categoriesOptions.map((task) => (
              <Cards key={task.id} task={task} />
            )):<h1>No hay registros aún</h1>}
          </Stack>
      </div>
      </div>

    </>
  )
}
