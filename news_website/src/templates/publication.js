import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

//import Header from "../components/header"

export const query = graphql`
  query PublicationTemplate($id: String!) {
    strapiPublication(id: {eq: $id}) {
      Title
      Content
      Poster {
          childImageSharp {
            fluid(maxWidth: 650, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      Author {
        id
        username
      }
    }
  }
`

const PublicationTemplate = ({ data }) => (
  <>
    <Layout>
      {/*<Header headerTitle={data.strapiSinglePage.Title} headerDescription={data.strapiSinglePage.Title} />*/}
    
      <h1>{data.strapiPublication.Title}</h1>
      <p>by <Link to={`/authors/User_${data.strapiPublication.Author.id}`}>{data.strapiPublication.Author.username}</Link></p>
      <Img fluid={data.strapiPublication.Poster.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: data.strapiPublication.Content }} />
    </Layout>
  </>
)

export default PublicationTemplate
