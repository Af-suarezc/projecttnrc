import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import '../pageStyles/addtasks.css'
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';

import { Route, Routes, Link as RouterLink } from "react-router-dom";

export default function AddTasks({ tasks, setTasks }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [valorSeleccionado, setValorSeleccionado] = useState(null);
    const [taskToAdd, setTaskToAdd]=useState(null);
    const  navigate  = useNavigate ();
    const ableCategories = [ { tipo: 'Opción 1', value: 1 },
      { tipo: 'Opción 2', value: 2 },
      { tipo: 'Opción 3', value: 3 }]
    const [categoriesOptions, setCategoriesOptions] = useState([]);
    useEffect(() => {
      // Hacer la solicitud GET a la API
      const getCategoriesData  = async () =>{
        try {
          //
          let selectedCategories = await axios.get('/api/getCat/categories');
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
    useEffect(() => {
      const createTask = async () => {
        if (taskToAdd) {
          try {
            const respuesta = await axios.post('/api/createTask/newTask', taskToAdd);
            if (respuesta) {
              setTaskToAdd(null);
              navigate('/loggedUser');
            }
          } catch (error) {
            console.log('Error al crear la tarea:', error);
          }
        }
      };
      createTask();
    }, [taskToAdd, navigate]);
    const handleOptionsChange = (event, newValue) => {
      event.preventDefault();
      console.log(newValue);
      setValorSeleccionado(newValue);
      
    };
  
    const handleAddTask = async () => {
      let idCateg;
      if(valorSeleccionado ==null){
        alert('Por favor selecciona una categoria a la tarea');
      }
      if (title.trim() !== '' && description.trim() !== '') {
        setTasks([...tasks, { title, description}]);
        setTitle('');
        setDescription('');
        //Aquí hago el consumo con axios al servidor para ingresar la tarea a registrar
        console.log("valorSeleccionado")
        console.log(valorSeleccionado)
        idCateg= valorSeleccionado.id;
        setTaskToAdd({ titulo:title, descripcion:description, category:idCateg})
        // console.log(taskToAdd);
        // if (taskToAdd) {
        //   const respuesta = await axios.post('/api/createTask/newTask', taskToAdd);
        //   if (respuesta) setTaskToAdd(null);
        //   navigate('/loggedUser');  
        // }else{
        //   console.log()
        // }
        
      } else {
        alert('Por favor ingresa un título y una descripción para la tarea.');
      }
    };
  
    return (
      <Container>
        <div className="navbar">
         <NavBar></NavBar> 
        </div>
        <div className="mainContainer">
        <Typography variant="h4" gutterBottom>
          Añadir Nueva Tarea
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '80%' }}>
          <TextField
            label="Título"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Descripción"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categoriesOptions}
            getOptionLabel={(option) => option.tipo}
            sx={{ width: 925 }}
            renderInput={(params) => <TextField {...params} label="Categoria de la tarea" />}
            value={valorSeleccionado}
            onChange={handleOptionsChange}
            isOptionEqualToValue={(option, value) => option.value === value?.value} 
          />
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Añadir Tarea
          </Button>
        </Box>
        </div>
      </Container>
    );
}