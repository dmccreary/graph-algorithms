# Graph Algorithms Course

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Website](https://img.shields.io/website?url=https%3A//dmccreary.github.io/graph-algorithms/)](https://dmccreary.github.io/graph-algorithms/)

An interactive educational course on graph algorithms featuring hands-on JavaScript simulations and visualizations. Learn graph theory, algorithms, and data structures through interactive examples using popular graph visualization libraries.

## 🌐 Live Website

**[https://dmccreary.github.io/graph-algorithms/](https://dmccreary.github.io/graph-algorithms/)**

## 📚 What You'll Learn

- **Graph Theory Fundamentals**: Nodes, edges, directed/undirected graphs, weighted graphs
- **Core Algorithms**: BFS, DFS, shortest path, spanning trees, PageRank
- **Advanced Topics**: Clustering, matching algorithms, entity resolution
- **Visualization Libraries**: p5.js, vis.js, Cytoscape.js, D3.js, Sigma.js
- **Interactive Simulations**: Step-by-step algorithm animations

## 🎯 Features

- **Interactive Simulations**: Visual step-by-step algorithm execution
- **Multiple Libraries**: Comparison of popular JavaScript graph libraries
- **Educational Content**: Theory backed by practical examples
- **Sample Datasets**: Real-world data for experimentation
- **Generative AI Integration**: Prompts for customizing animations

## 🚀 Quick Start

### Prerequisites

- Python 3.x
- [MkDocs](https://www.mkdocs.org/) with Material theme

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/dmccreary/graph-algorithms.git
   cd graph-algorithms
   ```

2. **Set up Python environment**
   ```bash
   # Using conda (recommended)
   conda create -n mkdocs python=3
   conda activate mkdocs
   
   # Or using venv
   python -m venv mkdocs-env
   source mkdocs-env/bin/activate  # On Windows: mkdocs-env\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install mkdocs "mkdocs-material[imaging]"
   ```

4. **Run local development server**
   ```bash
   mkdocs serve
   ```
   
   Visit [http://localhost:8000](http://localhost:8000) to view the site locally.

### Building the Site

```bash
# Build static site
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## 📁 Project Structure

```
├── docs/                    # Main content directory
│   ├── lessons/            # Educational content and theory
│   ├── sims/               # Interactive JavaScript simulations
│   ├── library-analysis/   # Graph library comparisons
│   ├── data/               # Sample datasets
│   └── img/                # Images and screenshots
├── src/                    # Source tools and utilities
├── mkdocs.yml              # Site configuration
└── README.md               # This file
```

## 🧩 Simulation Categories

- **Basic Algorithms**: BFS, DFS, shortest path, spanning tree
- **Graph Properties**: Degree analysis, weighted graphs
- **Advanced Algorithms**: PageRank, clustering, matching
- **Force-Directed Layouts**: Physics-based graph positioning
- **Data Visualization**: Interactive graph exploration

## 🛠️ Technologies Used

- **Documentation**: MkDocs with Material theme
- **Visualization**: p5.js, vis.js, Cytoscape.js, D3.js, Sigma.js
- **Hosting**: GitHub Pages
- **Languages**: JavaScript, Python, Markdown

## 🤝 Contributing

We welcome contributions! Please see our [contribution guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

- ✅ **Share** — copy and redistribute the material
- ✅ **Adapt** — remix, transform, and build upon the material
- ❌ **No Commercial Use** — not for commercial purposes
- 📝 **Attribution** — must give appropriate credit

## 👨‍💻 Author

**Dan McCreary**
- LinkedIn: [danmccreary](https://www.linkedin.com/in/danmccreary/)
- GitHub: [@dmccreary](https://github.com/dmccreary)

## 🙏 Acknowledgments

- Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)
- Visualization libraries: p5.js, vis.js, Cytoscape.js, D3.js, Sigma.js
- Educational content inspired by graph theory research and best practices