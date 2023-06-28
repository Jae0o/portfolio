import React from 'react'
import { useQuery } from '@tanstack/react-query';
// import { YoutubeApi } from '../api/YoutubeApi';
import { FakeApi } from '../api/FakeApi';
import PopularVideoChannelInfo from './PopularVideoChannelInfo';

export default function PopularVideoCard({ videosId }) {

  const { data: videoData } = useQuery(["popularVideoCard_VideoData", videosId], () => {
    const CallApi = new FakeApi();
    return CallApi.findVideoDetail(videosId)
  })


  return (
    <ul>
      {videoData && videoData.map((items, index) => (
        <li key={index + "videoCardKey"}>
          <h1>{items.snippet.title}</h1>
          <PopularVideoChannelInfo channelId={items.snippet.channelId} />
        </li>
      ))}
    </ul>
  )
}
