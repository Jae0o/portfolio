import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ChannelCard from './ChannelCard';
import styles from '../../../CSS/VideosSearch.module.css'
import VideoCard from './VideoCard';

export default function VideosSearch() {

  const { keyword } = useParams();
  const [Items, setItems] = useState([]);


  useEffect(() => {
    fetch(`/data/search/data_search_${keyword}.json`)
      .then((data) => data.json())
      .then((JSON) => setItems([...JSON.items]))
  }, [keyword])

  return (
    <section className={styles.outletBox}>
      {
        Items.filter(item => item.id?.kind === 'youtube#channel').map(
          (item, index) => (
            <ChannelCard channelCode={item.id?.channelId} key={index} />
          )
        )
      }
      {
        Items.filter(item => item.id.kind === 'youtube#video').map(
          (item, index) => (
            <VideoCard
              videoCode={item?.id.videoId}
              channelCode={item?.snippet.channelId}
              description={item?.snippet.description}
              key={index} />
          )
        )
      }
    </section>
  )
}
