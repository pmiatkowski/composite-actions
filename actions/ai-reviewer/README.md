# AI Reviewer Action

Initial example copied form 10xdevs training.

This composite action uses Google's Generative AI to provide automated code review feedback on Pull Requests.

## Usage

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: ./actions/ai-reviewer
    with:
      GOOGLE_API_KEY: ${{ secrets.GOOGLE_API_KEY }}
```

## Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `GOOGLE_API_KEY` | Google AI Studio API Key for accessing Gemini API | true | N/A |

## Example

Here's an example workflow that uses the AI Reviewer action:

```yaml
name: AI Code Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ./actions/ai-reviewer
        with:
          GOOGLE_API_KEY: ${{ secrets.GOOGLE_API_KEY }}
```

## Features

- Uses Gemini 2.0 Flash model for fast and efficient code review
- Provides automated feedback on pull requests
- Helps maintain code quality through AI-assisted reviews

## Requirements

- A Google AI Studio API key with access to the Gemini API
- GitHub repository with pull request workflows enabled

## Security Note

Make sure to store your Google API key as a GitHub repository secret. Never expose API keys directly in your workflow files.
