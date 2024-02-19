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
  putEpisode: (req, res) => {},
  deleteEpisode: (req, res) => {},
};
