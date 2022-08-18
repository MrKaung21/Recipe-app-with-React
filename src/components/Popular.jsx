import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

const Popular = () => {
  const [popular, setPopular] = useState()

 

  const getPopular = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      const data = await api.json()
      setPopular(data.recipes) 
  }   

  useEffect(() => {
    getPopular()
  }, [])

  return (
      <Wrapper>
          <Splide>
            {popular?.map((recipe) => {
                return (
                    <SplideSlide>
                        <Card key={recipe.id}>
                          <p>{recipe.title}</p>
                          <img src={recipe.image} alt={recipe.title} />
                        </Card>
                    </SplideSlide>
                )
            })}
          </Splide>
      </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;

    img{
      border-radius: 2rem;
    }
`


export default Popular
