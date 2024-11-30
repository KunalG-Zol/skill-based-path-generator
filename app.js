import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import ejs from 'ejs';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const port = 3000;

app.get('/', (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
