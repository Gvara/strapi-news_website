import React from 'react'
//import ReactMarkdown from 'react-markdown'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <StaticQuery
        query={graphql`
          query {
            allStrapiPublication {
              edges {
                node {
                  id
                  Title
                  Description
                  Poster_Main {
                    childImageSharp {
                      fixed(width: 200, height: 125) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data =>
          data.allStrapiPublication.edges.map(document => {
            return (
              <li key={document.node.id}>
                <h2>
                  <Link to={`/publications/${document.node.id}`}>{document.node.Title}</Link>
                </h2>
                <Img fixed={document.node.Poster_Main.childImageSharp.fixed} />
                <p>{document.node.Description}</p>
              </li>
            )
          })
        }
      />
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
