import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import styles from '../CSS/Navbar.module.css';
import { BsSearch, BsYoutube } from 'react-icons/bs';


export default function Navbar() {
  const { keyword } = useParams();

  const [Text, setText] = useState('');

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate(`/videos/${Text}`)
  }

  // 뒤돌아 가기시 검색창 또한 이전의 검색 결과와 같게 만들어주기 위한 Effect
  useEffect(() => setText(keyword || ""), [keyword])

  return (
    <nav className={styles.nav_box}>
      <Link to='/' className={styles.nav_logo}>
        <BsYoutube className={styles.nav_logo_icon} />
        <h1 className={styles.nav_logo_title}>Youtube</h1>
      </Link>

      <form className={styles.nav_form}>
        <input
          className={styles.nav_form_input}
          type='text'
          placeholder='Search...'
          onChange={(e) => setText(e.target.value)}
          value={Text} />
        <button className={styles.nav_form_button} onClick={handleSubmit}> <BsSearch /></button>
      </form>
    </nav>
  )
}