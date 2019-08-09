import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Form from './components/Form';
import RecipeCard from './components/RecipeCard'
import Header from './components/Header'
import useSpinner from './spinner/useSpinner'

// -------API KEYS---------

// const API_KEY = "0abf5b4ffed1e40d2b7039266dac7086"
// const API_KEY = "14bc2ab9b94d71d7273fdf67f88fba08"
// const API_KEY = "a452c267a5f31de9268dab05c0fbe965"
// const API_KEY = "d8ad7cd0ff1b93c3bc58a82ad7f98ea9"
// const API_KEY = "0d2858da5ab5402223dd18daecf67659"
// const API_KEY = "a43b5e59dc13c4677cb3960d471e50e5"
// const API_KEY = "c5fd8dd82bcdba42f76ab0b6b1d9bffa"
// const API_KEY = "7d8ebf2dc73caa4556d23c117662daab"
// const API_KEY = "bb16d177f49e97b3dabe5898945c329c"
const API_KEY = "efcfefe0749e044fb4518479253d3d50"




function App(props) {
  const [recipes, setRecipes] = useState([])
  const [text, setText] = useState('')
  const [spinner, showSpinner, hideSpinner] = useSpinner()

  const handleSubmit = async e => {
    e.preventDefault()
    showSpinner()
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${text}&count=50`)
    const data = await api_call.json()
    await setRecipes(data.recipes)
    hideSpinner()
  }

  useEffect(() => {
    const data = JSON.stringify(recipes);
    localStorage.setItem('recipes', data)
  }, [recipes])

  useEffect(() => {
    const json = localStorage.getItem('recipes')
    const data = JSON.parse(json)
    setRecipes(data)
  }, [])

  const handleChange = text => {
    setText(text)
  }

  return (
    <div className={styles.main}>
      <Header />
      <Form text={text} handleChange={handleChange} handleSubmit={handleSubmit} />
      {recipes ?
        <div className={`${styles.recipesContainer}`}>
          {recipes.length > 0 && recipes.map(recipe =>
            <RecipeCard
              imgUrl={recipe.image_url}
              title={recipe.title}
              publisher={recipe.publisher}
              key={recipe.recipe_id}
              id={recipe.recipe_id}
            />
          )}
        </div> : null}
      {spinner}
    </div >
  );
}

export default App;
