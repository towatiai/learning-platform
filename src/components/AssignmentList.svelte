<script>
  import Assignment from "./Assignment.svelte"
  import { Table } from 'sveltestrap';
  export let assignments;
  export let toggleShow;
  export let handlePick;
  export let colorScheme;

  let ongoingAssignments = assignments.filter(assignment => assignment.deadline.getTime() > new Date().getTime());
  let passedAssignments = assignments.filter(assignment => assignment.deadline.getTime() < new Date().getTime());

</script>


<Table class="text-white font-varela">
  <thead>
    <tr>
      <th>Deadline</th>
      <th>Course</th>
      <th>Teacher</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {#if toggleShow == false}
      {#each ongoingAssignments as assignment}
        <tr>
          <td class="">{assignment.deadline.toDateString()}</td>
          <td><p class="{colorScheme(assignment.course)}">{assignment.course}</p></td>
          <td class="">{assignment.teacher}</td>
          <td class=" text-indigo-100 hover:cursor-pointer" on:click={handlePick(assignment)}>View</td>
        </tr>
      {/each}
    {:else}
      {#each passedAssignments as assignment}
        <tr>
          <td class="">{assignment.deadline.toDateString()}</td>
          <td><p class="{colorScheme(assignment.course)}">{assignment.course}</p></td>
          <td class="">{assignment.teacher}</td>
          <td class="text-indigo-100 hover:cursor-pointer" on:click={handlePick(assignment)}>View</td>
        </tr>
      {/each}
    {/if}
  </tbody>
</Table>
            
