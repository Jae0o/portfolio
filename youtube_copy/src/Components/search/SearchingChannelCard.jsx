import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { FakeApi } from '../../api/FakeApi';
// import { YoutubeApi } from '../../api/YoutubeApi';

export default function SearchingChannelCard({ channelId }) {

  const { data: channelItems } = useQuery(
    ['searchingChannelCard', channelId], () => {
      const CallApi = new FakeApi();
      return CallApi.findChannelDetail(channelId)
    }
  )


  return (
    <ul>
      {channelItems && channelItems.map((items, index) => (
        <li key={index + "searchingChannelCard"}>
          <p>{items.snippet.title}</p>

        </li>
      ))}
    </ul>
  )
}
