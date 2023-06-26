import React from 'react';
import styles from '../../../CSS/ChannelCard.module.css';
import { Link } from 'react-router-dom';
import { BsBell } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';

export default function Channel_card({ channelCode }) {
  // const [Item, setItem] = useState();
  // useEffect(() => {
  //   fetch(`/data/search/channel/${channelCode}.json`)
  //     .then((data) => data.json())
  //     .then((JSON) => {
  //       setItem(...JSON.items)
  //     })
  // }, [channelCode])


  const { data: item } = useQuery(
    ['item', channelCode], async () => {
      return fetch(`/data/search/channel/${channelCode}.json`)
        .then((data) => data.json())
        .then((JSON) => JSON.items);
    }
  )

  const linkUrl = `/channel/${channelCode}`

  return (
    <article>
      {item && item.map((Item, index) => (
        <div key={index} className={styles.cardBox}>
          <Link to={linkUrl} className={styles.channelCard}>

            <div className={styles.channelCard_imgBox}>
              <img
                className={styles.channelCard_imgBox_logo}
                src={Item?.snippet?.thumbnails.medium.url}
                width={Item?.snippet?.thumbnails.medium.width}
                height={Item?.snippet?.thumbnails.medium.height}
                alt='channelThumbnail' />
            </div>

            <div className={styles.channelCard_textBox}>
              <h3 className={styles.channelCard_textBox_title}>{Item?.snippet?.title}</h3>
              <div className={styles.channelCard_textBox_subtitle} >
                <p className={styles.channelCard_textBox_subtitle_text}>{Item?.snippet?.customUrl}</p>
                <p className={styles.channelCard_textBox_subtitle_text}>{`구독자 ${Item?.statistics?.subscriberCount} 명`}</p>
              </div>
              <p className={styles.channelCard_textBox_des}>
                {Item?.snippet?.description}
              </p>
            </div>

          </Link>
          <div className={styles.channelCard_btBox}>
            <button
              className={styles.channelCard_btBox_bt}
              onClick={() => alert(" 구독 버튼 기능 미구현 ㅈㅅ")}>
              <BsBell className={styles.BsBell} />구독 중 <MdKeyboardArrowDown className={styles.Arrow} />
            </button>
          </div>
        </div>
      ))}
    </article>
  )
}
