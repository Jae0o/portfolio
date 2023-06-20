import React from 'react'
import styles from '../../../../CSS/Planner/Filter.module.css'

export default function Filter({ FilterList, UpDateCheckBox, CheckList, name }) {
  return (
    <form className={styles.MainBox}>
      <p className={styles.Title}>{name}</p>
      {FilterList.map((list, index) => {
        return (
          <div key={index} className={styles.ItemBox}>
            <input
              id={list}

              type='checkbox'
              checked={CheckList.includes(list)}
              onChange={(e) => {
                UpDateCheckBox(e, list.trim())
              }}
            />

            <label htmlFor={list} className={styles.Text}>
              <em></em>
              {list}
            </label>
          </div>

        )
      })}
    </form>

  )
}
