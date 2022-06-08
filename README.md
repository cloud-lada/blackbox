# Blackbox

The blackbox is the in-vehicle component of the platform that takes sensor readings and writes them to the backend's
ingestion API.

## Getting Started

To work in this repository, you'll need [NodeJS](https://nodejs.org) 14 and [Yarn](https://yarnpkg.com/). After cloning
the repository, use `yarn install` to install all required dependencies.

To run the blackbox locally, use the `yarn execute` script.  You can use `yarn lint --fix` to automatically fix any
linting issues.

## CI

When opening a pull request, your changes will be compiled and linted. Once in the `master` branch, a release
can be performed by creating a new tag. A new tag will automatically publish a new docker image.
