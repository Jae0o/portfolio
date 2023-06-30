import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { FakeApi } from '../../api/FakeApi';
// import { YoutubeApi } from '../../api/YoutubeApi';

export default function SearchingChannelInfo({ channelId }) {

  const { data: channelItems } = useQuery(
    ['serachingVideoCard', channelId], () => {
      const CallApi = new FakeApi();
      return CallApi.findChannelDetail(channelId);
    }
  )


  return (
    <div>
      {channelItems && channelItems.map((items, index) => (
        <div key={index + "serachingChannelInfo"}>
          <img
            src={items.snippet.thumbnails.default.url}
            alt={items.snippet.title} />
          <h3>{items.snippet.title}</h3>
        </div>
      ))}
    </div>
  )
}
