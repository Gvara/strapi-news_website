import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        footerData: strapiGeneralSettings(strapiId: {eq: 3}) {
          Data {
            ... on StrapiGeneralSettingsData {
              SiteFooter_Content
            }
          }
        }
      }
    `}
    render={data => (
      <footer>
        <div className="footer-wrapper">
          <div className="row row-footer">
            <div className="footer-block">
              <div className="table-block copyright-block">
                <div className="table-cell vertical-align-m title-block"
                     dangerouslySetInnerHTML={{ __html: data.footerData.Data[0].SiteFooter_Content }} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)
  
export default Footer
