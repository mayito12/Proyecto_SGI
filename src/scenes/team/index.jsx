import { useState, useEffect } from "react";
import { Box,Button, useTheme, ThemeProvider} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataReA} from "../../data/mockData";
import axios from "axios";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import Sidebar from "../../scenes/global/Sidebar";

const Team = () => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar] = useState(true);

  useEffect(() => {
    // Hacer la petición con fetch
    const fetchData = async () => {
      try {
        const response = await fetch("http://sgi-upchiapas.us-east-1.elasticbeanstalk.com/api/asset/2");
        const jsonData = await response.json();
        // Obtener solo los datos de la respuesta y actualizar el estado con la parte "data"
        setData(jsonData.data);

        // Definir las columnas utilizando los datos recibidos de la API
        const updatedColumns = [
          { field: "id", headerName: "ID" },
          { field: "name", headerName: "Name", flex: 1 },
          {
            field: "url",
            headerName: "Ver Documento en Drive",
            flex: 1,
            renderCell: (params) => (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  // Aquí puedes agregar la lógica para redireccionar al enlace de Drive
                  window.open(params.value, "_blank");
                }}
              >
                Ver Documento
              </Button>
            ),
          },
          { field: "responsableEmail", headerName: "Responsable Email", flex: 1 },
        ];

        setColumns(updatedColumns);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>  
    <Box m="01px">
    
      {/* HEADER */}
      <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
      <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Procedimientos Académicos" subtitle="Documentos en drive" />

          <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
          </Box>
        </Box>
      </Box>
      <Box m="20px">
        <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
      
        <DataGrid checkboxSelection rows={data} columns={columns} />
        </Box>
      </Box>
      <Box m="20px">
      <Header title="Registros Académicos" subtitle="Documentos en drive" />
      <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}
    >
      <DataGrid checkboxSelection rows={mockDataReA} columns={columns} />
    </Box>
    </Box>
    </main>
    </div>
    </Box>
  </ThemeProvider>
  );
};

export default Team;
