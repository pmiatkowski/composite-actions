# GitHub Composite Actions

A collection of reusable GitHub Actions composite actions designed to streamline CI/CD workflows and enforce best practices.

## About

This repository contains a set of composite actions that can be reused across different GitHub workflows. These actions follow consistent patterns and best practices to ensure reliable and maintainable CI/CD pipelines.

## Usage

To use these composite actions in your workflows, reference them using the following pattern:

```yaml
steps:
  - uses: owner/composite-actions/action-name@v1
```

## Available Actions

Documentation for each action can be found in their respective directories:

- `actions/` - Contains all composite actions
  - Each action has its own README with specific usage instructions
  - Input/output parameters are documented
  - Examples are provided

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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Maintainers

- [Owner Name]

## Support

For support, please open an issue in the GitHub repository.
