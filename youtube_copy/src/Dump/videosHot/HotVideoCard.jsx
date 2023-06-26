import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../CSS/HotVideoCard.module.css';

export default function HotVideoCard({ channelCode, videoCode }) {

  const [ChannelItems, setChannelItems] = useState();
  const [VideosItems, setVideoItems] = useState();

  useEffect(() => {
    fetch(`/data/Hot/${channelCode}.json`)
      .then((data) => data.json())
      .then((JSON) => setChannelItems(...JSON.items))
  }, [channelCode])

  useEffect(() => {
    fetch(`/data/Hot/${videoCode}.json`)
      .then((data) => data.json())
      .then((JSON) => setVideoItems(...JSON.items))
  }, [videoCode])


  const linkUrl = `/watch/${videoCode}`

  return (
    <Link
      to={linkUrl}
      className={styles.HotVideoCard} >
      <img
        className={styles.HotVideoCard_videoThumbnail}
        src={VideosItems?.snippet.thumbnails.medium.url}
        alt='HotVideoCard_videoThumbnail' />

      <div className={styles.HotVideoCard_bottom}>
        <img
          className={styles.HotVideoCard_channelLogo}
          src={ChannelItems?.snippet.thumbnails.default.url}
          alt='HotVideoCard_channelThumbnail'
        />
        <div className={styles.HotVideoCard_textBox}>
          <h3
            className={styles.HotVideoCard_textBox_title}>
            {VideosItems?.snippet.title}
          </h3>

          <p
            className={styles.HotVideoCard_textBox_channelTitle}>
            {ChannelItems?.snippet.title}
          </p>

          <p className={styles.HotVideoCard_textBox_viewTimeCount}>
            {`조회수 ${VideosItems?.statistics.viewCount}회 - ${VideosItems?.snippet.publishedAt} 전`}</p>

        </div>
      </div>
    </Link>
  )
}
