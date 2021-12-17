<script>
  import {
    Table,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from 'sveltestrap';
  export let assignment;
  export let freePick;
</script>

<div>
  <Card class="mb-3 mx-4 bg-transparent text-white border-0">
    <CardHeader class="flex flex-row justify-between items-center border-0 bg-transparent">
      <div class="flex flex-row">
        <CardTitle class="font-varela font-bold mr-2">{assignment.course.toUpperCase()}: </CardTitle>
        <CardTitle class="font-varela">{assignment.topic}</CardTitle>
      </div>
      <button class="border-l border-b  rounded-full p-1" on:click= {freePick}>return</button>
    </CardHeader>
    <CardBody>
      <CardText class="mb-4 font-varela font-bold">Instructions</CardText>
      <CardText>{assignment.instructions}</CardText>
    </CardBody>
    <CardFooter class="border-t border-white bg-transparent">{assignment.teacher} & {assignment.assistant} (Assistant)</CardFooter>
  </Card>
</div>