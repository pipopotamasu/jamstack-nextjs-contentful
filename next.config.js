require('dotenv').config();

console.log(process.env.NODE_ENV);

const isProduction = process.env.NODE_ENV === 'production' ;

module.exports = {
  basePath: process.env.GITHUB_PAGES ? '/jamstack-nextjs-contentful' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/jamstack-nextjs-contentful' : '',
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: isProduction ? process.env.CONTENTFUL_ACCESS_TOKEN : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_HOST: isProduction ? 'api.contentful.com' : 'preview.contentful.com'
  }
};
