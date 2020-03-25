import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Seo from '../../../components/seo'
import Layout from '../../../components/layout'

function ImageAttr(inputElem, defaultElem) {
  if (inputElem === null) {
    return defaultElem;
  }

  return inputElem;
}

function PublicationPreviewStyle(data, document, inputElem) {
  if (inputElem === "style_1") {
    return (
      <div key={document.node.id} className="float-l medium-6 tpl-wrapper style-1">
        <Link className="tpl-block" 
              to={`/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
              style={PublicationColorStyle(document.node.ColorStyle)}>
          <div className="description-block"
               style={PublicationColorStyle(document.node.ColorStyle)}>
            <div className="title-block">
              <h3>{document.node.Title}</h3>
            </div>
            
            <div className="text-block" 
                 dangerouslySetInnerHTML={{ __html: document.node.IntroText }} />
          </div>
        </Link>
      </div>
    );
  }

  if (inputElem === "style_2") {
    return (
      <div key={document.node.id} className="float-l medium-6 tpl-wrapper style-2">
        <Link className="tpl-block" 
              to={`/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
              style={PublicationColorStyle(document.node.ColorStyle)}>
          <div className="description-block"
               style={PublicationColorStyle(document.node.ColorStyle)}>
            <div className="title-block">
              <h3>{document.node.Title}</h3>
            </div>
            
            <div className="text-block" 
                 dangerouslySetInnerHTML={{ __html: document.node.IntroText }} />
          </div>

          <div className="poster-wrapper">
            <div className="poster-block image-size-cover-block">

            <Img fluid          = {document.node.Poster.childImageSharp.fluid}
                 objectFit      = "cover"
                 objectPosition = "50% 50%"
                 title          = {ImageAttr(document.node.PosterTitle, document.node.Title)}
                 alt            = {ImageAttr(document.node.PosterAlt, document.node.Title + " | ARC.UA")}
                 style          = {{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}
                 imgStyle       = {{ top: '50%', left: '50%'}} />
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (inputElem === "style_3") {
    return (
      <div key={document.node.id} className="float-l medium-6 tpl-wrapper style-3">
        <Link className="tpl-block" 
              to={`/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
              style={PublicationColorStyle(document.node.ColorStyle)}>
          <div className="description-block"
               style={PublicationColorStyle(document.node.ColorStyle)}>
            <div className="title-block">
              <h3>{document.node.Title}</h3>
            </div>
            
            <div className="text-block" 
                 dangerouslySetInnerHTML={{ __html: document.node.IntroText }} />
          </div>

          <div className="poster-wrapper">
            <div className="poster-block image-size-cover-block">

            <Img fluid          = {document.node.Poster.childImageSharp.fluid}
                 objectFit      = "cover"
                 objectPosition = "50% 50%"
                 title          = {ImageAttr(document.node.PosterTitle, document.node.Title)}
                 alt            = {ImageAttr(document.node.PosterAlt, document.node.Title + " | ARC.UA")}
                 style          = {{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}
                 imgStyle       = {{ top: '50%', left: '50%'}} />
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (inputElem === "style_4") {
    return (
      <div key={document.node.id} className="float-l medium-6 tpl-wrapper style-4">
        <Link className="tpl-block" 
              to={`/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
              style={PublicationColorStyle(document.node.ColorStyle)}>
          <div className="description-block"
               style={PublicationColorStyle(document.node.ColorStyle)}>
            <div className="title-block">
              <h3>{document.node.Title}</h3>
            </div>
            
            <div className="text-block" 
                 dangerouslySetInnerHTML={{ __html: document.node.IntroText }} />
          </div>

          <div className="poster-wrapper">
            <div className="poster-block image-size-cover-block">

            <Img fluid          = {document.node.Poster.childImageSharp.fluid}
                 objectFit      = "cover"
                 objectPosition = "50% 50%"
                 title          = {ImageAttr(document.node.PosterTitle, document.node.Title)}
                 alt            = {ImageAttr(document.node.PosterAlt, document.node.Title + " | ARC.UA")}
                 style          = {{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}
                 imgStyle       = {{ top: '50%', left: '50%'}} />
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (inputElem === "style_5") {
    return (
      <div key={document.node.id} className="float-l large-12 tpl-wrapper style-5">
        <Link className="group tpl-block" 
              to={`/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
              style={PublicationColorStyle(document.node.ColorStyle)}>
          
          <div className="float-l medium-6 poster-wrapper">
            <div className="poster-block image-size-cover-block">

            <Img fluid          = {document.node.Poster.childImageSharp.fluid}
                 objectFit      = "cover"
                 objectPosition = "50% 50%"
                 title          = {ImageAttr(document.node.PosterTitle, document.node.Title)}
                 alt            = {ImageAttr(document.node.PosterAlt, document.node.Title + " | ARC.UA")} />
            </div>
          </div>

          <div className="float-l medium-6 description-block"
               style={PublicationColorStyle(document.node.ColorStyle)}>
            <div className="title-block">
              <h3>{document.node.Title}</h3>
            </div>
            
            <div className="text-block" 
                 dangerouslySetInnerHTML={{ __html: document.node.IntroText }} />
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div key={document.node.id} className="float-l medium-6 tpl-wrapper style-1">
      <Link className="tpl-block" 
            to={`/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
            style={PublicationColorStyle(document.node.ColorStyle)}>
        <div className="description-block"
              style={PublicationColorStyle(document.node.ColorStyle)}>
          <div className="title-block">
            <h3>{document.node.Title}</h3>
          </div>
          
          <div className="text-block" 
               dangerouslySetInnerHTML={{ __html: document.node.IntroText }} />
        </div>
      </Link>
    </div>
  );
}

function PublicationColorStyle(inputElem) {
  const style = {};

  if (inputElem === "light") {
    const style = {
      backgroundColor: '#eaeaea',
      color: '#000',
    }

    return style;
  }

  return style;
}

const PublicationsPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          metaData: strapiGeneralSettings(strapiId: {eq: 1}) {
            Data {
              ... on StrapiGeneralSettingsData {
                SiteMeta_Title
                SiteMeta_Description
              }
            }
          }

          publicationsCategotyAlias: strapiNavigation(strapiId: {eq: 1}) {
            Alias
          }
          
          PublicationsData: strapiSinglePage(strapiId: {eq: 4}) {
            Title
            Description
          }
          
          allStrapiPublication(sort: {order: ASC, fields: MenuIndex}) {
            edges {
              node {
                id
                Alias
                Title
                Description
                IntroText
                Poster {
                  childImageSharp {
                    fluid(maxWidth: 956, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                PosterTitle
                PosterAlt
                PreviewStyle
                ColorStyle
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Seo title       = {data.PublicationsData.Title + " | ARC.UA"}
               description = {data.PublicationsData.Description} />

          <section className="startPage-section articles_list-section">
            <div className="articles_list-wrapper">
              <div className="row row-articles_list">
                <div className="startPage-block articles_list-block">
                  <div className="main-title-block">
                    <h2>{data.PublicationsData.Title}</h2>
                  </div>
                  
                  <div className="content-block tpls-block out-row-width">
                    {data.allStrapiPublication.edges.map(document => {
                      return (
                        PublicationPreviewStyle(data, document, document.node.PreviewStyle)
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    />
  </Layout>
)

export default PublicationsPage
