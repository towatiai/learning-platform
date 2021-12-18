<script>
  import AssignmentList from "../components/AssignmentList.svelte";
  import Assignment from "../components/Assignment.svelte"
  import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte'
  let assignments = [
    {
      course: "Mathematics",
      deadline: new Date("March 1, 2022"),
      teacher: "Matti Ojala",
      assistant: "Kimi Salo",
      topic: "Algebra",
      instructions: "Curabitur pharetra commodo lorem, sit amet pulvinar neque ornare ac. Quisque ultrices lacinia nibh at dignissim. Donec posuere dolor neque, eleifend mattis odio convallis nec. Fusce id tellus ac quam accumsan gravida. In quis lectus urna. Aliquam erat volutpat. Maecenas quis sagittis neque. Curabitur ut tempus tellus, a pellentesque libero. Duis maximus purus nec arcu ornare ullamcorper. Vestibulum a enim nisi. Donec sem felis, dictum vel tortor vitae, pulvinar molestie lectus. Morbi mollis quis arcu eleifend rutrum. Donec eros ligula, gravida sed arcu eu, viverra laoreet felis. Donec consectetur ipsum at tellus molestie, sit amet maximus arcu ultrices. Etiam pharetra lorem elit, id congue enim ornare at."
    },
    {
      course: "Biology",
      deadline: new Date("December 31, 2021"),
      teacher: "Matti Ojala",
      assistant: "Kimi Salo",
      topic: "Cellular Biology",
      instructions: "Curabitur pharetra commodo lorem, sit amet pulvinar neque ornare ac. Quisque ultrices lacinia nibh at dignissim. Donec posuere dolor neque, eleifend mattis odio convallis nec. Fusce id tellus ac quam accumsan gravida. In quis lectus urna. Aliquam erat volutpat. Maecenas quis sagittis neque. Curabitur ut tempus tellus, a pellentesque libero. Duis maximus purus nec arcu ornare ullamcorper. Vestibulum a enim nisi. Donec sem felis, dictum vel tortor vitae, pulvinar molestie lectus. Morbi mollis quis arcu eleifend rutrum. Donec eros ligula, gravida sed arcu eu, viverra laoreet felis. Donec consectetur ipsum at tellus molestie, sit amet maximus arcu ultrices. Etiam pharetra lorem elit, id congue enim ornare at."
    },
    {
      course: "Physics",
      deadline: new Date("January 1, 2022"),
      teacher: "Matti Ojala",
      assistant: "Kimi Salo",
      topic: "Fluid Mechanics",
      instructions: "Curabitur pharetra commodo lorem, sit amet pulvinar neque ornare ac. Quisque ultrices lacinia nibh at dignissim. Donec posuere dolor neque, eleifend mattis odio convallis nec. Fusce id tellus ac quam accumsan gravida. In quis lectus urna. Aliquam erat volutpat. Maecenas quis sagittis neque. Curabitur ut tempus tellus, a pellentesque libero. Duis maximus purus nec arcu ornare ullamcorper. Vestibulum a enim nisi. Donec sem felis, dictum vel tortor vitae, pulvinar molestie lectus. Morbi mollis quis arcu eleifend rutrum. Donec eros ligula, gravida sed arcu eu, viverra laoreet felis. Donec consectetur ipsum at tellus molestie, sit amet maximus arcu ultrices. Etiam pharetra lorem elit, id congue enim ornare at."
    },
    {
      course: "Geography",
      deadline: new Date("April 1, 2022"),
      teacher: "Matti Ojala",
      assistant: "Kimi Salo",
      topic: "Continents",
      instructions: "Curabitur pharetra commodo lorem, sit amet pulvinar neque ornare ac. Quisque ultrices lacinia nibh at dignissim. Donec posuere dolor neque, eleifend mattis odio convallis nec. Fusce id tellus ac quam accumsan gravida. In quis lectus urna. Aliquam erat volutpat. Maecenas quis sagittis neque. Curabitur ut tempus tellus, a pellentesque libero. Duis maximus purus nec arcu ornare ullamcorper. Vestibulum a enim nisi. Donec sem felis, dictum vel tortor vitae, pulvinar molestie lectus. Morbi mollis quis arcu eleifend rutrum. Donec eros ligula, gravida sed arcu eu, viverra laoreet felis. Donec consectetur ipsum at tellus molestie, sit amet maximus arcu ultrices. Etiam pharetra lorem elit, id congue enim ornare at."
    },
    {
      course: "Chemistry",
      deadline: new Date("December 24, 2021"),
      teacher: "Matti Ojala",
      assistant: "Kimi Salo",
      topic: "Equilibriums",
      instructions: "Curabitur pharetra commodo lorem, sit amet pulvinar neque ornare ac. Quisque ultrices lacinia nibh at dignissim. Donec posuere dolor neque, eleifend mattis odio convallis nec. Fusce id tellus ac quam accumsan gravida. In quis lectus urna. Aliquam erat volutpat. Maecenas quis sagittis neque. Curabitur ut tempus tellus, a pellentesque libero. Duis maximus purus nec arcu ornare ullamcorper. Vestibulum a enim nisi. Donec sem felis, dictum vel tortor vitae, pulvinar molestie lectus. Morbi mollis quis arcu eleifend rutrum. Donec eros ligula, gravida sed arcu eu, viverra laoreet felis. Donec consectetur ipsum at tellus molestie, sit amet maximus arcu ultrices. Etiam pharetra lorem elit, id congue enim ornare at."
    },
    {
      course: "History",
      deadline: new Date('December 28, 2021'),
      teacher: "Matti Ojala",
      assistant: "Kimi Salo",
      topic: "World War 1 & 2",
      instructions: "Curabitur pharetra commodo lorem, sit amet pulvinar neque ornare ac. Quisque ultrices lacinia nibh at dignissim. Donec posuere dolor neque, eleifend mattis odio convallis nec. Fusce id tellus ac quam accumsan gravida. In quis lectus urna. Aliquam erat volutpat. Maecenas quis sagittis neque. Curabitur ut tempus tellus, a pellentesque libero. Duis maximus purus nec arcu ornare ullamcorper. Vestibulum a enim nisi. Donec sem felis, dictum vel tortor vitae, pulvinar molestie lectus. Morbi mollis quis arcu eleifend rutrum. Donec eros ligula, gravida sed arcu eu, viverra laoreet felis. Donec consectetur ipsum at tellus molestie, sit amet maximus arcu ultrices. Etiam pharetra lorem elit, id congue enim ornare at."
    },
    {
      course: "Arts",
      deadline: new Date('December 1, 2021'),
      teacher: "Matti Ojala",
      assistant: "Kimi Salo",
      topic: "Picasso",
      instructions: "Curabitur pharetra commodo lorem, sit amet pulvinar neque ornare ac. Quisque ultrices lacinia nibh at dignissim. Donec posuere dolor neque, eleifend mattis odio convallis nec. Fusce id tellus ac quam accumsan gravida. In quis lectus urna. Aliquam erat volutpat. Maecenas quis sagittis neque. Curabitur ut tempus tellus, a pellentesque libero. Duis maximus purus nec arcu ornare ullamcorper. Vestibulum a enim nisi. Donec sem felis, dictum vel tortor vitae, pulvinar molestie lectus. Morbi mollis quis arcu eleifend rutrum. Donec eros ligula, gravida sed arcu eu, viverra laoreet felis. Donec consectetur ipsum at tellus molestie, sit amet maximus arcu ultrices. Etiam pharetra lorem elit, id congue enim ornare at."
    },
    {
      course: "English",
      deadline: new Date('December 30, 2021'),
      teacher: "Kimmo Kuusi",
      assistant: "Johannes Timi",
      topic: "Literacy",
      instructions: "Curabitur pharetra commodo lorem, sit amet pulvinar neque ornare ac. Quisque ultrices lacinia nibh at dignissim. Donec posuere dolor neque, eleifend mattis odio convallis nec. Fusce id tellus ac quam accumsan gravida. In quis lectus urna. Aliquam erat volutpat. Maecenas quis sagittis neque. Curabitur ut tempus tellus, a pellentesque libero. Duis maximus purus nec arcu ornare ullamcorper. Vestibulum a enim nisi. Donec sem felis, dictum vel tortor vitae, pulvinar molestie lectus. Morbi mollis quis arcu eleifend rutrum. Donec eros ligula, gravida sed arcu eu, viverra laoreet felis. Donec consectetur ipsum at tellus molestie, sit amet maximus arcu ultrices. Etiam pharetra lorem elit, id congue enim ornare at."
    },
  ];

