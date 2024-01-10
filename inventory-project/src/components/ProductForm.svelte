<script>
    import { productsStore, setProducts } from "../stores/productsStore";
    import { Link } from "svelte-routing";

    let product = {
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        manufacturer: "",
        imageUrl: "",
        dimensions: "",
        weight: "",
        material: "",
        variant: "",
    };
    let message = false;
    let errors = {};

    function addProduct() {
        // Reset errors
        errors = {};
        if (!product.name.trim()) {
            errors.name = "Name is required";
        }

        if (!product.category.trim()) {
            errors.category = "Category is required";
        }

        const parsedPrice = parseFloat(product.price);
        if (isNaN(parsedPrice) || parsedPrice <= 0) {
            errors.price = "Price must be a valid number greater than 0";
        }

        if (!product.stock.trim()) {
            errors.stock = "Stock information is required";
        }

        // Validate dimensions
        if (!product.dimensions.trim()) {
            errors.dimensions = "Dimensions are required";
        }

        // Validate weight
        const parsedWeight = parseFloat(product.weight);
        if (isNaN(parsedWeight) || parsedWeight <= 0) {
            errors.weight = "Weight must be a valid number greater than 0";
        }


        // If there are validation errors, stop the submission
        if (Object.keys(errors).length > 0) {
            return;
        } else {
            productsStore.update(($products) => [...$products, product]);
            message = true;
        }

        // Reset form fields after successful submission
        product = {
            name: "",
            description: "",
            category: "",
            price: "",
            stock: "",
            manufacturer: "",
            imageUrl: "",
            dimensions: "",
            weight: "",
            material: "",
            variant: "",
        };
    }
</script>

    <Link to="/" >
        <button class='ml-2 mt-2'> Go Back</button>
    </Link>

    
    <form on:submit|preventDefault={addProduct}>
        <div class="ml-2 mt-2  text-2xl text-center mb-2 font-bold">Product Details</div>
        <hr class="mb-4"/>

    <div>
        <div class='flex justify-between items-center w-full'>
            <label class='flex items-center justify-start' for="name">Name:</label>
            {#if errors.name}<p class="error flex justify-center items-end mb-3">{errors.name}</p>{/if}
        </div>
        <input id="name" bind:value={product.name} />
       
    </div>
    <div>
        <div class='flex justify-between items-center w-full'>
            <label class='flex items-center justify-start' for="category">Category:</label>
            {#if errors.category}<p class="error flex justify-center items-end mb-3">{errors.category}</p>{/if}
        </div>
        <input id="category" bind:value={product.category} />
    </div>
    
<!-- Price -->
<div>
    <div class='flex justify-between items-center w-full'>
        <label class='flex items-center justify-start' for="price">Price:</label>
        {#if errors.price}<p class="error flex justify-center items-end mb-3">{errors.price}</p>{/if}
    </div>
    <input id="price" type="number" bind:value={product.price} />
</div>

<!-- In Stock -->
<div>
    <div class='flex justify-between items-center w-full'>
        <label class='flex items-center justify-start' for="stock">In Stock:</label>
        {#if errors.stock}<p class="error flex justify-center items-end mb-3">{errors.stock}</p>{/if}
    </div>
    <input id="stock" bind:value={product.stock} />
</div>

<!-- Dimensions -->
<div>
    <div class='flex justify-between items-center w-full'>
        <label class='flex items-center justify-start' for="dimensions">Dimensions:</label>
        {#if errors.dimensions}<p class="error flex justify-center items-end mb-3">{errors.dimensions}</p>{/if}
    </div>
    <input id="dimensions" bind:value={product.dimensions} />
</div>

<!-- Weight -->
<div>
    <div class='flex justify-between items-center w-full'>
        <label class='flex items-center justify-start' for="weight">Weight:</label>
        {#if errors.weight}<p class="error flex justify-center items-end mb-3">{errors.weight}</p>{/if}
    </div>
    <div>
        <input id="weight" type="number" bind:value={product.weight} placeholder="KG's" />
    </div>
</div>

<!-- Manufacturer/Brand -->
<div>
    <div class='flex justify-between items-center w-full'>
        <label class='flex items-center justify-start' for="manufacturer">Manufacturer/Brand:</label>
        {#if errors.manufacturer}<p class="error flex justify-center items-end mb-3">{errors.manufacturer}</p>{/if}
    </div>
    <input id="manufacturer" bind:value={product.manufacturer} />
</div>

<!-- Image URL -->
<div>
    <div class='flex justify-between items-center w-full'>
        <label class='flex items-center justify-start' for="imageUrl">Image URL:</label>
        {#if errors.imageUrl}<p class="error flex justify-center items-end mb-3">{errors.imageUrl}</p>{/if}
    </div>
    <input id="imageUrl" type="url" bind:value={product.imageUrl} />
</div>

<!-- Material -->
<div>
    <div class='flex justify-between items-center w-full'>
        <label class='flex items-center justify-start' for="material">Material:</label>
        {#if errors.material}<p class="error flex justify-center items-end mb-3">{errors.material}</p>{/if}
    </div>
    <input id="material" bind:value={product.material} />
</div>

<!-- Variant -->
<div>
    <div class='flex justify-between items-center w-full'>
        <label class='flex items-center justify-start' for="variant">Variant:</label>
        {#if errors.variant}<p class="error flex justify-center items-end mb-3">{errors.variant}</p>{/if}
    </div>
    <input id="variant" bind:value={product.variant} />
</div>

<!-- Description -->
<div>
    <div class='flex justify-between items-center w-full'>
        <label class='flex items-center justify-start' for="description">Description:</label>
        {#if errors.description}<p class="error flex justify-center items-end mb-3">{errors.description}</p>{/if}
    </div>
    <textarea id="description" bind:value={product.description}></textarea>
</div>

    <button type="submit">Add Product to Inventory</button>
</form>

{#if message == true}
    <div>Product Added Successfully</div>
{/if}
<div></div>

<style>
  form {
    @apply max-w-md mx-auto p-4 border rounded shadow-md;
  }

  label {
    @apply block mb-2 font-bold;
  }

  input,
  textarea {
    @apply w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-700;
  }

  button {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 border-blue-700 rounded;
  }

  .message {
    @apply text-green-500 mt-4;
  }

  .error {
    @apply text-red-500 mt-2 mb-0; 
  }
</style>
