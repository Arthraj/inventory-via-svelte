<script>
    import Product from "./Product.svelte";
    export let products=[];
</script>
<br />

<ul>
    {#each products as product, index}
        <Product {product}/>
    {/each}
</ul>
