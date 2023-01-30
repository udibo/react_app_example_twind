# Example Twind Udibo React App

[![CI](https://github.com/udibo/react_app/workflows/CI/badge.svg)](https://github.com/udibo/react_app/actions?query=workflow%3ACI)
[![license](https://img.shields.io/github/license/udibo/react_app)](https://github.com/udibo/react_app/blob/main/LICENSE)

A basic example of a [Udibo React App](https://deno.land/x/udibo_react_app)
using [Twind](https://twind.style/) to add Tailwind v3 support.

To do this in your own project, copy the twind imports from the
`import_map.json`, add `twind.js` with your twind configuration, import
`twind.js` into your `app.tsx`, and add a custom `renderToReadableStream` to
your serve options in `main.ts`.

- [GitHub Repository](https://github.com/udibo/react_app/)
- [Deno docs](https://deno.land/x/udibo_react_app)

## Deployment

The workflow is configured to run tests for all PRs and to deploy to Deno
Deploy.

If you are forking this repository, you will need to update the workflow.

If you are using Deno Deploy, you should update `.github/workflows/main.yml` to
use your project. If you don't have a project created yet on Deno Deploy, create
a new one and configure it to use GitHub Actions for deployment. The GitHub
action is required because there is a build step.

If you are not planning on using Deno Deploy, remove the CD job from
`.github/workflows/main.yml` or write your own deployment action to replace it.

## Tasks

To run the tests, use `deno task test` or `deno task test-watch`.

To check formatting and run lint, use `deno task check`.

To create a production build and to run the production build, use
`deno task build` and `deno task run`.

To run the application in development mode with live reloading, use
`deno task dev`.

## Contributing

To contribute, please read the [contributing instruction](CONTRIBUTING.md).