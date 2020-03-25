import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Menu = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGeneralSettings(strapiId: {eq: 4}) {
          Data {
            ... on StrapiGeneralSettingsData {
              GeneralData_NavLogo {
                publicURL
              }
              GeneralData_NavLogoTitle
            }
          }
        }

        allStrapiNavigation {
          edges {
            node {
              id
              Title
              Alias
            }
          }
        }
      }
    `}
    render={data => (
      <nav>
        <div className="nav-wrapper">
          <div className="row row-nav">
            <div className="table-block nav-block">
              <div className="table-cell vertical-align-m logo-wrapper">
                <a href="/" className="logo-block">
                  <div className="image-block">
                    <img src   = {data.strapiGeneralSettings.Data[0].GeneralData_NavLogo.publicURL} 
                         title = {data.strapiGeneralSettings.Data[0].GeneralData_NavLogoTitle} alt="" />
                  </div>
                </a>
              </div>
        
              <div className="nav-mob-hidden-block list-wrapper">
                <ul className="group list-block">
                  {data.allStrapiNavigation.edges.map(document => {
                    return (
                      <li key={document.node.id}>
                          <Link to={`/${document.node.Alias}`}>{document.node.Title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="table-cell vertical-align-m search-wrapper">
                <div className="search-block">
                  <div className="vertical-align-m icon-block">
                    <svg className="float-l" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.77343 8.08593C3.5026 8.81508 4.38802 9.17967 5.42968 9.17967C6.47135 9.17967 7.35677 8.81508 8.08593 8.08593C8.81508 7.35677 9.17967 6.47135 9.17967 5.42968C9.17967 4.38802 8.81508 3.5026 8.08593 2.77343C7.35677 2.04427 6.47135 1.67968 5.42968 1.67968C4.38802 1.67968 3.5026 2.04427 2.77343 2.77343C2.04427 3.5026 1.67968 4.38802 1.67968 5.42968C1.67968 6.47135 2.04427 7.35677 2.77343 8.08593ZM10.4297 9.17967L14.5703 13.3203L13.3203 14.5703L9.17967 10.4297V9.76567L8.94533 9.53125C7.95573 10.3907 6.78385 10.8203 5.42968 10.8203C3.91927 10.8203 2.63021 10.2995 1.5625 9.25783C0.520833 8.21615 0 6.9401 0 5.42968C0 3.91927 0.520833 2.64323 1.5625 1.60157C2.63021 0.533854 3.91927 0 5.42968 0C6.9401 0 8.21615 0.533854 9.25783 1.60157C10.2995 2.64323 10.8203 3.91927 10.8203 5.42968C10.8203 6.78385 10.3907 7.95573 9.53125 8.94533L9.76567 9.17967H10.4297Z" fill="white"/>
                    </svg>
                  </div>
                      
                  <div className="vertical-align-m text-block">
                    <span className="float-l"></span>
                  </div>
                </div>
              </div>

              <div className="table-cell vertical-align-m language-wrapper">
                <ul className="language-block">
                  
                </ul>
              </div>

              <div className="table-cell vertical-align-m hamburger-wrapper hamburger-button">
                <div className="hamburger-block">
                    <span className="hamburger-innerBlock"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)
  
export default Menu
