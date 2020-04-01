/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getMenuPages = makeRequest(graphql, `
    {
      allStrapiNavigation {
        edges {
          node {
            id
            Title
            Alias_Ua: Alias
            Alias_En: Alias_En
            FileName
          }
        }
      }
    }
    `).then(result => {
    // Create pages for menu static pages.
    result.data.allStrapiNavigation.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.Alias_Ua}`,
        component: path.resolve(`src/templates/menu/pages/${node.FileName}.js`),
        context: {
          id: node.id,
          alias_ua: `/${node.Alias_Ua}`,
          alias_en: `/en/${node.Alias_En}`
        },
      })
    })
  });

  const getMenuPagesEn = makeRequest(graphql, `
    {
      allStrapiNavigation {
        edges {
          node {
            id: id
            Title: Title_En
            Alias_Ua: Alias
            Alias_En: Alias_En
            FileName: FileName_En
          }
        }
      }
    }
    `).then(result => {
    // Create pages for menu static pages.
    result.data.allStrapiNavigation.edges.forEach(({ node }) => {
      createPage({
        path: `/en/${node.Alias_En}`,
        component: path.resolve(`src/templates/menu/pages/${node.FileName}.js`),
        context: {
          id: node.id,
          alias_ua: `/${node.Alias_Ua}`,
          alias_en: `/en/${node.Alias_En}`
        },
      })
    })
  });
  
  const getPublications = makeRequest(graphql, `
    {
      strapiNavigation(strapiId: {eq: 1}) {
        Alias_Ua: Alias
        Alias_En: Alias_En
      }

      allStrapiPublication {
        edges {
          node {
            id
            Alias_Ua: Alias
            Alias_En: Alias_En
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiPublication.edges.forEach(({ node }) => {
      createPage({
        path: `/${result.data.strapiNavigation.Alias_Ua}/${node.Alias_Ua}.html`,
        component: path.resolve(`src/templates/publication.js`),
        context: {
          id: node.id,
          alias_ua: `/${result.data.strapiNavigation.Alias_Ua}/${node.Alias_Ua}.html`,
          alias_en: `/en/${result.data.strapiNavigation.Alias_En}/${node.Alias_En}.html`
        },
      })
    })
  });

  const getPublicationsEn = makeRequest(graphql, `
    {
      strapiNavigation(strapiId: {eq: 1}) {
        Alias_Ua: Alias
        Alias_En: Alias_En
      }

      allStrapiPublication {
        edges {
          node {
            id
            Alias_Ua: Alias
            Alias_En: Alias_En
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiPublication.edges.forEach(({ node }) => {
      createPage({
        path: `/en/${result.data.strapiNavigation.Alias_En}/${node.Alias_En}.html`,
        component: path.resolve(`src/templates/publication-en.js`),
        context: {
          id: node.id,
          alias_ua: `/${result.data.strapiNavigation.Alias_Ua}/${node.Alias_Ua}.html`,
          alias_en: `/en/${result.data.strapiNavigation.Alias_En}/${node.Alias_En}.html`
        },
      })
    })
  });

  const getAuthors = makeRequest(graphql, `
    {
      allStrapiUser {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each user.
    result.data.allStrapiUser.edges.forEach(({ node }) => {
      createPage({
        path: `/authors/${node.id}`,
        component: path.resolve(`src/templates/author.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getAuthorsEn = makeRequest(graphql, `
    {
      allStrapiUser {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each user.
    result.data.allStrapiUser.edges.forEach(({ node }) => {
      createPage({
        path: `/en/authors/${node.id}`,
        component: path.resolve(`src/templates/author.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return Promise.all([
    getMenuPages,
    getMenuPagesEn,
    getPublications,
    getPublicationsEn,
    getAuthors,
    getAuthorsEn
  ])
};
