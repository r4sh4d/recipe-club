import React from 'react'
import styles from '../styles/recipeCard.module.css'
import { Link } from 'react-router-dom'

const RecipeCard = props => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.recipeContainer}>
        <img src={props.imgUrl} className={styles.recipeImage} alt={props.title} />
        <h3 className={styles.recipeTitle}>{props.title.length < 22 ? `${props.title}` : `${props.title.substring(0, 22)}...`}</h3>
        <p className={styles.recipePublisher}>Publisher: {props.publisher}</p>
        <Link to={{
          pathname: `/recipe/${props.id}`,
          state: { recipe: props.title }

        }} className={styles.more}>View Recipe</Link>
      </div>
    </div>
  )
}

export default RecipeCard