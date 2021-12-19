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
  export let colorScheme;
</script>

<div>
  <Card class="mb-3 mx-4 bg-transparent text-white border-0">
    <CardHeader class="flex flex-row justify-between items-center border-0 bg-transparent">
      <div class="flex flex-row items-center">
        <CardTitle class="font-varela px-1 py-0.5 font-bold {colorScheme(assignment.course)}">{assignment.course.toUpperCase()}</CardTitle>
        <CardTitle class="font-varela ml-1">: {assignment.topic}</CardTitle>
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