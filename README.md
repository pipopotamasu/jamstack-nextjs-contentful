# Jamstack implementation with next.js and contentful
https://pipopotamasu.github.io/jamstack-nextjs-contentful/

## Structure

1. A post is published or unpublished on contentful.
1. contentful webhook works and kick github actions.
1. Build and deploy job of github actions starts.
1. Next.js fetches posts data from contentful and builds static files.
1. github actions deploy static files to github pages.
1. [The site](https://pipopotamasu.github.io/jamstack-nextjs-contentful/) get updated.

## Get started
```bash
$ git clone https://github.com/pipopotamasu/jamstack-nextjs-contentful.git
$ cd jamstack-nextjs-contentful
$ yarn
$ yarn dev
=> http://localhost:3000
```