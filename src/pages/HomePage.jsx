// import { useNavigate } from "react-router-dom";
// import { Button, Container, Typography } from "@mui/material";

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <Container style={{ textAlign: "center", marginTop: "50px" }}>
//       <Typography variant="h3" gutterBottom>Welcome to Fempreneurs</Typography>
//       <Typography variant="h5" gutterBottom>Empowering Women Entrepreneurs</Typography>

//       <Button variant="contained" color="primary" onClick={() => navigate("/login")} sx={{ margin: 2 }}>
//         Login
//       </Button>
//       <Button variant="contained" color="secondary" onClick={() => navigate("/register")} sx={{ margin: 2 }}>
//         Register
//       </Button>
//       <Button variant="contained" color="success" onClick={() => navigate("/products")} sx={{ margin: 2 }}>
//         View Products
//       </Button>
//     </Container>
//   );
// };

// export default HomePage;

import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    window.location.reload(); // Refresh page to update UI
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom>Welcome to Fempreneurs</Typography>
      <Typography variant="h5" gutterBottom>Empowering Women Entrepreneurs</Typography>

    </Container>
  );
};

export default HomePage;
