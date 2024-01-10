// Product.spec.js
import { render } from '@testing-library/svelte';
import Product from '../src/components/Product.svelte'; // Adjust the path based on your project structure

describe('Product Component', () => {
  test('renders product details correctly', () => {
    const product = {
      name: 'Sample Product',
      category: 'Electronics',
      description: 'Lorem ipsum dolor sit amet.',
      price: '$99.99',
      stock: 10,
      manufacturer: 'Sample Manufacturer',
      dimensions: '10 x 5 x 3 inches',
      weight: '2.5 lbs',
      material: 'Plastic',
    };

    const { getByText, getByAltText } = render(Product, { product });

    // Assert on the presence of key elements and text
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(product.category)).toBeInTheDocument();
    expect(getByText(`Description: ${product.description}`)).toBeInTheDocument();
    expect(getByText(`Price: ${product.price}`)).toBeInTheDocument();
    expect(getByText(`Stock: ${product.stock}`)).toBeInTheDocument();
    expect(getByText(`Manufacturer: ${product.manufacturer}`)).toBeInTheDocument();
    expect(getByText(`Dimensions: ${product.dimensions}`)).toBeInTheDocument();
    expect(getByText(`Weight: ${product.weight}`)).toBeInTheDocument();
    expect(getByText(`Material: ${product.material}`)).toBeInTheDocument();

    // Assert on the presence of the product image
    const productImage = getByAltText(product.name);
    expect(productImage).toBeInTheDocument();
  });

  // Add more test cases as needed based on the component's functionality
});
