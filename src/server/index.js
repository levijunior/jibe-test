const express = require('express');
const os = require('os');
const Seeds = require('../seed');

const products = Seeds.products();

const app = express();

app.use(express.static('dist'));
app.listen(process.env.PORT || 5424, () => console.log(`Listening on port ${process.env.PORT || 5424}!`));

// Endpoints

app.get('/api/username', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/products', (req, res) => {
  let result = products;

  if (req.query.category) {
    result = result.filter(p => p.categories.includes(req.query.category));
  }

  if (req.query.size) {
    result = result.filter(p => p.sizes.includes(req.query.size));
  }

  if (req.query.color) {
    result = result.filter(p => p.color === req.query.color);
  }

  res.send(result);
});

app.get('/api/products/:productId', (req, res) => {
  console.log(req.params);
  const result = products.find(product => product.id === Number(req.params.productId));

  res.send(result);
});

app.get('/api/filters', (req, res) => {
  const initialValue = {
    categories: [],
    color: [],
    sizes: []
  };

  const getFiltersOptions = (previousList, newList) => {
    const hasNewElement = newList.filter(value => !previousList.includes(value));

    if (hasNewElement.length) {
      return previousList.concat(hasNewElement);
    }

    return previousList;
  };

  const filterOptions = products.reduce((previous, current) => ({
    categories: getFiltersOptions(previous.categories, current.categories),
    color: getFiltersOptions(previous.color, [current.color]),
    sizes: getFiltersOptions(previous.sizes, current.sizes),
  }), initialValue);

  res.send(filterOptions);
});
