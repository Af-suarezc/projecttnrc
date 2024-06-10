import NavBar from "../components/NavBar"
import { Container, Box, TextField, Button, Typography, Link } from '@mui/material';
import { Route, Routes, Link as RouterLink } from "react-router-dom";

export default function Login() {
  return (
    <>
     <NavBar></NavBar>
     <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Iniciar Sesión
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            component={RouterLink}
            to="/loggedUser"
          >
            Iniciar Sesión
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Link href="#" variant="body2">
              ¿Olvidaste tu contraseña?
            </Link>
            <Link href="#" variant="body2">
              {"¿No tienes una cuenta? Regístrate"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
  )
}
