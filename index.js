import express from 'express';
import { loggingMiddleware } from './loggingMiddleware.js';

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(loggingMiddleware);

app.get('/', (req, res) => {
    console.log('Received GET request');
    res.status(200).json({ message: 'GET request successful.' });
});

app.post('/post', (req, res) => {
    const data = req.body; // Assume data is coming in JSON format
    console.log('Received POST request');
    res.status(201).json({ message: 'POST request successful.', data });
});

app.put('/put/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body; // Assume data is coming in JSON format
    console.log('Received PUT request');
    res.status(200).json({ message: `PUT request successful for ID: ${id}.`, updatedData });
});

app.patch('/patch/:id', (req, res) => {
    const { id } = req.params;
    const patchData = req.body; // Assume data is coming in JSON format
    console.log('Received PATCH request');
    res.status(200).json({ message: `PATCH request successful for ID: ${id}.`, patchData });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    console.log('Received DELETE request');
    res.status(200).json({ message: `DELETE request successful for ID: ${id}.` });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
