<script>
  import {Col, Row, AccordionItem, Input, Collapse, Card, Button} from "sveltestrap";
  export let subject;
  export let data;
  export let icon;
  export let color;
  let total = data.length;
  let types;
  let isOpen = false;

</script>

<style>
img.icon {
  height: 50px;
  width: 50px;
}

</style>
<AccordionItem class={color}>
  <Row slot=header>
    <Col>
      <img class="icon" src={icon}>
    </Col>
    <Col>
      <h2 class="uppercase font-medium">{subject}</h2>
      <section>{total} material(s)</section>
    </Col>
  </Row>
  <Col auto class=my-auto>
    <ul>
      {#each data as elem}

        {#if elem.type === "img"}
          <li>{elem.content}</li>
          <img src={elem.path}>
        {:else if elem.type === "txt"}
          <li><Button on:click={() => (isOpen = !isOpen)} class="mb-3">{#if isOpen} Hide {:else} Show {/if} {elem.content}</Button></li>
          <Collapse {isOpen}>
            <Card>{@html elem.path}</Card>
          </Collapse>
        {/if}
      {/each}
    </ul>
  </Col>
</AccordionItem>
