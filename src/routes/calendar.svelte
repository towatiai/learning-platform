<script>
    import { format, getDay, getDate, sub, add } from "date-fns";
    const today = new Date();
    const monday = sub(today, { days: getDay(today) - 1 });
    const schedule = [
        [
            // Monday
            { title: "Geography", from: 10, to: 11.5, type: "lecture" },
            { title: "Lunch", from: 11.5, to: 12.25, type: "lecture" },
            { title: "Math", from: 12.5, to: 13, type: "assignment" },
        ],
        [
            // Tuesday
            { title: "English", from: 9, to: 9.75, type: "lecture" },
            { title: "Lunch", from: 11.5, to: 12.25, type: "lecture" },
            { title: "Math", from: 12.5, to: 14.5, type: "assignment" },
        ],
        [
            // Tuesday
            { title: "English", from: 9, to: 9.75, type: "lecture" },
            { title: "Lunch", from: 11.5, to: 12.25, type: "lecture" },
            { title: "Math", from: 12.5, to: 14.5, type: "assignment" },
        ],
    ];

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

    function getColor(subject) {
        switch (subject.toLowerCase()) {
            case "english":
                return "bg-red-200/50 border-red-400/50 text-red-900";
            case "math":
                return "bg-fuchsia-200/50 border-fuchsia-400/50 text-fuchsia-900";
            case "geography":
                return "bg-amber-200/50 border-amber-400/50 text-amber-900";
            case "lunch":
                return "bg-gray-200/50 border-gray-400/50 text-gray-700 border-dashed";
            default:
                return "bg-blue-200/50 border-blue-400/50 text-blue-900";
        }
    }

    const range = (start, end) =>
        Array.from({ length: end - start + 1 }, (_, i) => i + start);
</script>

<div class="">
    <header class="p-4 bg-white shadow-md">
        <div class="flex mb-1">
            <h1 class="text-2xl mr-2">{format(today, "EEEE")}</h1>
            <span class="text-2xl text-blue-700">{format(today, "MMMM do")}</span
            >
        </div>

        <div
            class="flex bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white py-2 px-3 shadow-md shadow-blue-800/40"
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
                <p class="self-center mr-2 text-sm">Starting in 1h 22min</p>
            </div>
        </div>
    </header>

    <div class="flex relative">
        <div class="p-4">
            Time
            <ul class="flex flex-col mt-4">
                {#each range(9, 15) as hours}
                    <div class="h-16">{hours}:00</div>
                {/each}
            </ul>
        </div>

        <div
            class="flex py-2 px-2 relative overflow-x-auto snap-x no-scrollbar"
            style=""
        >
            <div class="absolute top-1 -ml-4" style="min-width: 500px;">
                {#each range(9, 15) as _}
                    <div class="h-16 w-full border-b border-gray-200" />
                {/each}
            </div>
            {#each "Mon Tue Wed Thu Fri".split(" ") as dayAbrv, index}
                <div class="relative mr-1 snap-start" style="min-width: 6rem;">
                    <div class="flex flex-col items-center">
                        <div class="text-gray-400">{dayAbrv}</div>
                        <div
                            class="px-2 py-0.5 rounded-lg {getDay(today) - 1 ==
                            index
                                ? 'bg-blue-600 text-white'
                                : ''}"
                        >
                            {getDate(monday) + index}
                        </div>
                    </div>
                    {#each schedule[index] ?? [] as task}
                        <div
                            class="absolute p-1 left-0 {getColor(
                                task.title
                            )} border-blue-400/50 border rounded-md w-full text-blue-900"
                            style="transform:translateY({(task.from - 9) *
                                64}px); top: 60px; height: {(task.to -
                                task.from) *
                                64 -
                                1}px;"
                        >
                            <!-- Task box -->
                            <p class="font-bold leading-4">{task.title}</p>
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

    <!--
    <div class="p-4">
        {#each schedule as day, i}
            <h2 class="font-bold text-lg mb-1 mt-4 ml-1">{format(add(monday, { days: i }), "EEEE, LLL do")}</h2>
            { #each day as task }
            <div class="flex mb-2 py-2 px-3 rounded-2xl bg-yellow-100 border-yellow-200 border">
                <div>
                
                <p>{task.title}</p>
                <span>{timeToString(task.from)}<span>
                { #if task.to }
                -<span>{timeToString(task.to)}</span>
                { /if }
            </div>
            <p>{duration(task.from, task.to)}</p>
            </div>
            { /each }
        {/each}
    </div>
-->
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
