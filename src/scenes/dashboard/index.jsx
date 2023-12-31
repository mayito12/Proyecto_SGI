import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { ChangeCircleOutlined, HistoryOutlined } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Nuevo Procedimiento"
            subtitle= {
              <Link to="/form" style={{ textDecoration: "none", color: "#6870fa" }}>
                  Subir Procedimiento
              </Link>
            }
            progress="0"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Asignar Procedimiento"
            subtitle={<Link to="/team" style={{ textDecoration: "none", color: "#6870fa" }}>
            Asignar a un Procedimiento
            </Link>
            }
            progress="0"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Ver Historico"
            subtitle={
              <Link to="/team" style={{ textDecoration: "none", color: "#6870fa" }}>
                  Visualizacion del Historico
              </Link>
            }
            progress="0"
            icon={
              <HistoryOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Cambiar Status"
            subtitle={<Link to="/team" style={{ textDecoration: "none", color: "#6870fa" }}>
            Modificar Status
        </Link>}
            progress="0"
            icon={
              <ChangeCircleOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
