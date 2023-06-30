import React from 'react';
import styles from '../../CSS/SearchingVidoesCard.module.css';
import { useQuery } from '@tanstack/react-query';
// import { Link } from 'react-router-dom';
import { FakeApi } from '../../api/FakeApi';
import SearchingChannelInfo from '../search/SearchingChannelInfo';
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
    <div className={styles.searchingVideosCard_lineBox}>
      {videoItems && videoItems.map((items) => (
        <div
          key={items.id}
          className={styles.searchingVideosCard_box}
        >
          <div className={styles.searchingVideosCard_imgBox}>
            <img
              src={
                items.snippet.thumbnails.medium.url}
              alt={items.snippet.title}
              className={styles.searchingVideosCard_imgBox_thumbnail}
            />
          </div>

          <div className={styles.searchingVideosCard_textBox}>

            <h1 className={styles.searchingVideosCard_textBox_title}>{items.snippet.title}</h1>

            <div className={styles.searchingVideosCard_textBox_info}>
              <span className={styles.searchingVideosCard_textBox_info_view}>{items.statistics.viewCount}</span>
              <span className={styles.searchingVideosCard_textbox_info_dot}>•</span>
              <span className={styles.searchingVideosCard_textBox_info_at}>{items.snippet.publishedAt}</span>
            </div>

            <SearchingChannelInfo
              channelId={items.snippet.channelId}
              className={styles.searchingVideosCard_textBox_channelInfo}
            />

            <p className={styles.searchingVideosCard_textBox_des}>{items.snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
