<script>
    import { format, getDay, getDate, sub, add } from "date-fns";
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import { onMount } from "svelte";

    const dialogPos = tweened(370, { duration: 400, easing: cubicOut });
    let dialogUp = false;
    $: dialogUp ? dialogPos.set(0) : dialogPos.set(370)
    let table;

    onMount(() => {
        // Sets scroll to today's day
        table.scrollLeft = (getDay(today) - 1) * 96;
    });

    const today = new Date("12/15/2021");
    //const monday = sub(today, { days: getDay(today) - 1 });
    const schedule = [
        [
            // Monday
            { title: "Geography", from: 10, to: 11.5, type: "lecture" },
            { title: "Lunch", from: 11.5, to: 12.25, type: "lecture" },
            { title: "Math", from: 12.5, to: 13.5, type: "assignment" },
        ],
        [
            // Tuesday
            { title: "English", from: 9, to: 9.75, type: "lecture" },
            { title: "Science", from: 10, to: 11.25, type: "lecture" },
            { title: "Lunch", from: 11.5, to: 12.25, type: "lecture" },
            { title: "Sports", from: 12.5, to: 14, type: "assignment" },
        ],
        [
            // Wednesday
            { title: "History", from: 9.5, to: 11, type: "lecture" },
            { title: "Lunch", from: 11, to: 11.75, type: "lecture" },
            { title: "Math", from: 12, to: 13.5, type: "assignment" },
        ],
        [
            // Wednesday
            { title: "English", from: 9, to: 9.75, type: "lecture" },
            { title: "Arts", from: 10, to: 11, type: "lecture" },
            { title: "Lunch", from: 11, to: 11.75, type: "lecture" },
            { title: "Science", from: 12.5, to: 14.5, type: "assignment" },
        ],
        [
            // Wednesday
            { title: "Biology", from: 9, to: 9.75, type: "lecture" },
            { title: "Biology", from: 10, to: 11.5, type: "lecture" },
            { title: "Lunch", from: 12, to: 12.5, type: "lecture" },
        ],
    ];

    let drag = (node) => {
        // Y coordinate of the first drag start
        let dragStart = null;
        let dragDistance = 0;
        var useTouch = 'ontouchstart' in window ||
            window.DocumentTouch && document instanceof window.DocumentTouch ||
            navigator.maxTouchPoints > 0 ||
            window.navigator.msMaxTouchPoints > 0;

        console.log(useTouch);

        const mouseMove = (e) => {
            console.log(e)
            dragDistance = (e.touches ? e.touches[0].clientY : e.clientY) - dragStart;
            dialogPos.set(dragDistance > 0 ? dragDistance : 0, {duration: 20});
        }

        const mouseUp = () => {
            console.log("Mouseup")
            
            if (useTouch) {
                document.removeEventListener("touchmove", mouseMove);
                document.removeEventListener("touchend", mouseUp);
                document.removeEventListener("touchcancel", mouseUp);
            } else {
                document.removeEventListener("mousemove", mouseMove);    
                document.removeEventListener("mouseup", mouseUp);
            }

            if (dragDistance > 100) {
                dialogUp = false;
            } else {
                dialogPos.set(0)
            }

            dragStart = null;
        }

        const mouseDown = (e) => {
            
            dragStart = e.touches ? e.touches[0].clientY : e.clientY;
            if (useTouch) {
                document.addEventListener("touchmove", mouseMove);
                document.addEventListener("touchend", mouseUp);
                document.addEventListener("touchcancel", mouseUp);
            } else {
                document.addEventListener("mousemove", mouseMove);
                document.addEventListener("mouseup", mouseUp);
            }
        }

        node.addEventListener("mousedown", mouseDown);
        node.addEventListener("touchstart", mouseDown);

        return {}
    }

    let selectedEvent = schedule[0][0];

    function timeToString(time, to) {
        if (to) {
            return timeToString(time) + "-" + timeToString(to);
        }
        const hours = Math.floor(time);
        let mins = Math.round((60 * (time - Math.floor(time))) / 5) * 5;
        if (mins === 0) mins = "00";
        else if (mins === 5) mins = "05";
        return `${hours}:${mins}`;
    }

    function duration(from, to) {
        const hours = to - from;
        const mins = Math.round((60 * (hours - Math.floor(hours))) / 5) * 5;
        return (
            (hours > 1 ? `${Math.floor(hours)}h ` : "") +
            (mins > 0 ? `${mins}min` : "")
        );
    }

    function getColor(subject, justColor) {
        switch (subject.toLowerCase()) {
            case "english":
                return justColor ? "bg-red-600" :"bg-red-200/50 border-red-400/50 text-red-900";
            case "math":
                return justColor ? "bg-fuchsia-600" :"bg-fuchsia-200/50 border-fuchsia-400/50 text-fuchsia-900";
            case "geography":
                return justColor ? "bg-amber-600" :"bg-amber-200/50 border-amber-400/50 text-amber-900";
            case "biology":
                return justColor ? "bg-lime-600" :"bg-lime-200/50 border-lime-400/50 text-lime-900";
            case "science":
                return justColor ? "bg-sky-600" :"bg-sky-200/50 border-sky-400/50 text-sky-900";
            case "history":
                return justColor ? "bg-orange-600" :"bg-orange-200/50 border-orange-400/50 text-orange-900";
            case "lunch":
                return justColor ? "bg-gray-600" :"bg-gray-200/50 border-gray-400/50 text-gray-700 border-dashed";
            default:
                return justColor ? "bg-blue-600" :"bg-blue-200/50 border-blue-400/50 text-blue-900";
        }
    }

    const range = (start, end) =>
        Array.from({ length: end - start + 1 }, (_, i) => i + start);
