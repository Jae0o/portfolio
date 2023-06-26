import React from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../../CSS/VideosSearch.module.css'
// import ChannelCard from './ChannelCard';
// import VideoCard from './VideoCard';
// import { useQuery } from '@tanstack/react-query';
// import Error from '../Error';
// import axios from 'axios';

export default function VideosSearch() {


  // const { isLoading, error, data: videos } = useQuery(
  //   ['videos', keyword], async () => {
  //     return fetch(`/data/search/data_search_${keyword}.json`)
  //       .then((data) => data.json())
  //       .then((data) => data.items)
  //   }
  // );

  console.log("searching component data's : ")

  return (
    <section className={styles.outletBox}>
      <p> video searching</p>

      {/* {
        videos && videos.filter(item => item.id?.kind === 'youtube#channel').map(
          (item, index) => (
            <ChannelCard channelCode={item.id?.channelId} key={index} />
          )
        )
      }
      {
        videos && videos.filter(item => item.id.kind === 'youtube#video').map(
          (item, index) => (
            <VideoCard
              videoCode={item?.id.videoId}
              channelCode={item?.snippet.channelId}
              description={item?.snippet.description}
              etag={item?.etag}
              key={index} />
          )
        )
      } */}

    </section>
  )
}