assignments = assignments.sort((a,b) => a.deadline.getTime() - b.deadline.getTime());
let clickedAssignment = null;
let toggleShow = false;

let ongoing = {text:"Ongoing Assignment(s)", number: assignments.filter(assignment => assignment.deadline.getTime() > new Date().getTime()).length};
let passed = {text: "Passed Assignment(s)", number: assignments.filter(assignment => assignment.deadline.getTime() < new Date().getTime()).length};

let bg = 'src/images/bg.png';

const showPassedAssignments = () => {
  toggleShow = true;
}
const showOngoingAssignments = () => {
  toggleShow = false;
}

const handlePick = (assignment) => {
  clickedAssignment = assignment;
}

const freePick = () => {
  clickedAssignment = null;
}

function colorScheme(course) {
  switch (course.toLowerCase()) {
    case "english":
        return "bg-red-300 border-red-400/50 text-red-900 rounded-full text-center";
    case "mathematics":
        return "bg-fuchsia-300 border-fuchsia-400/50 text-fuchsia-900 rounded-full text-center px-1";
    case "chemistry":
        return "bg-purple-300 border-purple-400/50 text-purple-900 rounded-full text-center";
    case "physics":
        return "bg-blue-300 border-blue-400/50 text-blue-900 rounded-full text-center";
    case "geography":
        return "bg-amber-300 border-amber-400/50 text-amber-900 rounded-full text-center";
    case "biology":
        return "bg-lime-300/100 border-lime-400/50 text-lime-900 rounded-full text-center";
    case "science":
        return "bg-sky-300 border-sky-400/50 text-sky-900 rounded-full text-center";
    case "history":
        return "bg-orange-300 border-orange-400/50 text-orange-900 rounded-full text-center";
    case "arts":
        return "bg-gray-300 border-gray-400/50 text-gray-700 border-dashed rounded-full text-center";
    default:
        return "bg-yellow-300 border-yellow-400/50 text-yellow-700 border-dashed rounded-full text-center";
  }
}

