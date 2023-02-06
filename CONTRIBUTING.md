# Contributing

To contribute, create an issue or comment on an existing issue you would like to
work on. All code contributions require test coverage and must pass
formatting/lint checks before being approved and merged.

## Prerequisites

You must install deno to be able to run the application locally.

- https://deno.land

## Development

For development, the tests and example application can be run with deno.

To run the tests, use `deno task test` or `deno task test-watch`.

To check formatting and run lint, use `deno task check`.

To create a build and to run the build, use `deno task build` and
`deno task run`. By default, the application builds and runs in development
mode. To build and run a production build, set the `APP_ENV` environment
variable to `production`.

To run the application in development mode with live reloading, use
`deno task dev`.

When in development, identifiers are not minified and sourcemaps are generated
and linked.

This repository uses squash merging. If your branch is merged into main, you can
get your branch back up to date with `deno task git-rebase`. Alternatively, you
can delete your branch and create a new one off of the main branch.
