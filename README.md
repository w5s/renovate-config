<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# W5S Renovate configuration) -->

# W5S Renovate configuration

<!-- AUTO-GENERATED-CONTENT:END -->

[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->

> Renovate configuration presets

<!-- AUTO-GENERATED-CONTENT:END -->

## Getting Started - App Installation

- [for GitHub](https://docs.renovatebot.com/install-github-app/)
- [for GitLab](https://docs.renovatebot.com/install-gitlab-app/)
    - go to [Renovate Dashboard](https://app.renovatebot.com/dashboard) to add your project,
    - accept Renovate Bot PR

## Features

- ✅ Automerge only when safe
    - When dev dependency that is self validated by CI
    - When project is following semantic-versioning and well maintained
- 🚄 Focus on productivity
    - The configuration should not overburden the team by creating a great amount of PR, it should be a safe way to automate and save time
- ✓ Main Supported Technologies
    - NodeJS
    - Docker
    - React Native & Ionic (no upgrade for native dependencies)
- 🗓️ Scheduled to run outside working hours (night and weekend)

## Usage

### Renovate Configuration

`renovate.json`

**Application** (api, webapp, static website generator, etc):

For a library repository (where dependencies should be unpinned), use this configuration:

```json
{
    "extends": ["github>w5s/renovate-config:application"]
}
```

**Legacy application** (unmaintained or untested):

For an unmaintained or untested repository include this configuration (will disable automerge and limit maximum PR):

```json
{
    "extends": ["github>w5s/renovate-config:application"]
}

Later, when the PR amount is lower and the application you can switch to `application.json`
```

**Library**:

For a library repository (where dependencies should be unpinned), use this configuration:

```json
{
    "extends": ["github>w5s/renovate-config:library"]
}
```

> [Read the documentation](https://docs.renovatebot.com/configuration-options/) to improve your configuration.

## License

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->

[MIT][license-url] © Julien Polo <julien.polo@gmail.com>

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->

[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square

<!-- AUTO-GENERATED-CONTENT:END -->

[license-url]: ../../LICENSE
