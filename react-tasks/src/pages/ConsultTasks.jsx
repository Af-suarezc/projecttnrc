import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import '../pageStyles/addtasks.css'
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Cards from "../components/Cards"

import { Route, Routes, Link as RouterLink } from "react-router-dom";

export default function AddTasks({ tasks, setTasks }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [valorSeleccionado, setValorSeleccionado] = useState(null);
    const [taskToAdd, setTaskToAdd]=useState(null);
    const  navigate  = useNavigate ();
    const [categoryTask, setCategoryTask]=useState([]);
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
  
    const handleConsultTask = async () => {
      let idCateg;
      if(valorSeleccionado ==null){
        alert('Por favor selecciona una categoria a la tarea');
      }
      console.log(valorSeleccionado)
      let selectedCategories = await axios.get('/api/getTasks/taskCat/'+valorSeleccionado.id);
      if (selectedCategories.status == 200 && selectedCategories.data.length != 0) {
        setCategoryTask(selectedCategories.data);
        console.log(categoriesOptions);
      }else{
        setCategoryTask([]);
        console.log("NO HAY DATOS CATEGORIA");
      }  
    };
  
    return (
      <Container>
        <div className="navbar">
         <NavBar></NavBar> 
        </div>
        <div className="mainContainer">
        <Typography variant="h4" gutterBottom>
          Consultar Tareas
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '80%' }}>
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
          <Button variant="contained" color="primary" onClick={handleConsultTask}>
            Consultar Tareas
          </Button>
        </Box>
        <hr/>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '80%' }}>
        {
            categoryTask.length==0 ? <h1>No existen tareas para esa categoria</h1>:
            <div>
                <Stack spacing={1} direction="row" sx={{flexWrap: 'wrap' }}>
                    {categoryTask.map((task) => (
                    <Cards key={task.id} task={task} />
                    ))}
                </Stack>
            </div>
        }
        </Box>
        </div>
      </Container>
    );
}