import * as React from "react";
import Layout from "../components/Layout.js"
import '../components/AboutPage.css'
// import { Link } from "gatsby";
import AboutImageFull from "../images/About.png"

const AboutPage = () => {
  return (
      <Layout>
        <div className="about__text">
          <img src={AboutImageFull} className="about__image-full"></img>
          <h2>
            Patrycja Zych
          </h2>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur ad cum hic molestias ipsum et fugit 
              deleniti, inventore laborum facilis non ratione quisquam minima, nihil sint! Sed quaerat commodi, ab officiis 
              maxime impedit eum numquam iure, tempora, magnam sunt?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur ad cum hic molestias ipsum et fugit 
              deleniti, inventore laborum facilis non ratione quisquam minima, nihil sint!
              Debitis pariatur ad cum hic molestias ipsum et fugit 
              deleniti, inventore laborum facilis non ratione quisquam minima, nihil sint!
          </p>
        </div>        
      </Layout>
  )
}

export default AboutPage