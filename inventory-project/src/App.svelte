<script>
  import {Router , Route} from 'svelte-routing';
  import Home from './routes/Home.svelte';
  import AddProduct from './routes/AddProduct.svelte';
</script>

<Router>
  <Route path='/' component={Home}/>
  <Route path='/addProduct' component={AddProduct}/>
</Router>

<style global>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
</style>
