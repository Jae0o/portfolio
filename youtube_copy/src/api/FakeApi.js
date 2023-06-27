import axios from 'axios';

export async function fakeApi() {
  return axios
    .get(`/data/popular.json`)
    .then((res) => { return res.data.items })
    .catch((error) => { return console.log(error) })
}
