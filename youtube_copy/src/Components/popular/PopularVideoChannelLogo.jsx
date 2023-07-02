import React from 'react'
import styles from '../../CSS/PopularVideoChannelLogo.module.css'
import { useQuery } from '@tanstack/react-query';
import { FakeApi } from '../../api/FakeApi';
// import { YoutubeApi } from '../../api/YoutubeApi';

export default function PopularVideoChannelLogo({ channelId }) {
  const { data: channelData } = useQuery(
    ["channelInfo_Popular", channelId], () => {
      const CallApi = new FakeApi();
      return CallApi.findChannelDetail(channelId);
    }
  )

  return (
    <article className={styles.channelInfo_box}>
      {channelData && channelData.map((items) => (
        <img
          key={items.id}
          className={styles.channelInfo_box_logo}
          src={items.snippet.thumbnails.default.url}
          alt={items.snippet.title} />
      ))}
    </article>
  )
}
