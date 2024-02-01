// const express = require('express');
// const axios = require('axios');

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(express.json());

// app.get('/api/trips', async (req, res) => {
//   try {
//     const response = await axios.get('https://pfx-interview.s3.ap-southeast-2.amazonaws.com/trips.json');
//     res.json(response.data);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express from "express";
import axios from 'axios'; 

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// app.get('/hello', (req, res) => {
//     res.send('Hello World');
// })

app.get('/api/trips', async (req, res) => {
  try {
    const response = await axios.get('https://pfx-interview.s3.ap-southeast-2.amazonaws.com/trips.json');
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// add other path here


app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
})