import axios from 'axios';

export class YoutubeApi {
  async findApi(keyword) {
    return keyword ? this.#searchingApi(keyword) : this.#popularApu();
  }


  async #popularApu() {
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