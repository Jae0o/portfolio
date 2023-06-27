import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { YoutubeApi } from '../api/YoutubeApi';

export default function SearchVideos() {
  const { keyword } = useParams();
  console.log(keyword)


  const { data: searchingVideos } = useQuery([keyword], () => {
    const youtube = new YoutubeApi();
    return youtube.findApi(keyword);
  })

  console.log(searchingVideos)


  // if (isLoading) return <p>Loading</p>
  // if (error) return <p>error</p>

  return (
    <div>SearchVideos</div>
  )
}
