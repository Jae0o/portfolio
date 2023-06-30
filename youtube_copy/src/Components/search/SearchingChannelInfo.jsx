import React from 'react';
import styles from '../../CSS/SearchingChannelInfo.module.css';
import { useQuery } from '@tanstack/react-query';
import { FakeApi } from '../../api/FakeApi';
// import { Link } from 'react-router-dom';
// import { YoutubeApi } from '../../api/YoutubeApi';

export default function SearchingChannelInfo({ channelId }) {

  const { data: channelItems } = useQuery(
    ['serachingVideoCard', channelId], () => {
      const CallApi = new FakeApi();
      return CallApi.findChannelDetail(channelId);
    }
  )


  return (
    <div className={styles.channelInfo_lineBox}>
      {channelItems && channelItems.map((items) => (
        <div
          key={items.id}
          className={styles.channelInfo_box}
        >
          <img
            src={items.snippet.thumbnails.default.url}
            alt={items.snippet.title}
            className={styles.channelInfo_imgBox_thumbnail}
          />
          <h3 className={styles.channelInfo_box_title}>{items.snippet.title}</h3>
        </div>
      ))}
    </div>
  )
}
