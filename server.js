const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const DIST_FOLDER = path.join(__dirname + '/dist/booking-app-template');
app.use(express.static(DIST_FOLDER));
app.get('*', express.static(DIST_FOLDER));

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_FOLDER + '/index.html'));
});


app.get('*', function(req, res) {
  res.setHeader('X-Frame-Options', 'DENY');
  res.sendFile('/dist/elements/index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});