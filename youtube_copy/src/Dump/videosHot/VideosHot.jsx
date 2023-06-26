import React from 'react';
import styles from '../../CSS/VideosHot.module.css';
// import HotVideoCard from './HotVideoCard';
// import { useQuery } from '@tanstack/react-query'


export default function VideosHot() {
  // const { data: Items } = useQuery(
  //   ["Items"], () => {
  //     return fetch(`/data/Hot/data_Hot_list.json`)
  //       .then((data) => data.json())
  //       .then((JSON) => { return JSON.items })
  //   }
  // )


  return (
    <section className={styles.VideosHot_box}>
      <p>Popular Videos</p>
      {/* {
        Items && Items.map((item, index) => (
          <div key={index} className={styles.videoItemCard}>
            <HotVideoCard
              videoCode={item?.id}
              channelCode={item?.snippet.channelId}
            />
          </div>
        ))
      } */}
    </section>
  )
}
