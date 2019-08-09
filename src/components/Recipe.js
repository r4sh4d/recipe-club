import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';
import styles from '../styles/recipe.module.css'

// const API_KEY = "d8ad7cd0ff1b93c3bc58a82ad7f98ea9"
// const API_KEY = "a452c267a5f31de9268dab05c0fbe965"
// const API_KEY = "58b9e45ff6922f7ed5367bbe466ec82d"
// const API_KEY = "0abf5b4ffed1e40d2b7039266dac7086"
const API_KEY = "a43b5e59dc13c4677cb3960d471e50e5"




const Recipe = (props) => {

  const [activeRecipe, setActiveRecipe] = useState([])

  useEffect(() => {
    async function fetchData() {
      const title = props.location.state.recipe
      const request = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
      const results = await request.json()
      setActiveRecipe(results.recipes[0])
    }
    fetchData()
  }, [props.location.state.recipe])



  console.log(activeRecipe)
  return (
    <div className={styles.container}>
      <Header />
      {activeRecipe.length !== 0 &&
        <div className={styles.recipeContainer}>
          <h2 className={styles.recipeTitle}>{activeRecipe.title}</h2>
          <p className={styles.recipePublisher}>Publisher: {activeRecipe.publisher}</p>
          <div className={styles.imageContainer}>
            <img src={activeRecipe.image_url} className={styles.recipeImage} alt={activeRecipe.title} />
          </div>
          <p className={styles.recipeUrlContainer}>Recipe:
            <a className={styles.recipeUrl} href={activeRecipe.f2f_url}>{activeRecipe.f2f_url}</a>
          </p>
          <p className={styles.recipeUrlContainer}>Publisher's website:
            <a className={styles.recipeUrl} href={activeRecipe.publisher_url}>{activeRecipe.publisher_url}</a>
          </p>
          <Link className={`${styles.backLink} ${styles.backButton}`} to="/">Go back</Link>
        </div>}

    </div>

  )
}

export default Recipe