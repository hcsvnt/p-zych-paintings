import React, { useState } from "react";
import { graphql } from "gatsby";
import Painting from '../components/Painting';
import './main.css';

function App({ data }) {
  // data is the data object recieved from graphql query

  const paintingsData = data.allContentfulPainting.edges; 
  // array of data from CTF

  const [ paintings, setPaintings ] = useState(paintingsData);
  const [ index, setIndex ] = useState(0);

  function nextPainting() {
    console.log('show me stuff');
    if (index === paintings.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function prevPainting() {
    console.log('prevpaint');
    if (index === 0) {
      setIndex(paintings.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  
  return (
    <div className="wrapper">
        <button onClick={nextPainting}>nexxt</button>
        <button onClick={prevPainting}>prev</button>

        <Painting
        key = {index}
        title = {paintings[index].node.title}
        imageUrl = {paintings[index].node.image.file.url}
        />
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