
import express from "express";
import axios from 'axios'; 
import cors from 'cors';
import path from 'path';


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// app.get('/hello', (req, res) => {
//     res.send('Hello World');
// })
app.use(express.static(
  path.resolve(__dirname, '../build/'),
  { maxAge:'1y', etag:false }
))

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


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
})