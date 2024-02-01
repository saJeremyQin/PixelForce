import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = () => {

  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      sx={{
        width: '100%',
        height: '100%',
        background: '#F2F2F3',
        borderRadius: '72px',
        border: '0.80px #E3E3E7 solid',
      }}
      InputProps={{
        startAdornment: ( 
          <span style={{ marginLeft: '16px' }}>🔍</span>
        ),
      }}
    />
  );
};

export default SearchBar;
