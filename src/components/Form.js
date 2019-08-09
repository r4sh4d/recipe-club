import React from 'react'
import styles from '../styles/form.module.css'

const Form = (props) => {

  const handleChange = e => {
    props.handleChange(e.target.value)
  }

  return (
    <form onSubmit={props.handleSubmit}
      className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          name="text"
          value={props.text}
          onChange={handleChange}
          placeholder="Search for a recipe"
        />
      </div>
      <button className={styles.button}>Search</button>
    </form>
  )
}

export default Form