import React from 'react';
import styles from '../../CSS/SearchingChannelCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FakeApi } from '../../api/FakeApi';
// import { YoutubeApi } from '../../api/YoutubeApi';
import { BsBell } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { NumberCount } from '../../util/count';

export default function SearchingChannelCard({ channelId }) {
  const navigate = useNavigate();
  const { data: channelItems } = useQuery(
    ['searchingChannelCard', channelId], () => {
      const CallApi = new FakeApi();
      return CallApi.findChannelDetail(channelId)
    }
  )

  return (
    <ul
      className={styles.SearchingChannelCard_linkBox}>
      {channelItems && channelItems.map((items) => (
        <li
          key={items.id}
          className={styles.searchingChannelCard_box}
          onClick={() => navigate(`/channels/${channelId}`, { state: { channelItems: items } })}
        >
          <div className={styles.channelCard_imgBox}>
            <img
              className={styles.channelCard_imgBox_logo}
              src={items.snippet.thumbnails.medium.url}
              alt={items.snippet.title}
            />
          </div>

          <div className={styles.channelCard_textBox}>
            <h1 className={styles.channelCard_textBox_title}>{items.snippet.title}</h1>
            <div className={styles.channelCard_textBox_subtitle}>
              <span className={styles.channelCard_textBox_subtitle_id}>{items.snippet.customUrl}</span>
              <span className={styles.channelCard_textBox_subtitle_dot}>•</span>
              <span className={styles.channelCard_textBox_subtitle_subs}>
                {`구독자 ${NumberCount(items.statistics.subscriberCount)}명`}
              </span>
            </div>
            <p className={styles.channelCard_textBox_des}>{items.snippet.description}</p>
          </div>

          <button className={styles.channelCard_button}
            onClick={() => alert("응~ 미구현~")}
          >
            <BsBell className={styles.emoji_bell} />
            구독 버튼
            <IoIosArrowDown className={styles.emoji_downArrow} />
          </button>
        </li>
      ))}
    </ul>
  )
}
