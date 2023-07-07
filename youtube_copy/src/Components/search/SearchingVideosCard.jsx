import React from 'react';
import styles from '../../CSS/SearchingVidoesCard.module.css';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { FakeApi } from '../../api/FakeApi';
// import { YoutubeApi } from '../../api/YoutubeApi';
import SearchingChannelInfo from '../search/SearchingChannelInfo';
import { NumberCount } from '../../util/count';
import { dateFormat } from '../../util/data';



export default function SearchingVideosCard({ videoId }) {
  const CallApi = new FakeApi();
  const navigate = useNavigate();
  const { data: videoItems } = useQuery(
    ['searchingVideoCard', videoId], () => {
      return CallApi.findVideoDetail(videoId);
    }
  )

  return (
    <div className={styles.searchingVideosCard_lineBox}>
      {videoItems && videoItems.map((items) => (
        <div
          key={items.id}
          className={styles.searchingVideosCard_box}
          onClick={() => { navigate(`/watch/${videoId}`, { state: { videoItems: items } }) }}
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
              <span className={styles.searchingVideosCard_textBox_info_view}>
                {`조회수 ${NumberCount(items.statistics.viewCount)}회`}
              </span>
              <span className={styles.searchingVideosCard_textbox_info_dot}>•</span>
              <span className={styles.searchingVideosCard_textBox_info_at}>
                {dateFormat(items.snippet.publishedAt, "ko")}
              </span>
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
