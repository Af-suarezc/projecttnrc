import NavBar from "../components/NavBar"
import Cards from "../components/Cards"
import GenericAvatar from "../components/GenericAvatar"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import '../pageStyles/session.css'


import { Route, Routes, Link as RouterLink } from "react-router-dom";



export default function Session({tasks}) {
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
        <Button variant="outlined">Consultar Tareas</Button>
       </Stack>
      </div>
      <div className="leftcontainer">
          <Stack spacing={1} direction="row" sx={{flexWrap: 'wrap' }}>
            {tasks.map((task) => (
              <Cards key={task.id} task={task} />
            ))}
          </Stack>
      </div>
      </div>

    </>
  )
}
