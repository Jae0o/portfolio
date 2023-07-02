import React from 'react';
import styles from '../../CSS/PopularVideoCard.module.css'
import { useQuery } from '@tanstack/react-query';
// import { YoutubeApi } from '../../api/YoutubeApi';
import { FakeApi } from '../../api/FakeApi';
import PopularVideoChannelLogo from './PopularVideoChannelLogo';
import { Link } from 'react-router-dom';

export default function PopularVideoCard({ videosId }) {

  const { data: videoData } = useQuery(["popularVideoCard_VideoData", videosId], () => {
    const CallApi = new FakeApi();
    return CallApi.findVideoDetail(videosId)
  });


  return (
    <div className={styles.popularCard}>
      {videoData && videoData.map((items) => (
        <Link to={`/ss`}
          className={styles.popularCard_box}
          key={items.id}
        >

          <img
            className={styles.popularCard_box_thumbnail}
            src={items.snippet.thumbnails.medium.url}
            alt={items.snippet.title}
          />

          <div className={styles.popularCard_infobBox}>

            <PopularVideoChannelLogo
              channelId={items.snippet.channelId} />

            <div className={styles.popularCard_infoBox_textBox}>
              <h1 className={styles.popularCard_infoBox_textBox_title}>{items.snippet.title}</h1>
              <p className={styles.popularCard_infoBox_textBox_channeltitle}>{items.snippet.channelTitle}</p>
              <div className={styles.popularCard_infoBox_textBox_videosInfo}>
                <span className={styles.popularCard_infoBox_textBox_videosInfo_view}>{items.statistics.viewCount}</span>
                <span className={styles.popularCard_infoBox_textBox_videosInfo_dot} >•</span>
                <span className={styles.popularCard_infoBox_textBox_videosInfo_at}>{items.snippet.publishedAt}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
