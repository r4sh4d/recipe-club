import React from 'react'
import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>Recipe Collection</h1>
      <span className={styles.author}>by RASHAD MURSHUDOV</span>
    </div>
    <div className={styles.logoContainer}>
      <Link to="/"><img className={styles.logo} src={require('../images/logo.png')} alt="Logo" /></Link>
    </div>
  </header>
)

export default Header