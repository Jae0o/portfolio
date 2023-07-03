import React from 'react';
import styles from '../../CSS/FullInfo.module.css';
import ChangeDate from '../../util/yearMonthDay';
import { RiVideoLine } from 'react-icons/ri'
import { BiUserPin } from 'react-icons/bi';
import { NumberCount } from '../../util/count';


export default function watchFullInfo({ videoItmes, channelItems, viewCount }) {
  return (
    <div className={styles.fullInfo_box}>
      <div className={styles.fullInfo_textBox}>

        <div className={styles.fullInfo_textBox_top}>
          <span className={styles.fullInfo_textBox_top_view}>
            {`조회수 ${viewCount}회`}
          </span>
          <span className={styles.fullInfo_textBox_top_date}>
            {ChangeDate(videoItmes.snippet.publishedAt)}
          </span>
        </div>

        <pre className={styles.fullInfo_des}>
          {videoItmes.snippet.description}
        </pre>

      </div>

      <div className={styles.fullInfo_channel}>
        <img
          className={styles.fullInfo_channel_thumbnail}
          src={channelItems.snippet.thumbnails.default.url}
          alt={channelItems.snippet.title}
        />
        <div className={styles.fullInfo_channel_textBox}>
          <h3 className={styles.fullInfo_channel_textBox_title}>
            {channelItems.snippet.title}
          </h3>
          <span className={styles.fullInfo_channel_textBox_subs}>
            {`구독자 ${NumberCount(channelItems.statistics.subscriberCount)}명`}
          </span>
        </div>
      </div>
      <div className={styles.fullInfo_channel_btnsBox}>
        <button className={styles.fullInfo_channel_btns_video}>
          <RiVideoLine className={styles.emoji_video} />동영상
        </button>
        <button className={styles.fullInfo_channel_btns_user}>
          <BiUserPin className={styles.emoji_user} />정보
        </button>
      </div>
    </div>
  )
} 
