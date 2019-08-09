import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';
import styles from '../styles/recipe.module.css'

// const API_KEY = "d8ad7cd0ff1b93c3bc58a82ad7f98ea9"
// const API_KEY = "a452c267a5f31de9268dab05c0fbe965"
const API_KEY = "0d2858da5ab5402223dd18daecf67659"
// const API_KEY = "0abf5b4ffed1e40d2b7039266dac7086"
// const API_KEY = "a43b5e59dc13c4677cb3960d471e50e5"
// const API_KEY = "14bc2ab9b94d71d7273fdf67f88fba08"
// const API_KEY = "c5fd8dd82bcdba42f76ab0b6b1d9bffa"





const Recipe = (props) => {

  const [activeRecipe, setActiveRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    async function fetchData() {
      const id = props.match.params.id
      const newId = window.location.href.substring(22);
      // console.log(props)
      const request = id ? await fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`) : await fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${newId}`)
      const results = await request.json()
      console.log(results)
      setActiveRecipe(results.recipe)
      setIngredients(results.recipe.ingredients)
    }
    fetchData()
  }, [props.match.params.id])

  return (
    <div className={styles.container}>
      <Header />
      {activeRecipe.length !== 0 &&
        <div className={styles.recipeContainer}>
          <div className={styles.flexContainerLeft}>
            <h2 className={styles.recipeTitle}>{activeRecipe.title}</h2>
            <p className={styles.recipePublisher}>Publisher: {activeRecipe.publisher}</p>
            <div className={styles.imageContainer}>
              <img src={activeRecipe.image_url} className={styles.recipeImage} alt={activeRecipe.title} />
            </div>
            <p className={styles.recipeUrlContainer}>Publisher's website:
            <a className={styles.recipeUrl} href={activeRecipe.publisher_url}>{activeRecipe.publisher_url}</a>
            </p>
          </div>

          <div className={styles.flexContainerRight}>
            <h3 className={styles.ingredientsHeader}>Ingredients</h3>
            {ingredients.length !== 0 &&
              ingredients.map((ingredient, i) => <div key={i}><p className={styles.ingredient}>{ingredient}</p><hr></hr></div>)}
            <Link className={`${styles.backLink} ${styles.backButton}`} to="/">Go back</Link>
          </div>

        </div>
      }

    </div>

  )
}

export default Recipe