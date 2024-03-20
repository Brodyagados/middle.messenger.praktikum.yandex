import path from 'path';
import express from 'express';

const app = express();
const PORT = 3000;
const dirname = path.resolve();

app.use(express.static(path.join(dirname, './dist')));

app.get('*', (_, res) => {
  res.sendFile(path.join(dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Chat listening on port ${PORT}!`);
});
