<script>
  import {Col, Row} from "sveltestrap";
  export let subject;
  export let data;
  export let icon;
  export let color;
  let total = data.length;
  let types;

</script>

<style>

</style>
<Row class="bg-{color}-500 border-{color}-500 m-2 w-3/12" >
  <Col xs=4>
    <div class="svg2">
      <img class=my-3 src={icon}>
    </div>
  </Col>
  <Col auto class=my-auto>
    <h2 class="uppercase font-medium">{subject}</h2>
    <p>{total} file(s)</p>
  </Col>
</Row>
