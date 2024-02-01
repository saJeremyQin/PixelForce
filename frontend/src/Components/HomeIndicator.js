import React from "react";
import Box from "@mui/material/Box";

const HomeIndicator = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '34px',
        background: '#FCFCFC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '148px',
          height: '5px',
          background: '#0F172A',
          borderRadius: '100px',
        }}
      ></Box>
    </Box>
  );
};

export default HomeIndicator;
