//* MANEJA UN CRUD
const axios = require("axios");
const episode = require("../services/episode");
const dataBase = require("../utils/dataBase");

module.exports = {
  getEpisode: (req, res) => {
    console.log(dataBase.allEpisodes);

    res.status(200).json({ Episodios: dataBase.allEpisodes });
  },
  postEpisode: async (req, res) => {
    const { id } = req.params;
    const idEpisode = dataBase.allEpisodes.findIndex((item) => item.id === id);
    if (idEpisode) {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        const newEpisode = episode(data);
        res.json({ newEpisode });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(400).json({ error: error.message });
    }
  },
  putEpisode: async (req, res) => {
    const { id } = req.params;
    const stringId = parseInt(id);
    const { name, episode, completed } = req.body;
    const idEpisode = await dataBase.allEpisodes.findIndex(
      (episode) => episode.id === stringId
    );
    console.log(stringId);
    if (idEpisode === -1) {
      return res.status(404).json({ error: "Episode not found" });
    }
    dataBase.allEpisodes[idEpisode] = {
      id: dataBase.allEpisodes[idEpisode].id,
      name: name || dataBase.allEpisodes[idEpisode].name,
      episode: episode || dataBase.allEpisodes[idEpisode].episode,
      completed: completed || dataBase.allEpisodes[idEpisode].completed,
    };
    res.status(200).json({
      message: "Episodio Actualizado",
      Episodio: dataBase.allEpisodes,
    });
  },
  deleteEpisode: (req, res) => {},
};
