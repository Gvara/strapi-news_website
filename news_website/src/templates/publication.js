import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

export const query = graphql`
  query PublicationTemplate($id: String!) {
    strapiPublication(id: {eq: $id}) {
      Title
      Content
      Poster_Main {
          childImageSharp {
            fluid(maxWidth: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      author {
        id
        username
      }
    }
  }
`

const PublicationTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPublication.Title}</h1>
    <p>by <Link to={`/authors/User_${data.strapiPublication.author.id}`}>{data.strapiPublication.author.username}</Link></p>
    <Img fluid={data.strapiPublication.Poster_Main.childImageSharp.fluid} />
    <div dangerouslySetInnerHTML={{ __html: data.strapiPublication.Content }} />
  </Layout>
)

export default PublicationTemplate
