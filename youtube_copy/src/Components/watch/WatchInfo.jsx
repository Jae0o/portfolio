import React from 'react';
import styles from '../../CSS/WatchInfo.module.css';
import ChangeDate from '../../util/yearMonthDay';
import FullInfo from './FullInfo.jsx';

export default function watchInfo({ videoItems, channelItems }) {
  const viewCount = parseInt(videoItems.statistics.viewCount).toLocaleString();
  console.log(videoItems)



  // const preTag = document.getElementById("myPreTag");
  // const preText = preTag.innerText;

  // const urlRegex = /(https?:\/\/[^\s]+)/g;
  // const newPreText = preText.replace(urlRegex, '<a href="$1">$1</a>');
  // preTag.innerHTML = newPreText;

  const onIncrease = () => {
    const Info = document.getElementById("watchInfo")
    Info.classList.add("offDisplay")
    const FullInfo = document.getElementById("watchFullInfo");
    FullInfo.classList.remove("offDisplay");
    console.log(Info)
  }

  const onReduce = () => {
    const Info = document.getElementById("watchInfo")
    Info.classList.remove("offDisplay")
    const FullInfo = document.getElementById("watchFullInfo");
    FullInfo.classList.add("offDisplay");
    console.log(Info)
  }


  return (
    <article className={styles.watchInfo} >
      <div
        onClick={onIncrease}
        id='watchInfo'
        className={styles.watchInfo_box}
      >
        <div className={styles.watchInfo_box_top}>
          <span className={styles.watchInfo_box_top_view}>
            {`조회수 ${viewCount}회`}
          </span>
          <span className={styles.watchInfo_box_top_date}>
            {ChangeDate(videoItems.snippet.publishedAt)}
          </span>
        </div>
        <pre className={styles.watchInfo_des} id='myPreTag'>
          {videoItems.snippet.description}
        </pre>
        <p className={styles.watchInfo_fakeBtn}>더보기</p>
      </div>

      <div
        id='watchFullInfo'
        class="offDisplay"
        className={styles.watchInfo_box}
      >
        <FullInfo
          videoItmes={videoItems}
          channelItems={channelItems}
          viewCount={viewCount}
        />
        <button
          className={styles.reduce_btn}
          onClick={onReduce}
        >
          간략히
        </button>
      </div>
    </article >
  )
};