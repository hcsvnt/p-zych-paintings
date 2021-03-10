import React from "react";
import { graphql } from "gatsby"
import Painting from '../components/Painting'
import './main.css';


function App({ data }) {
  console.log('dupa')
  console.log(data)
  // console.log(data.allContentfulPainting.edges[0].node.title)

  const paintings = data.allContentfulPainting
  const title = paintings.edges[0].node.title

  return (
    <div className="wrapper">
      <h1>estem Jurek Kiler i mam wszystko w dupie</h1>
      <p>xx</p>

      {/* here paintings.forEach(painting => <Painting something />) */}
      {/* <Painting /> */}
      {/* <Painting title={title} /> */}
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