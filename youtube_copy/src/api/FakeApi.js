import axios from 'axios';

export class FakeApi {
  async findApi(keyword) {
    return keyword ? this.#searchingApi(keyword) : this.#popularApi();
  }

  async findVideoDetail(videosId) {
    return axios.get(`/data/videos/${videosId}.json`)
      .then((res) => { return res.data.items })
  }

  async findChannelDetail(ChannelId) {
    return axios.get(`/data/channel/${ChannelId}.json`)
      .then((res) => { return res.data.items })
      .catch((error) => console.log(error))
  }

  /* ------------ */

  async #popularApi() {
    return axios
      .get(`/data/popular.json`)
      .then((res) => { return res.data.items })
      .catch((error) => { return console.log(error) })
  }

  async #searchingApi(keyword) {
    return axios
      .get(`/data/${keyword}.json`)
      .then((res) => { return res.data.items })
      .catch((error) => { return console.log(error) })
  }
}