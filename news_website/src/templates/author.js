import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      publications {
        id
        Title
        Description
      }
    }
  }
`

const UserTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiUser.username}</h1>
      <ul>
        {data.strapiUser.publications.map(publication => (
          <li key={publication.id}>
            <h2>
              <Link to={`/publications/Publication_${publication.id}`}>{publication.Title}</Link>
            </h2>
            <p>{publication.Description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )

export default UserTemplate
