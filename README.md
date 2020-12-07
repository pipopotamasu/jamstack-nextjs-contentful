# Jamstack implementation with next.js and contentful
https://pipopotamasu.github.io/jamstack-nextjs-contentful/

## Workflow
### production
1. contentful webhook works and kick github actions when a post gets published, unpublished, archived, unarchived, deleted actions on contentful.
1. Build and deploy job for production of github actions starts.
1. Next.js fetches posts data from contentful and builds static files.
1. github actions deploy static files to `gh-pages` branch which is target branch of github pages.
1. [The site](https://pipopotamasu.github.io/jamstack-nextjs-contentful/) get updated.

### staging
1. contentful webhook works and kick github actions when a post gets **saved**, published, unpublished, archived, unarchived, deleted actions on contentful.
1. Build and deploy job for staging of github actions starts.
1. Next.js fetches **preview posts data** from contentful and builds static files.
1. github actions deploy static files to `gh-pages-stg` branch.

## Get started
```bash
$ git clone https://github.com/pipopotamasu/jamstack-nextjs-contentful.git
$ cd jamstack-nextjs-contentful
$ yarn
$ yarn dev
=> http://localhost:3000
```