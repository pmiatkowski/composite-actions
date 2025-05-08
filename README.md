# GitHub Composite Actions

A collection of reusable GitHub Actions composite actions designed to streamline CI/CD workflows and enforce best practices.

## About

This repository contains a set of composite actions that can be reused across different GitHub workflows. These actions follow consistent patterns and best practices to ensure reliable and maintainable CI/CD pipelines.

## Usage

To use these composite actions in your workflows, reference them using the following pattern:

### AI Reviewer Action

For detailed configuration options, see [AI Reviewer documentation](actions/ai-reviewer/README.md).

```yaml
steps:
  - uses: pmiatkowski/composite-actions/actions/ai-reviewer@v1
    with:
      # Add your AI reviewer specific inputs here
      # See actions/ai-reviewer/README.md for all available options
```

### Setup Node Action

For detailed configuration options, see [Setup Node documentation](actions/setup-node/README.md).

```yaml
steps:
  - uses: pmiatkowski/composite-actions/actions/setup-node@v1
    with:
      # Add your Node.js setup specific inputs here
      # See actions/setup-node/README.md for all available options
```

## Available Actions

Documentation for each action can be found in their respective directories:

- `actions/` - Contains all composite actions
  - Each action has its own README with specific usage instructions
  - Input/output parameters are documented
  - Examples are provided

### Available Scripts

The following npm scripts are available:

- `test`: Run tests (currently not implemented)
- `build:ai-reviewer`: Build the AI reviewer action using rolldown

## Development

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- Git

### Commit Convention

This repository follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. Commit messages must follow this pattern:

```
<type>([optional scope]): <description>

[optional body]

[optional footer(s)]
```

Types:

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding/updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes
- `revert`: Reverting changes

### Branch Naming

Branches should follow the conventional commits pattern:

- `feat/description`
- `fix/description`
- `docs/description`
- etc.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Maintainers

- Paweł Miatkowski

## Support

For support, please open an issue in the GitHub repository.
