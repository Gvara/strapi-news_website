import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Seo from '../components/seo'
import Header from '../components/header'
import Layout from '../components/layout' 

//import Header from "../components/header"

function ImageAttr(inputElem, defaultElem) {
  if (inputElem === null) {
    return defaultElem;
  }

  return inputElem;
}

export const query = graphql`
  query PublicationTemplate($id: String!) {
    headerImage: strapiGeneralSettings(strapiId: {eq: 2}) {
      Data {
        ... on StrapiGeneralSettingsData {
          SiteHeader_Image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          SiteHeader_ImageTitle
          SiteHeader_ImageAlt
        }
      }
    }

    strapiPublication(id: {eq: $id}) {
      Title
      Description
      Content
      Poster {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PosterTitle
      PosterAlt
    }
  }
`

const PublicationTemplate = ({ data }) => (
  <>
    <Seo title       = {data.strapiPublication.Title + " | ARC.UA"}
         description = {data.strapiPublication.Description} />

    <Header headerClass       = "article-header"
            headerTitle       = {data.strapiPublication.Title} 
            headerDescription = {data.strapiPublication.Description}
            headerImage       = {data.headerImage.Data[0].SiteHeader_Image.childImageSharp.fluid}
            headerImageTitle  = {ImageAttr(data.headerImage.Data[0].SiteHeader_ImageTitle, data.strapiPublication.Title)}
            headerImageAlt    = {ImageAttr(data.headerImage.Data[0].SiteHeader_ImageAlt, data.strapiPublication.Title + " | ARC.UA")} />

    <Layout>

      <section className="article-poster-section">
        <div className="article-poster-wrapper">
          <div className="row row-article-poster">
            <div className="article-poster-block">
              <div className="image-block">
                <Img fluid = {data.strapiPublication.Poster.childImageSharp.fluid}
                     title = {ImageAttr(data.strapiPublication.PosterTitle, data.strapiPublication.Title)}
                     alt   = {ImageAttr(data.strapiPublication.PosterAtl, data.strapiPublication.Title + " | ARC.UA")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-section article-content-section">
        <div className="article-content-wrapper">
          <div className="row row-article-content">
            <div className="article-content-block">
              <article className="text-block" 
                       dangerouslySetInnerHTML={{ __html: data.strapiPublication.Content }} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>
)

export default PublicationTemplate
