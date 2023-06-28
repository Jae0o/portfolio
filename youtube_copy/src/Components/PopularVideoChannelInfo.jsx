import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { FakeApi } from '../api/FakeApi';
// import { YoutubeApi } from '../api/YoutubeApi';

export default function PopularVideoChannelInfo({ channelId }) {
  const { data: channelData } = useQuery(
    ["channelInfo_Popular", channelId], () => {
      const CallApi = new FakeApi();
      return CallApi.findChannelDetail(channelId);
    }
  )
  console.log(channelData);



  return (
    <article>
      {channelData && channelData.map((items) => (
        <div key={channelId}>
          <p>{items.snippet.title}</p>
        </div>
      ))}
    </article>
  )
}
