import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
// import { YoutubeApi } from '../api/YoutubeApi';
import { FakeApi } from '../api/FakeApi';
import SearchingChannelCard from '../Components/search/SearchingChannelCard';
import SearchingVideosCard from '../Components/search/SearchingVideosCard';

export default function SearchVideos() {
  const { keyword } = useParams();

  const { data: searchingVideos } = useQuery([keyword], () => {
    const youtube = new FakeApi();
    return youtube.findApi(keyword);
  })


  return (
    <section>
      {searchingVideos && searchingVideos
        .filter((items) => items.id.kind === "youtube#channel")
        .map((items, index) => (
          <SearchingChannelCard key={index + 'SearchingChannelCard'} channelId={items.id.channelId} />
        ))}
      {searchingVideos && searchingVideos
        .filter((items) => items.id.kind === "youtube#video")
        .map((items, index) => (
          <SearchingVideosCard
            key={index + 'SearchingChannelCard'}
            videoId={items.id.videoId}
            channelId={items.snippet.channelId} />
        ))}
    </section>
  )
}
