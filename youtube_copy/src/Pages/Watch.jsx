import React from 'react';
import styles from '../CSS/watch.module.css';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FakeApi } from '../api/FakeApi';
// import { YoutubeApi } from '../api/YoutubeApi';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import WatchInfo from '../Components/watch/WatchInfo';
import { NumberCount } from '../util/count';

export default function Watch() {
  const { state: { videoItems } } = useLocation();

  const { data: channelData } = useQuery(
    ['watchChannelItems', videoItems.id], () => {
      const CallApi = new FakeApi();
      return CallApi.findChannelDetail(videoItems.snippet.channelId);
    }
  )
  return (
    <section className={styles.watchBox_outline}>
      {channelData && channelData.map((channelItems) => (
        <article
          key={videoItems.id}
          className={styles.watchBox}>
          <div className={styles.watchBox_videoBox}>
            <iframe
              className={styles.watchBox_video}
              id="player"
              type="text/html"
              width="100%"
              height="100%"
              src={`http://www.youtube.com/embed/${videoItems.id}`}
              title={videoItems.snippet.title}
              frameBorder="0">
            </iframe>
          </div>

          <h1 className={styles.watchBox_title}
          >{videoItems.snippet.title}</h1>

          <div className={styles.watchBox_info}>

            <div className={styles.watchBox_info_channel}>
              <img
                className={styles.watchBox_info_channel_thumbnail}
                src={channelItems.snippet.thumbnails.default.url}
                alt={channelItems.snippet.title}
              />
              <div className={styles.watchBox_info_channel_text}>
                <h3 className={styles.watchBox_info_channel_text_title}>
                  {channelItems.snippet.title}
                </h3>
                <span className={styles.watchBox_info_channel_text_subs}>
                  {`구독자 ${NumberCount(channelItems.statistics.subscriberCount)}명`}
                </span>
              </div>
              <button
                className={styles.watchBox_info_channel_btn}>
                구독
              </button>
            </div>

            <div className={styles.watchBox_info_btns}>
              <button className={styles.watchBox_info_btns_like}>
                <AiOutlineLike className={styles.emoji_like} />
                {NumberCount(videoItems.statistics.likeCount)}
              </button>
              <div className={styles.watchBox_info_btns_line}></div>
              <button
                className={styles.watchBox_info_btns_dislike}
              ><AiOutlineDislike className={styles.emoji_dislike} /></button>
              {/* 좋아요 수 작업한후 스타일링 다시 하기 */}
            </div>
          </div>
          <WatchInfo videoItems={videoItems} channelItems={channelItems} />
        </article>
      ))
      }
    </section>
  )
}
