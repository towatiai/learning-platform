<script>
  import "../tailwind.css";
  import BottomNav from "/src/components/BottomNav.svelte";
  import { Container } from 'sveltestrap';
  import {getStores} from "$app/stores";
  const {page} = getStores();
</script>

{ #if $page.path === '/calendar'}
<slot />
{ :else }
<Container fluid><slot /></Container>
{ /if }
<BottomNav />
<style>:global(body){
  background: #2e3440;
}
</style>