const { Router } = require("express");
const {
  getEpisode,
  postEpisode,
  putEpisode,
  deleteEpisode,
} = require("../controllers/episodeController.js");

const episodeRouter = Router();

episodeRouter.get("/", getEpisode);
episodeRouter.post("/:id", postEpisode);
episodeRouter.put("/:id", putEpisode);
episodeRouter.delete("/:id", deleteEpisode);

module.exports = episodeRouter;
