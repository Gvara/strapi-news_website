import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Seo from '../../../components/seo'
import Layout from '../../../components/layout'

class ContactsPage extends React.Component {
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

              ContactsData: strapiSinglePage(strapiId: {eq: 3}) {
                Title: Title_En
                Description: Description_En
              }
            }
          `}
          render={data => (
            <>
              <Seo  title       = {data.ContactsData.Title + " | ARC.UA"}
                    description = {data.ContactsData.Description} />

              <section className="startPage-section contacts-section">
                <div className="contacts-wrapper">
                  <div className="row row-contacts">
                    <div className="startPage-block contacts-block">
                      <div className="main-title-block">
                        <h2>{data.ContactsData.Title}</h2>
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

export default ContactsPage
