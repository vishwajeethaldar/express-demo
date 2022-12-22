const express = require('express');
const app = express();
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('index.html');
  res.end()
})


app.listen(process.env.PORT || 3000);

module.exports = app