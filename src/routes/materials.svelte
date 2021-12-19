<script>
  import MaterialElement from "../components/MaterialElement.svelte";
  import { Accordion, AccordionItem, Container, Row } from 'sveltestrap';
  import * as data from "../data/materials.json"
  import * as subjects from "../data/subjects.json"
  const filterData = (subject) => {
    return data.default.filter(elem => elem.subject === subject)
  }

</script>

<h1 class="uppercase mx-auto">Materials</h1>

  <Row class="mx-auto ">

  </Row>
  <Accordion>
  {#each subjects.default as item}
    <MaterialElement subject={item.subject} data={filterData(item.subject)} icon={item.icon} color={item.color}/>
  {/each}
  </Accordion>
