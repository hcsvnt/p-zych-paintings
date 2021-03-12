import React, { useState } from "react";
import Layout from "../components/Layout";
import ShippingComponent from '../components/ShippingComponent';
import { graphql } from "gatsby";

const ShippingPage = ( {data} ) => {
  console.log(data)

  const sampleTitle = data.allContentfulShippingOption.edges[0].node.title;
  console.log(sampleTitle)
  const optionsArray = data.allContentfulShippingOption.edges;

  const [ shippingOptions, setShippingOptions] = useState(optionsArray);
  
      

  return (
    <Layout>
      <div>
        <h2>
            Shipping options:
        </h2>
        <ShippingComponent
          title = { shippingOptions[0].node.title }
          details = { shippingOptions[0].node.details.raw }
        />
        <ShippingComponent
          title = { shippingOptions[1].node.title }
          details = { shippingOptions[1].node.details.raw }
        />
      </div>
      
    </Layout>
  )
}

export default ShippingPage

export const query = graphql `
{
    allContentfulShippingOption {
      edges {
        node {
          id
          title
          details {
            raw
          }
        }
      }
    }
  }
`

// {
//   allContentfulShippingOption {
//     edges {
//       node {
//         id
//         title
//         details {
//           raw
//         }
//       }
//     }
//   }
// }

