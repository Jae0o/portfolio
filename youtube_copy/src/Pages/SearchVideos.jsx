import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function SearchVideos() {
  const { keyword } = useParams();
  console.log(keyword)

  const { data: searchingVideos } = useQuery(["searchingVideosItems", keyword], () => {
    return axios(`/data/${keyword}.json`)
      .then((res) => { return res.data.items })
  })
  console.log(searchingVideos)


  // if (isLoading) return <p>Loading</p>
  // if (error) return <p>error</p>

  return (
    <div>SearchVideos</div>
  )
}
