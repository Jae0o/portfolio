import React from 'react'
import { useQuery } from '@tanstack/react-query';
// import { YoutubeApi } from '../api/YoutubeApi';
import { FakeApi } from '../api/FakeApi';
import PopularVideoCard from '../Components/PopularVideoCard';


export default function PopularVideos() {
  const querykey = ["popularVideosData"]
  const { isLoading, error, data: popularVideos } = useQuery(
    querykey, () => {
      const youtube = new FakeApi();
      return youtube.findApi();
    })

  if (isLoading) return <p>Loading</p>
  if (error) return <p>error</p>
  return (
    <section>
      {popularVideos && popularVideos.map((item, index) => (
        <PopularVideoCard videosId={item.id} key={index + "popularVideoCard"} />
      ))}
    </section>
  )
}
