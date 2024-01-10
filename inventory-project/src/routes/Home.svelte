<script>
    import { onMount } from "svelte";
    import { productsStore, setProducts } from "../stores/productsStore.js";
    import { fetchProducts } from "../lib/api.js";
    import ProductList from "../components/ProductList.svelte";
    import { Link } from "svelte-routing";

    let filteredProducts = [];
    let isFilterDisabled = true;
    onMount(async () => {
        if ($productsStore.length === 0) {
            const fetchedProducts = await fetchProducts();

            if (fetchedProducts.length > 0) {
                setProducts(fetchedProducts);
                filteredProducts = fetchedProducts;
                isFilterDisabled = false;
            }
        } else {
            filteredProducts = $productsStore;
            isFilterDisabled = false;
        }
    });
    
    function filterByCategory(event) {
        const category = event.target.value;
        filteredProducts =
            category === "All"
                ? $productsStore
                : $productsStore.filter((product) => product.category === category);
    }
</script>

<div class="flex-col justify-center items-center mt-7">
    <div class=" pl-5 ml-6">
        <h3 class="text-3xl font-bold">Products Inventory</h3>
    </div>

    <div class="flex justify-between items-start w-full">
        <div>
            {#if filteredProducts.length > 0}
                <div class="mt-4 pl-10 pr-10 w-screen">
                    <div class="flex justify-between items-start align-center">
                        <label
                            class="flex items-center justify-start text-sm font-medium text-gray-700 pl-5 pt-2"
                        >
                            Filter by Category:
                            <select
                                class="mt-1 block border border-black rounded-md focus:outline-none focus:ring focus:border-blue-500 ml-3"
                                disabled={isFilterDisabled}
                                on:change={filterByCategory}
                            >
                                <option value="All">All</option>
                                {#each Array.from(new Set($productsStore.map((product) => product.category))) as category}
                                    <option value={category}>{category}</option>
                                {/each}
                            </select>
                        </label>
                        <div class='flex items-center justify-end'>
                            <Link to="/addProduct">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  border border-blue-700 rounded"
                                >
                                    Add Product
                                </button>
                            </Link>
                        </div>
                    </div>
                    <ProductList products={filteredProducts}/>
                </div>
            {:else}
                <p class="mt-4">No products</p>
            {/if}
        </div>
    </div>
</div>
