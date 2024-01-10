# Product Inventory System

This project is a simple product inventory system built using Vite and Svelte. It includes two main routes - the home page displaying a list of products and an "Add Product" page with a form for adding new products to the inventory.

## Getting Started

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the repository:**

   ```bash
   https://github.com/Arthraj/inventory-via-svelte.git

   cd inventory-via-svelte

   npm install

   npm run dev

   
Project Structure
The project structure is organized as follows:

src/
|-- components/
|   |-- ProductList.svelte: Component for displaying the list of products
|   |-- ProductForm.svelte: Component for the "Add Product" form
|   |-- Product.svelte: Component for a single product
|-- routes/
|   |-- Home.svelte: Home page displaying a list of products
|   |-- AddProduct.svelte: Page with the "Add Product" form
|-- store/
|   |-- productsStore.js: Svelte store for managing inventory state
|-- Lib.js/
|   |-- Api.js: Holds the API interaction code for fetching JSON data
|-- App.svelte: Main application component
|-- main.js: Entry point for the application
public/: Static assets and mock data for our API
tests/: Jest test files


Routes

Home Page
The home page displays a list of products in the inventory.
Path: /

Add Product
The "Add Product" page includes a form with validation for adding new products to the inventory.
Path: /addProduct

Scripts
Development Server:

Script: "dev": "vite"
Action: Starts the Vite development server for local development.
Build:

Script: "build": "vite build"
Action: Builds the project for production using Vite.
Preview:

Script: "preview": "vite preview"
Action: Previews the production build locally using Vite.
Test:

Script: "test": "jest"
Action: Runs Jest for testing your Svelte components.
Jest Configuration
Jest Preset:

Configuration: "preset": "./jest-preset.json"
Action: Specifies a Jest preset configuration located in the jest-preset.json file.
Development Dependencies
Vite and Svelte:

Packages: vite, @sveltejs/vite-plugin-svelte, svelte
Action: Utilizes Vite as the build tool with Svelte support.
Testing:

Packages: jest, @testing-library/jest-dom, @testing-library/svelte, svelte-jester
Action: Integrates Jest for testing Svelte components.
Type Definitions:

Packages: @types/jest
Action: Provides type definitions for Jest.
Autoprefixer and PostCSS:

Packages: autoprefixer, postcss
Action: Configures Autoprefixer and PostCSS for style processing.
Tailwind CSS:

Package: tailwindcss
Action: Integrates Tailwind CSS for styling.
Production Dependencies
Babel for Jest:

Packages: @babel/preset-env, babel-jest
Action: Configures Babel for Jest to handle JavaScript transformations.
Svelte Preprocess and Svelte Routing:

Packages: svelte-preprocess, svelte-routing
Action: Utilizes Svelte preprocess for preprocessing Svelte components and Svelte Routing for routing in the application.
TypeScript Jest:

Package: ts-jest
Action: Integrates TypeScript with Jest for testing.
