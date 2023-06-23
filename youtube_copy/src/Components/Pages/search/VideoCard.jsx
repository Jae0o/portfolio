import React, { useEffect, useState } from 'react';
import styles from '../../../CSS/VideoCard.module.css';
import { Link } from 'react-router-dom';

export default function VideoCard({ videoCode, channelCode, description }) {

  const [VideoItems, setVideoItems] = useState();
  const [ChannelItems, setChannelItems] = useState();

  useEffect(() => {
    fetch(`/data/search/videos/${videoCode}.json`)
      .then((data) => data.json())
      .then((JSON) => setVideoItems(...JSON.items))
  }, []);

  useEffect(() => {
    fetch(`/data/search/channel/${channelCode}.json`)
      .then((data) => data.json())
      .then((JSON) => setChannelItems(...JSON.items))
  }, [])

  const linkUrl = `/watch/${videoCode}`;

  return (
    <Link
      to={linkUrl}
      className={styles.cardBox}>
      <div className={styles.videoCard_imgBox}>
        <img
          className={styles.videoCard_imgBox_thumbnail}
          src={VideoItems?.snippet.thumbnails?.high?.url}
          width={VideoItems?.snippet.thumbnails?.medium?.width}
          height={VideoItems?.snippet.thumbnails?.medium?.height}
          alt="videoThumbnail"
        />
      </div>

      <div className={styles.videoCard_textBox}>

        <h3 className={styles.videoCard_textBox_title}>{VideoItems?.snippet.title}</h3>

        <div className={styles.videoCard_textBox_subTitle}>
          <p className={styles.videoCard_textBox_subTitle_viewCount}>
            {`조회수 ${VideoItems?.statistics.viewCount}회`}
          </p>
          <p className={styles.videoCard_textBox_subTitle_time}>
            {`${VideoItems?.snippet.publishedAt}`}
          </p>
        </div>

        <div className={styles.videoCard_textBox_channelInfo}>
          <img
            className={styles.videoCard_textBox_channelInfo_logo}
            src={ChannelItems?.snippet.thumbnails.default?.url}
            alt="videoCard_channelLogo"
          />
          <p className={styles.videoCard_textBox_channelInfo_title}>
            {ChannelItems?.snippet.title}</p>
        </div>
        <p className={styles.videoCard_textBox_des}>
          {description}
        </p>
      </div>
    </Link>
  )
}
