# Blackbox

The blackbox is the in-vehicle component of the platform that takes sensor readings and writes them to the backend's
ingestion API.

## Installation

To use blackbox on the raspberry pi, use the following steps:

1) Clone this repository to your desired location:

```shell
git clone https://github.com/cloud-lada/blackbox.git
```

2) Within the cloned directory, run the following commands to build the CLI:

```
yarn install    # Installs dependencies & compiles bindings for the pi
yarn build      # Compiles the application 
yarn link       # Allows you to run the CLI with the blackbox command
```

3) You can then run the application using the `blackbox` command:

```shell
blackbox --version
```

## Getting Started

To work in this repository, you'll need [NodeJS](https://nodejs.org) 14 and [Yarn](https://yarnpkg.com/). After cloning
the repository, use `yarn install` to install all required dependencies.

To run the blackbox locally, use the `yarn execute` script.  You can use `yarn lint --fix` to automatically fix any
linting issues.

## CI

When opening a pull request, your changes will be compiled and linted.
