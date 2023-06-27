import React from 'react'
import { useQuery } from 'react-query';
import { YoutubeApi } from '../api/YoutubeApi';


export default function PopularVideos() {
  const { isLoading, error, data: popularVideos } = useQuery(
    "popularVideosData", () => {
      const youtube = new YoutubeApi();
      return youtube.findApi();
    })

  console.log(popularVideos)

  if (isLoading) return <p>Loading</p>
  if (error) return <p>error</p>
  return (
    <div>PopularVideos</div>
  )
}
