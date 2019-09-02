import React from 'react'
import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
  window.onscroll = function (e) {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('scroll').style.width = scrolled + '%'
  }

  return (
    <div>
      <header className={styles.outerContainer}>
        <div className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.title}>Recipe Collection</h1>
            <span className={styles.author}>by RASHAD MURSHUDOV</span>
          </div>
          <div className={styles.logoContainer}>
            <Link className={styles.logoLink} to="/"><img className={styles.logo} src={require('../images/logo.png')} alt="Logo" /></Link>
          </div>
        </div>
      </header>
      <div className={styles.scrollContainer}>
        <div id="scroll" className={styles.scroll}></div>
      </div>
    </div>
  )
}

export default Header