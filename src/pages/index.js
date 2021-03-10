import React from "react";
import { graphql } from "gatsby";
import Painting from '../components/Painting';
import './main.css';
import Counter from "../components/Counter";


function App({ data }) {
  console.log(data)

  const paintings = data.allContentfulPainting.edges
  // const title = paintings.edges[0].node.title.

  const paintingComponents = paintings.map(painting => {
    return (
      <Painting
        key = {painting.node.title}
        title = {painting.node.title}
        imageUrl = {painting.node.image.file.url}
      />
    )
  }
)
  
  return (
    <div className="wrapper">
      <h1>estem Jurek Kiler i mam wszystko w dupie</h1>
      <p>xx</p>

      {/* <Painting 
        title = {paintings[0].node.title}
        imageUrl = {paintings[0].node.image.file.url}
        /> */}
        {paintingComponents}
        <p>xxx</p>

        <Counter />
      
    </div>
  )
}


export default App

export const query = graphql`
    query {
    allContentfulPainting {
      edges {
        node {
          title
          id
          description {
            id
          }
          image {
            id
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
  `