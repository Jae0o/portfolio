import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { FakeApi } from '../../api/FakeApi';
import SearchingChannelInfo from '../search/SearchingChannelInfo'
// import { YoutubeApi } from '../../api/YoutubeApi';



export default function SearchingVideosCard({ videoId }) {
  const CallApi = new FakeApi();
  const { data: videoItems } = useQuery(
    ['searchingVideoCard', videoId], () => {
      return CallApi.findVideoDetail(videoId);
    }
  )
  console.log(videoItems)

  return (
    <div>
      {videoItems && videoItems.map((items, index) => (
        <div key={items.id}>
          <h1>{items.snippet.title}</h1>


          <SearchingChannelInfo channelId={items.snippet.channelId} />
        </div>
      ))}
    </div>
  )
}
