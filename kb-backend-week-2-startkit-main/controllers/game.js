const {getData,getRandomGame} = require("../appModules/api/api-utils.js");
const config = require('../appModules/rating/index.js');
const fs = require('fs').promises;
async function gameRouteController(res) {
  try {
    const ratingFile = await fs.readFile(config.config.PATH_TO_RATING_FILE,"utf8");
    const data = JSON.parse(ratingFile);
    const game = getRandomGame(data); // Получаем случайную игру
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (error) {
    console.log(error)
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
  module.exports = gameRouteController;