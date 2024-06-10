import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';


//npm packages
import { Route, Routes, Link as RouterLink } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box 
      sx={{
        borderRadius: 1,
        bgcolor: 'primary.main'

      }}
      width={1670}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountBalanceTwoToneIcon />
          </IconButton>
          <Box
            sx={{
                display:"flex",
                flexDirection:"Row",
                width:"100%",
                justifyContent:"space-between",
                // border:"1px solid red"
            }}
          >
            <Button color="inherit" component={RouterLink} to="/">Inicio</Button>
            <Button color="inherit" component={RouterLink} to="/login">Iniciar Sesion</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}