</script>

<div style="background: #fffdfd">
    <header class="px-4 pt-2">
        <div class="flex mb-2">
            <h1 class="text-2xl mr-2">{format(today, "EEEE")},</h1>
            <span class="text-2xl text-gray-700">{format(today, "MMMM do")}</span
            >
        </div>

        <div
            class="flex cursor-pointer { true 
            ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md shadow-amber-800/40'
            :'bg-amber-100 border border-amber-400/50 text-amber-900' } rounded-lg  py-2 px-3"
            on:click={() => dialogUp = true }
        >
            <svg
                class="w-8 h-8 mr-2 self-center"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg
            >
            <div class="flex-1">
                <div class="flex justify-between">
                    <p class="font-bold leading-4">Geography</p>
                    <p class="text-sm">{timeToString(11, 11.95)}</p>
                </div>
                <p class="self-center mr-2 text-sm">Starting in 13 minutes</p>
            </div>
        </div>
    </header>

    <div class="flex relative">
        <div class="px-4 py-6">
            Time
            <ul class="flex flex-col mt-3">
                {#each range(9, 15) as hours}
                    <div class="h-16">{hours}:00</div>
                {/each}
            </ul>
        </div>

        <div
            bind:this={table}
            class="flex py-2 px-2 relative overflow-x-auto snap-x no-scrollbar"
            style=""
        >
            <div class="absolute top-1 -ml-4" style="min-width: 500px;">
                {#each range(9, 15) as _}
                    <div class="h-16 w-full border-b border-gray-200" />
                {/each}
            </div>
            {#each "Monday Tuesday Wednesday Thursday Friday".split(" ") as dayAbrv, index}
                <div class="relative mr-4 snap-start" style="min-width: {getDay(today) - 1 == index ? 8 : 6}rem;">
                    <div class="flex flex-col items-center justify-center" style="min-height: 52px;">
                        { #if getDay(today) - 1 == index}
                        <p class="px-2 py-0.5 rounded-lg bg-blue-600 text-white">
                            Today
                        </p>
                        { /if}
                        <div class="text-gray-400">{dayAbrv}</div>
                    </div>
                    {#each schedule[index] ?? [] as task}
                        <div on:click={() => {selectedEvent = task; dialogUp = true}}
                            class="absolute p-1 left-0 {getColor(task.title)} border rounded-md w-full cursor-pointer"
                            style="transform:translateY({(task.from - 9) *
                                64}px); top: 60px; height: {(task.to -
                                task.from) *
                                64 -
                                1}px;"
                        >
                            <!-- Task box -->
                            <p class="font-bold tracking-wide leading-4">{task.title}</p>
                            {#if task.to - task.from > 0.5}
                                <span class="text-sm"
                                    >{timeToString(task.from, task.to)}</span
                                >
                            {/if}
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
        <div
            class="border-t border-red-600 absolute"
            style="z-index: 10; width: calc(100% - 4px); left: 4px; top: 66px; transform:translateY(24px);"
        >
            <span
                class="bg-red-600 rounded-md px-1 text-white text-sm absolute"
                style="top: -10px;">9:21</span
            >
        </div>
    </div>

</div>

<!-- Backdrop -->
<div class="w-full h-full fixed top-0 left-0 bg-gray-800/70 z-10" style="opacity: {1- $dialogPos / 250}; display: {$dialogPos > 250 ? 'none':'block'}" on:click={() => dialogUp = false }></div>


<div class="fixed px-4 py-2 bg-white w-full bottom-0 z-20 rounded-t-xl" style="transform:translateY({$dialogPos}px)">
    
    <div class="cursor-pointer pb-2" use:drag>
        <div class="w-6 mb-2 mx-auto rounded-full bg-gray-400 " style="height: 4px"></div>
    </div>
    <div class="flex">
        <div class="mt-1.5 mr-2 h-4 w-4 rounded-full {getColor(selectedEvent.title, true)}"></div>
        <div>
            <h1 class="text-xl">{selectedEvent.title}</h1>
            
        </div>
    </div>
    <p class="text-gray-600">{format(today, "EEEE, MMMM do")}</p>
    <p>{timeToString(selectedEvent.from, selectedEvent.to)}</p>
    <hr class="my-2"/>
    <p class="mb-6">Before the class, read Chapter 3.</p>
    <hr class="my-2"/>
    
    <button class="bg-blue-600 w-full rounded-lg py-2 px-4 text-white flex justify-center">
        <svg class="w-6 h-6 mr-2 -ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        <p>Join class</p>
    </button>
    <p class="text-sm mt-2 ml-1 text-blue-600">Class starts in 4 minutes!</p>

    <div class="flex justify-between px-4 my-6 text-blue-700 text-center">
        <a href="#" class="flex flex-col items-center px-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <p class="" style="font-size: 11px;">Add notification</p>
        </a>
        <a href="#" class="flex flex-col items-center px-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <p class="" style="font-size: 11px;">Go to material</p>
        </a>
    </div>
    
</div>

<style>
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
</style>
