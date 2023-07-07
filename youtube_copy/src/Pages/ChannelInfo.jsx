import React from 'react';
import styles from '../CSS/ChannelInfo.module.css';
import { useLocation, Outlet } from 'react-router-dom';
import { NumberCount } from '../util/count';
import { MdArrowForwardIos } from 'react-icons/md';
import InfoNavbar from '../Components/watch/InfoNavbar';
import Navbar from '../Components/Navbar';

export default function ChannelInfo() {
  const { state: { channelItems } } = useLocation();

  const { snippet: {
    thumbnails,
    title,
    customUrl,
    description
  } } = channelItems;

  const { statistics: { subscriberCount, videoCount } } = channelItems;


  return (
    <section className={styles.sectionWatch}>
      <Navbar />
      <article className={styles.channelInfo}>
        <div className={styles.channels_InfoBox_outline}>
          <div className={styles.channels_InfoBox}>
            <img
              className={styles.channels_InfoBox_logo}
              src={thumbnails.medium.url}
              alt={title}
            />
            <div className={styles.channels_InfoBox_textBox}>
              <div className={styles.channels_InfoBox_textBox_outline}>
                <h1 className={styles.channels_InfoBox_textBox_title}>{title}</h1>
                <div className={styles.channels_InfoBox_textBox_subInfo}>
                  <h3 className={styles.channels_InfoBox_textBox_subInfo_title}>{customUrl}</h3>
                  <span className={styles.channels_InfoBox_textBox_subInfo_subs}>{`구독자 ${NumberCount(subscriberCount)}명`}</span>
                  <span className={styles.channels_InfoBox_textBox_subInfo_videos}>{`동영상 ${videoCount}개`}</span>
                </div>
                <div className={styles.channels_InfoBox_textBox_desBox}>
                  <pre className={styles.channels_InfoBox_textBox_desBox_des}>{description.trim()}</pre>
                  <MdArrowForwardIos className={styles.emoji_arrow} />
                </div>
              </div>
              <div className={styles.channels_InfoBox_btns}>
                <button
                  className={styles.channels_InfoBox_btns_subs}
                >
                  구독
                </button>
                <button
                  className={styles.channels_InfoBox_btns_singn}
                >
                  가입
                </button>
              </div>
            </div>
          </div>
        </div>
        <InfoNavbar />
      </article>
      <Outlet />
    </section>
  )
}
