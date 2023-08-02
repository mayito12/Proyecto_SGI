import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import fondoImg from '../assets/fondo.jpg';

const theme = createTheme({
    palette: {
      primary: {
        main: "#256BFA",
      },
      secondary: {
        main: "#DC79FF",
      },
    },
  });

  const Login = () => {
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
       /*const {login,token,setToken, setUser, user,setOpen} = useContext{"API"}
      const [user, setuser] = useState({
        email: "",
        password:"",
      })
      
    const handleChange = (e) => {
        setuser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }
    const loginData= async(user) => {
        const { email, password,} = user;
        await axios.post('api que se usara', { email , password})
            .then( function (response) {
                console.log(response.data.jwt);
                setToken(response.data.jwt)
                navigate("/home")
            })
            .catch(function (error) {
                console.log(error);
            });
    */
      navigate("/home");
    };
    return (
      <ThemeProvider theme={theme}>
        <Box
          style={{
            backgroundImage: `url(${fondoImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Container maxWidth="xs">
            <Box p={2} bgcolor="#FFFFFF" boxShadow={7} borderRadius={8} >
              <Typography variant="h4" align="center" gutterBottom color="#000000">
                Plataforma 
                de 
                Información 
                Universitaria 
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Iniciar Sesión
                </Button>
              </form>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    );
  };
  
  export default Login;