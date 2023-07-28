import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import { AddCircleOutlined } from "@mui/icons-material";

const NewProcedure = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" color={colors.grey[100]}>
          NUEVO PROCEDIMIENTO
        </Typography>

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
            <AddCircleOutlined sx={{ mr: "10px" }} />
            Agregar Procedimiento
          </Button>
        </Box>
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
            subtitle="Subir Procedimiento"
            progress="0"
            icon={<AddCircleOutlined sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        {/* Aquí puedes agregar más cajas de StatBox o componentes personalizados según tus necesidades */}
      </Box>
    </Box>
  );
};

export default NewProcedure;
