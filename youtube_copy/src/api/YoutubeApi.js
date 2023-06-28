import axios from 'axios';

export class YoutubeApi {
  constructor() {
    this.http = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
    })
  }


  async findApi(keyword) {
    return keyword ? this.#searchingApi(keyword) : this.#popularApi();
  }

  async findVideoDetail(videosId) {
    return this.http
      .get('videos', {
        params: {
          part: 'snippet,contentDetails,statistics',
          id: videosId
        }
      })
      .then((res) => { return res.data.items })
  }

  async findChannelDetail(ChannelId) {
    return this.http
      .get('channels', {
        params: {
          part: 'snippet,contentDetails,statistics',
          id: ChannelId
        }
      })
      .then((res) => { return res.data.items })
      .catch((error) => console.log(error))
  }




  /* ------------- */

  async #popularApi() {
    return this.http
      .get(
        `videos`, {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        }
      }
      )
      .then((res) => { return res.data.items })
      .catch((error) => { return console.log(error) })
  }

  async #searchingApi(keyword) {
    return this.http
      .get(`search`, {
        params: {
          part: 'snippet',
          maxResults: 25,
          q: keyword,
        }
      })
      .then((res) => { return res.data.items })
      .catch((error) => { return console.log(error) })
  }
}