import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Seo from '../../../components/seo'
import Layout from '../../../components/layout'

function ImageAttr(inputElem, defaultElem) {
  if (inputElem === null) {
    return defaultElem;
  }

  return inputElem;
}

class TeamPage extends React.Component {
  componentDidMount() {
    const { pageContext } = this.props;
    
    document.querySelector(".link-ua").href = pageContext.alias_ua;
    document.querySelector(".link-en").href = pageContext.alias_en;
  }

  componentDidUpdate() {
    
  }

  render() {
    return (
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

              TeamData: strapiSinglePage(strapiId: {eq: 2}) {
                Title: Title_En
                Description: Description_En
              }

              allStrapiMember(sort: {order: ASC, fields: MenuIndex}) {
                edges {
                  node {
                    id
                    Title: Title_En
                    Content: Content_En
                    Image {
                      childImageSharp {
                        fluid(maxWidth: 520, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    ImageTitle: ImageTitle_En
                    ImageAlt: ImageAlt_En
                  }
                }
              }
            }
          `}
          render={data => (
            <>
              <Seo  title       = {data.TeamData.Title + " | ARC.UA"}
                    description = {data.TeamData.Description} />

              <section className="startPage-section team-section">
                <div className="team-wrapper">
                  <div className="row row-team">
                    <div className="startPage-block team-block">
                      <div className="main-title-block">
                        <h2>{data.TeamData.Title}</h2>
                      </div>
                      
                      <div className="group content-block tpls-block">
                        <div className="float-l large-12 tpl-block">
                          {data.allStrapiMember.edges.map(document => {
                            return (
                              <div key={document.node.id} className="float-l large-12 tpl-block">
                                <div className="float-l small-4 image-block left-block">
                                  <Img  fluid          = {document.node.Image.childImageSharp.fluid}
                                        objectFit      = "cover"
                                        objectPosition = "50% 50%"
                                        title          = {ImageAttr(document.node.ImageTitle, document.node.Title)}
                                        alt            = {ImageAttr(document.node.ImageAlt, document.node.Title + " | ARC.UA")} />
                                </div>
                                
                                <div className="float-l small-8 description-block right-block">
                                  <div className="title-block">
                                    <h3>{document.node.Title}</h3>
                                  </div>
                                    
                                  <div  className="text-block"
                                        dangerouslySetInnerHTML={{ __html: document.node.Content }} />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        />
      </Layout>
    );
  }
}

export default TeamPage
