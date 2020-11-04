require('dotenv').config();

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? '/jamstack-nextjs-contentful' : '',
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }
};
