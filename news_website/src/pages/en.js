import React from 'react'
//import ReactMarkdown from 'react-markdown'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Seo from '../components/seo'
import Header from '../components/header'
import Layout from '../components/layout'
// import Image from "../components/image"
// import SEO from "../components/seo"

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
              to={`/en/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
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
              to={`/en/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
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
              to={`/en/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
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
              to={`/en/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
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
              to={`/en/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
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
            to={`/en/${data.publicationsCategotyAlias.Alias}/${document.node.Alias}.html`} 
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

const IndexPage = () => (
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
            Alias: Alias_En
          }

          homePageData: strapiSinglePage(strapiId: {eq: 1}) {
            Title
            Description
            Blocks {
              ... on StrapiSinglePageBlocks {
                Header_Title: Header_Title_En
                Header_Description: Header_Description_En
                Header_Image {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                Header_ImageTitle: Header_ImageTitle_En
                Header_ImageAlt: Header_ImageAlt_En
                Article_Title: Article_Title_En
                Article_Content: Article_Content_En
              }
            }
          }

          homePageIntroPublication: strapiSinglePage(strapiId: {eq: 4}) {
            Title: Title_En
          }
          
          allStrapiPublication(sort: {order: ASC, fields: MenuIndex}) {
            edges {
              node {
                id
                Alias: Alias_En
                Title: Title_En
                Description: Description_En
                IntroText: IntroText_En
                Poster {
                  childImageSharp {
                    fluid(maxWidth: 956, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                PosterTitle: PosterTitle_En
                PosterAlt: PosterAlt_En
                PreviewStyle
				        ColorStyle
              }
            }
          }
          homePageContacts: strapiSinglePage(strapiId: {eq: 3}) {
            Title: Title_En
            Content: Content_En
          }
        }
      `}
      render={data => (
        <>
          <Seo title       = "ARC.UA"
               description = {data.homePageData.Description} />

          <Header headerClass       = "home-page"
                  headerTitle       = {data.homePageData.Blocks[0].Header_Title}
                  headerDescription = {data.homePageData.Blocks[0].Header_Description}
                  headerImage       = {data.homePageData.Blocks[0].Header_Image.childImageSharp.fluid}
                  headerImageTitle  = {ImageAttr(data.homePageData.Blocks[0].Header_ImageTitle, data.metaData.Data[0].SiteMeta_Title)}
                  headerImageAlt    = {ImageAttr(data.homePageData.Blocks[0].Header_ImageAlt, data.metaData.Data[0].SiteMeta_Title + " | ARC.UA")} />

            <section className="home-page intro-section">
              {/* <a name="about_us" className="anchor"></a> */}
              
              <div className="intro-wrapper">
                <div className="row row-intro">
                  <div className="group intro-block">
                    <article className="float-l small-8 description-block left-block">
                      <div className="main-title-block">
                        <h2>{data.homePageData.Blocks[1].Article_Title}</h2>
                      </div>
                        
                      <div className="text-block" 
                           dangerouslySetInnerHTML={{ __html: data.homePageData.Blocks[1].Article_Content }} />
                    </article>
                  </div>
                </div>
              </div>
          </section>

          <section className="home-page articles_list-section">
            <div className="articles_list-wrapper">
              <div className="row row-articles_list">
                <div className="articles_list-block">
                  <div className="main-title-block">
                    <h2>{data.homePageIntroPublication.Title}</h2>
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

          {/*
          <main>
            {data.allStrapiPublication.edges.map(document => {
              return (
                <li key={document.node.id}>
                  <h2>
                    <Link to={`/publications/${document.node.id}`}>{document.node.Title}</Link>
                  </h2>
                  <Img fixed={document.node.Poster.childImageSharp.fixed} />
                  <p>{document.node.Description}</p>
                </li>
              )
            })}
          </main>
          */}

          <section className="home-page contacts-section">
            <div className="contacts-wrapper">
              <div className="row row-contacts">
                <div className="contacts-block">
                  <div className="main-title-block">
                    <h2>{data.homePageContacts.Title}</h2>
                  </div>
                  
                  <div className="description-block">
                    <div className="title-block">
                      <h3>Email:</h3>
                    </div>
                    
                    <div className="text-block">
                      <a href="mailto:arcua.org@gmail.com">arcua.org@gmail.com</a>
                    </div>
                    
                    <div className="title-block">
                      <h3>Facebook:</h3>
                    </div>
                    
                    <div className="text-block">
                      <a href="https://www.facebook.com/ArcUA.org/" target="_blank" rel="nofollow noopener noreferrer">www.facebook.com/ArcUA.org</a>
                    </div>
                  </div>

                  {/*<div className="description-block"
                       dangerouslySetInnerHTML={{ __html: data.homePageContacts.Content }} />*/}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    />
  </Layout>
)

export default IndexPage
