import express from 'express';

const app = express();

app.get('/api/report', (req, res) => {
  // TODO: Send report info.
  return;
});

app.listen(3333, () => {
  console.log('server on port 3333 running');
});
