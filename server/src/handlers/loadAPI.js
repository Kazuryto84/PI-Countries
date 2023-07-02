const {Country} = require('../db.js');
const axios = require('axios');

async function loadApi() {
  const validacionDB = await Country.findAll();
  if (validacionDB.length === 0) {
    axios.get('http://localhost:5000/countries').then(({data}) => {
      const countries = [];
      data.forEach((country) => {
        const newCountry = {
          id: country.cca3,
          name: country.name.common.toUpperCase(),
          flag: country.flags.png,
          continent: country.continents[0],
          capital: Array.isArray(country.capital)
            ? country.capital[0]
            : 'Sin Capital',
            sub_region: country.subregion ? country.subregion : 'Sin subregion',
            area: country.area,
            population: country.population,
        };
        countries.push(newCountry);
      });
      Country.bulkCreate(countries)
        .then(() => {
          console.log('DB cargada correctamente');
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  }
  console.log('DB cargada correctamente');
}

module.exports = {loadApi};