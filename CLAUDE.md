# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a graph algorithms educational course website built with MkDocs Material. The site provides interactive simulations and educational content about graph algorithms, data structures, and visualization techniques. It includes JavaScript-based interactive animations using libraries like p5.js, vis.js, Cytoscape.js, D3.js, and Sigma.js.

## Common Commands

### MkDocs Development
```bash
# Build the site locally
mkdocs build

# Run local development server at http://localhost:8000
mkdocs serve

# Deploy to GitHub Pages (does not commit source code)
mkdocs gh-deploy
```

### Environment Setup
If working with MkDocs Material social cards (requires image processing):
```bash
# Install system dependencies (macOS with Homebrew)
brew install cairo freetype libffi libjpeg libpng zlib

# Add to ~/.zshrc for macOS Apple Silicon:
export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib

# Python environment setup
conda create -n mkdocs python=3
conda activate mkdocs
pip install mkdocs "mkdocs-material[imaging]"
```

## Site Architecture

### Content Structure
- **docs/**: Main content directory following MkDocs structure
  - **lessons/**: Educational content and theory (graph terminology, algorithms, libraries)
  - **sims/**: Interactive JavaScript simulations demonstrating algorithms
  - **library-analysis/**: Analysis and examples of different graph libraries
  - **data/**: Sample datasets and data generation utilities
  - **img/**: Static images and screenshots

### JavaScript Simulation Pattern
All interactive simulations follow a consistent pattern:
- **HTML files**: Container pages that embed p5.js canvas or library-specific containers
- **JavaScript files**: Algorithm implementations with visualization
- **index.md files**: Documentation explaining the algorithm and simulation

Common JavaScript libraries used:
- **p5.js**: Primary visualization library for custom animations
- **vis.js**: Network visualization library
- **Cytoscape.js**: Advanced graph analysis and visualization
- **D3.js**: Data-driven documents for complex visualizations
- **Sigma.js**: High-performance graph rendering

### Key Simulation Categories
- **Basic Algorithms**: BFS, DFS, shortest path, spanning tree
- **Advanced Algorithms**: PageRank, clustering, matching
- **Graph Properties**: Degree analysis, weighted graphs
- **Force-Directed Layouts**: Physics-based graph positioning
- **Data Visualization**: Interactive graph exploration tools

### Content Organization
- Each simulation has its own directory under `docs/sims/`
- Template directory (`docs/sims/template/`) provides boilerplate for new simulations
- Navigation structure defined in `mkdocs.yml`
- All content licensed under Creative Commons (CC BY-NC-SA 4.0)

### Development Patterns
- JavaScript simulations are standalone and self-contained
- Common patterns: Node/Edge classes, Graph classes with algorithm methods
- Consistent color schemes and UI patterns across simulations
- Educational focus with step-by-step algorithm visualization