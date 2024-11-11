var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET weather listing. */
router.get('/', async function(req, res, next) {

  // les informations nécéssaires à mettre dans URL
  var city_id = 6446684,
  unit = 'metric',
  lang = 'fr'

  // je créé url que je vais appeler pour avoir la météo à Cannes
  var url=`https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${process.env.API_KEY_WEATHER}&cnt=5&units=${unit}&lang=${lang}`

  // j'appel API météo avec la méthode "fetch"
  const reponse = await fetch(url)

  // je récupére le contenu de la réponse au format json
  const meteo = await reponse.json()

  // j'affiche le contenu dans le termnal ( pas obligatoire)
  console.debug(meteo.name)

  // je renvoie le contenu au fichier front lié (meteo.jade)
  res.render('meteo', { meteo });

});


module.exports = router;
