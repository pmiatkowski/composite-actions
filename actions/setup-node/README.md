# Setup Node.js Action

This composite action sets up a Node.js environment with built-in dependency caching.

## Usage

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: ./actions/setup-node
    with:
      node-version: '20.x'  # optional, defaults to 20.x
      cache-deps: 'true'    # optional, defaults to true
```

## Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `node-version` | Node.js version to use | false | '20.x' |
| `cache-deps` | Whether to cache dependencies | false | 'true' |

## Example

```yaml
name: CI
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ./actions/setup-node
        with:
          node-version: '20.x'
      - run: npm test
```
