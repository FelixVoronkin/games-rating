const staticFile = require("../appModules/http-utils/static-file");
const {endpoints,getData} = require('../appModules/api/index.js');
const {config,makeRatingFile} = require("../appModules/rating/index.js")

async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoints.games)
    await makeRatingFile(config.PATH_TO_RATING_FILE,data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
  }

module.exports = mainRouteController;

