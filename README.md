# First CircleCI demo

* React + Typescript application
* Docker build & deploy to Google Cloud Run
    * [Prod] https://demo.cloud-run.tadashi-cci.com
    * [Staging] https://demo-staging.cloud-run.tadashi-cci.com
* Jest + React Testing Library for Unit Test
* Cypress for Integration Test
* CircleCI features
    * Workspaces
    * Approval
    * Filter by branches
    * Caching dependencies
    * Docker layer caching
    * Orbs
    * Custom Executors
    * Store test results
* CircleCI orbs
    * [gcp-cloud-run](https://circleci.com/developer/orbs/orb/circleci/gcp-cloud-run)
    * [gcp-gcr](https://circleci.com/developer/orbs/orb/circleci/gcp-gcr)
    * [node](https://circleci.com/developer/ja/orbs/orb/circleci/node)
    * [cypress](https://circleci.com/developer/ja/orbs/orb/cypress-io/cypress)
