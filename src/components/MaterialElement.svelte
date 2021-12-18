<script>
  import {Col, Row, AccordionItem} from "sveltestrap";
  export let subject;
  export let data;
  export let icon;
  export let color;
  let total = data.length;
  let types;

  const parseHeader = () => {
    return {

    }
  }

</script>

<style>

</style>
<AccordionItem icon={icon}>
    <h2 class="uppercase font-medium" slot=header >{subject}</h2>
  <Col auto class=my-auto>
    <p>{total} file(s)</p>
    <ul class=list-disc>
      {#each data as elem}
        <li>{elem.content}</li>
      {/each}
    </ul>
  </Col>
</AccordionItem>
