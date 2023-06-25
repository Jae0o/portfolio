import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import styles from '../CSS/Navbar.module.css';
import { BsSearch } from 'react-icons/bs';

export default function Navbar() {
  const { keyword } = useParams();

  const [Text, setText] = useState('');

  const Navigate = useNavigate();

  const OnChange = (e) => { setText(e) };

  const OnSubmit = (e) => {
    e.preventDefault();
    if (Text.trim().length === 0) {
      return
    } else {
      Navigate(`/videos/${Text}`)
    }
  };

  const logoUrl = 'Logo/yt_logo_rgb_light.png';

  // 뒤돌아 가기시 검색창 또한 이전의 검색 결과와 같게 만들어주기 위한 Effect
  useEffect(() => { setText(keyword || "") }, [keyword])

  return (
    <nav className={styles.nav_box}>
      <Link to='/' className={styles.nav_logo}>
        <img className={styles.nav_logo_img} src={logoUrl} alt='Nav_Logo' />
      </Link>

      <form onSubmit={OnSubmit} className={styles.nav_form}>
        <input
          className={styles.nav_form_input}
          type='text'
          placeholder='Search...'
          onChange={(e) => OnChange(e.target.value.trim())}
          value={Text} />
        <button className={styles.nav_form_button}> <BsSearch /></button>
      </form>
    </nav>
  )
}