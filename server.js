import path from 'path';
import express from 'express';

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Chat listening on port ${PORT}!`);
});
