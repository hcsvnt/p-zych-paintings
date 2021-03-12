import React, { useState } from "react";
import { graphql } from "gatsby";
import Painting from '../components/Painting';
import Layout from "../components/Layout";

function PaintingPage({ data }) {
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
    <Layout>
        <div className="wrapper">

          <Painting
          key = {index}
          title = {paintings[index].node.title}
          imageUrl = {paintings[index].node.image.file.url}
          />
          <div className="navi__paint">
            <button onClick={nextPainting} className="button__next button" >next</button>
            <button onClick={prevPainting} className="button__prev button" >prev</button>
          </div>
      </div>
    </Layout>
    
  )
}

export default PaintingPage

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