import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

export default function PopularVideos() {
  const queryKey = "Hot124Video123421"

  const { data: popularVideos } = useQuery(["popularVideosData", queryKey], () => {
    return axios.get(`/data/popular.json`)
      .then((res) => { return res.data.items })
  })

  console.log(popularVideos)

  // axios.get(`/data/popular/popular.json`)

  // if (isLoading) return <p>Loading</p>
  // if (error) return <p>error</p>
  return (
    <div>PopularVideos</div>
  )
}
