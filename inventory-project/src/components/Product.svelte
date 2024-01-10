<script>
    import {deleteProduct} from '../stores/productsStore'
    export let product;
</script>

<div
    class="flex bg-white p-4 m-4 rounded-md shadow-md w-full max-h-96 relative"
>
    <div class="w-1/5 pr-4 rounded-md relative">
        <img
            src="https://picsum.photos/200/300"
            alt={product.name}
            class="w-full h-64 object-cover rounded-md"
        />

        <div
            class="absolute bottom-5 right-7 bg-blue-500 text-white rounded-full p-2"
        >
            <p>{product.price}</p>
        </div>
    </div>

    <div class="w-4/5 grid grid-col-6 space-y-2">
        <div class=" justify-start align-center">
            <p class="text-3xl">{product.name}</p>
            <p><u>{product.category}</u></p>
            <br />
            <p><strong>Description: </strong>{product.description}</p>
            <p><strong>Price: </strong> {product.price}</p>
            <p><strong>Stock: </strong> {product.stock}</p>
            <p><strong>Manufacturer: </strong> {product.manufacturer}</p>
            <p><strong>Dimensions: </strong> {product.dimensions}</p>
            <p><strong>Weight: </strong> {product.weight}</p>
            <p><strong>Material: </strong> {product.material}</p>
        </div>
        <div class="flex-col justify-end align-center space-x-4"></div>
    </div>
    <!-- <button class="h-10 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 border-blue-700 rounded" >Delete</button> -->
</div>
