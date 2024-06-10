import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../pageStyles/home.css'
//Components
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function Home() {
  const [count, setCount] = useState(0);
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 750,
    height: 630,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

  return (
    <>
      <div className="navbar">
       <NavBar></NavBar> 
      </div>
      <div className="homeContent">
        <img src="https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="HomeImage" />
        <DemoPaper>Bienvenido al gestor de tareas, aquí podrás gestionar tus tareas a realizar</DemoPaper>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
