const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;
const rootPath = 'src/pages';
const excludedPages = ['.git'];

const getFilesStructure = (path) => {
  const res = [];
  const files = fs.readdirSync(path, {
    withFileTypes: true,
  });
  files.forEach((el) => {
    if (!excludedPages.includes(el.name)) {
      if (el.isDirectory()) {
        const resArr = getFilesStructure(`${path}/${el.name}`);
        res.push({
          title: el.name,
          isDir: true,
          children: resArr,
        });
      } else {
        res.push({
          title: el.name,
          isDir: false,
        });
      }
    }
  });
  return res;
};

const filesStructure = getFilesStructure(rootPath);

app.get('/menu', (req, res) => {
  res.send({
    data: filesStructure,
  });
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
