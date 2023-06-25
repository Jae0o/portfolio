import React, { useEffect, useState } from 'react';
import HotVideoCard from './HotVideoCard';
import styles from '../../CSS/VideosHot.module.css';


export default function VideosHot() {

  const [Items, setItems] = useState([]);

  // Mock Data 

  useEffect(() => {
    fetch(`/data/Hot/data_Hot_list.json`)
      .then((data) => data.json())
      .then((JSON) => setItems([...JSON.items]))
  }, [])

  return (
    <section className={styles.VideosHot_box}>
      {
        Items.map((item, index) => (
          <div key={index} className={styles.videoItemCard}>
            <HotVideoCard
              videoCode={item?.id}
              channelCode={item?.snippet.channelId}
            />
          </div>
        ))
      }
    </section>
  )
}