</script>

<div 
  class="flex flex-col overflow-y-auto h-screen w-12/12 bg-no-repeat bg-cover tablet:w-screen tablet:h-screen"
>
  <header class=" border-b-2 border-white ml-4 mr-4">
    <div class="flex flex-col justify-between mt-0">
      <div class="flex flex-row-reverse w-full text-white font-varela items-center justify-between">
        <p class="text-sm font-light mt-4">{new Date().toDateString()}</p>
      </div>
      <div class="flex flex-row mt-2 ml-4 justify-center py-6">
          <button class= "py-1 px-1 mr-1  text-gray-50 text-sm font-varela font-light hover:cursor-pointer hover:bg-transparent hover:bg-gray-50 hover:text-indigo-600 hover:rounded-full" 
            on:click={showOngoingAssignments}>{ongoing.text}</button>
          <button class="py-1 px-1 ml-1  text-gray-50 text-sm font-varela font-light hover:cursor-pointer hover:bg-transparent hover:bg-gray-50 hover:text-indigo-600 hover:rounded-full" 
            on:click={showPassedAssignments}>{passed.text}</button>
      </div>
    </div>
  </header>

  <div class="flex flex-col w-full items-center">
    <div class="flex flex-col pb-20 mt-16">
      {#if clickedAssignment == null}
        <AssignmentList 
          assignments = {assignments}
          toggleShow= {toggleShow} 
          handlePick = {handlePick}
          colorScheme= {colorScheme}
        />
      {:else}
        <Assignment assignment = {clickedAssignment} freePick= {freePick} colorScheme= {colorScheme}/>
      {/if}
    </div>
  </div>
</div>