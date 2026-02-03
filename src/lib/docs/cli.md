# CAMI CLI

## Note

The article is originally from [the npm package page](https://www.npmjs.com/package/cami-cli)

A command-line interface tool for scaffolding CAMI (Cellular Automaton Model Interface) projects. Create plugin systems or visualization projects with a single command.

## 📦 Installation

Install globally via npm:

```bash
npm install -g cami-cli
```

## 🚀 Usage

Run the CLI to create a new project:

```bash
cami
```

Or using npx (without global installation):

```bash
npx cami-cli
```

The CLI will guide you through an interactive setup process where you can:

1. Name your project
2. Choose between Plugin or Visual project types
3. Customize your setup options

## 📋 Project Types

### Plugin Project

Creates a new system to extend functionality with custom plugins.

**Features:**

- Pre-configured C++ plugin skeleton
- CMake build system setup
- Template file system with automatic name replacement
- Git repository initialization

### Visual Project

Creates a new system to visualize plugins using modern web technologies.

**Features:**

- React + Vite setup
- Optional PixiJS integration for grid-based rendering
- Tailwind CSS for styling
- Custom hooks for grid management (optional)
- Git repository initialization

## 🛠️ Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/Cellular-Automaton/CAMI-CLI.git
cd CAMI-CLI
```

1. Install dependencies:

```bash
npm install
```

1. Run locally:

```bash
npm start
```

## 📖 Project Structure

```
CAMI-CLI/
├── index.js          # Main CLI entry point
├── package.json      # Project metadata and dependencies
└── README.md         # Documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

## 🔗 Links

- [GitHub Repository](https://github.com/Cellular-Automaton/CAMI-CLI)
- [Visual Skeleton](https://github.com/Cellular-Automaton/VisualSkeleton)
- [Plugin Skeleton](https://github.com/Cellular-Automaton/PluginSkeleton)

## 💡 Examples

### Creating a Plugin Project

```bash
$ cami
Welcome to the CAMI cli!

How do you want to name your project? my-awesome-plugin
Select the type of project: Plugin (A new system to extend functionality)

✓ Plugin project created successfully!
```

### Creating a Visual Project

```bash
$ cami
Welcome to the CAMI cli!

How do you want to name your project? my-visualization
Select the type of project: Visual (A new system to visualize plugins)
Do you want a base project with a grid and PixiJS setup? Yes

✓ Project created successfully!
```

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/Cellular-Automaton/CAMI-CLI/issues) on GitHub.
