const dataBase = require("../utils/dataBase");

const episode = (data) => {
  const { id, name, episode } = data;
  const newEpisode = {
    id: id,
    name: name,
    episode: episode,
    completed: false,
  };
  dataBase.allEpisodes.push(newEpisode);
  return dataBase.allEpisodes;
};
module.exports = episode;
