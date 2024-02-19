const { Router } = require("express");
const {
  getEpisode,
  postEpisode,
} = require("../controllers/episodeController.js");

const episodeRouter = Router();

episodeRouter.get("/", getEpisode);
episodeRouter.post("/:id", postEpisode);

module.exports = episodeRouter;
