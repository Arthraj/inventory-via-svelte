##Product Inventory System 🚀
Overview
This GitHub repository hosts a sleek and efficient product inventory system built using Vite and Svelte. Manage your inventory effortlessly with a user-friendly interface, featuring a dynamic home page and an intuitive "Add Product" section.

Getting Started
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the repository:**

   ```bash
   https://github.com/Arthraj/inventory-via-svelte.git

   cd inventory-via-svelte

   npm install

   npm run dev
   
# Project Structure
Discover a well-organized project structure designed for simplicity and clarity:

## Project Structure

The project structure is organized as follows:

- **src/**
  - **components/**: Svelte components
    - `ProductList.svelte`: Component for displaying the list of products
    - `ProductForm.svelte`: Component for the "Add Product" form
    - `Product.svelte`: Component of a single product.
  - **routes/**: Svelte pages representing different routes
    - `Home.svelte`: Home page displaying a list of products
    - `AddProduct.svelte`: Page with the "Add Product" form
  - **store/**: Svelte store for state management
    - `productsStore.js`: Store file for managing inventory state
  - **Lib.js/**: Holding the API interaction code
    - `Api.js`: Fetches JSON data.
  - `App.svelte`: Main application component
  - `main.js`: Entry point for the application

- **public/**: Static assets and mock data for our API.
  
- **tests/**: Jest test files
  - `ProductList.test.js`: Test file for the `ProductList` component
  - `AddProductForm.test.js`: Test file for the `AddProductForm` component


Components
ProductList.svelte: Display the list of products
ProductForm.svelte: Form for adding new products
Product.svelte: Component for a single product
Routes
Home.svelte: Home page displaying products
AddProduct.svelte: Form for adding new products
Store
productsStore.js: Svelte store for inventory management
Lib.js
Api.js: Holds the API interaction code for fetching JSON data
Main Files
App.svelte: Main application component
main.js: Entry point for the application
# Routes
Home Page
Explore the inventory effortlessly on the dynamic home page.

Path: /

Add Product
Efficiently add new products to your inventory with a user-friendly form.

Path: /addProduct

# Scripts
Development Server
Script: "dev": "vite"

Action: Start the Vite development server for seamless local development.

Build
Script: "build": "vite build"

Action: Build the project for production with Vite.

Preview
Script: "preview": "vite preview"

Action: Preview the production build locally with Vite.

Test
Script: "test": "jest"

Action: Run Jest for comprehensive testing of your Svelte components.

# Jest Configuration
Jest Preset
Configuration: "preset": "./jest-preset.json"

Action: Utilize a Jest preset configuration for efficient testing.

# Development Dependencies
Vite and Svelte
Packages: vite, @sveltejs/vite-plugin-svelte, svelte

Action: Leverage Vite as the build tool with Svelte support for a seamless development experience.

Testing
Packages: jest, @testing-library/jest-dom, @testing-library/svelte, svelte-jester

Action: Integrate Jest for robust testing of Svelte components.

Type Definitions
Packages: @types/jest

Action: Enhance your development experience with Jest type definitions.

Autoprefixer and PostCSS
Packages: autoprefixer, postcss

Action: Configure Autoprefixer and PostCSS for stylish and responsive design.

Tailwind CSS
Package: tailwindcss

Action: Integrate Tailwind CSS for a modern and visually appealing UI.

# Production Dependencies
Babel for Jest
Packages: @babel/preset-env, babel-jest

Action: Configure Babel for Jest to handle JavaScript transformations efficiently.

Svelte Preprocess and Svelte Routing
Packages: svelte-preprocess, svelte-routing

Action: Utilize Svelte preprocess for seamless component preprocessing and Svelte Routing for effective navigation in your application.

TypeScript Jest
Package: ts-jest

Action: Seamlessly integrate TypeScript with Jest for comprehensive testing and enhanced code quality.
