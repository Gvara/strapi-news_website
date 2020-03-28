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
            Alias
            FileName
          }
        }
      }
    }
    `).then(result => {
    // Create pages for menu static pages.
    result.data.allStrapiNavigation.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.Alias}`,
        component: path.resolve(`src/templates/menu/pages/${node.FileName}.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  const getPublications = makeRequest(graphql, `
    {
      strapiNavigation(strapiId: {eq: 1}) {
        Alias
      }

      allStrapiPublication {
        edges {
          node {
            id
            Alias
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiPublication.edges.forEach(({ node }) => {
      createPage({
        path: `/${result.data.strapiNavigation.Alias}/${node.Alias}.html`,
        component: path.resolve(`src/templates/publication.js`),
        context: {
          id: node.id,
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
  
  // Query for articles nodes to use in creating pages.
  return Promise.all([
    getMenuPages,
    getPublications,
    getAuthors,
  ])
};
