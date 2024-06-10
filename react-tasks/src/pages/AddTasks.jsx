import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import '../pageStyles/addtasks.css'
import { useNavigate } from 'react-router-dom';

import { Route, Routes, Link as RouterLink } from "react-router-dom";

export default function AddTasks({ tasks, setTasks }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const  navigate  = useNavigate ();
  
    const handleAddTask = () => {
      if (title.trim() !== '' && description.trim() !== '') {
        setTasks([...tasks, { title, description }]);
        setTitle('');
        setDescription('');
        navigate('/loggedUser');
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
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Añadir Tarea
          </Button>
        </Box>
        </div>
      </Container>
    );
}