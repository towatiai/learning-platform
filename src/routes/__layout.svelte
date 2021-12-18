<script>
  import "../tailwind.css";
  import BottomNav from "/src/components/BottomNav.svelte";
  import { Container } from 'sveltestrap';
</script>

<Container fluid>
<slot />

</Container>
<BottomNav />
