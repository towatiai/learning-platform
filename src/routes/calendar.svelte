<script>
    import { format, getDay, getDate, sub, add } from "date-fns";
    const today = new Date();
    const monday = sub(today, { days: getDay(today) - 1 });
    const schedule = [
        [
            // Monday
            { title: "Geography", from: 10, to: 11.5, type: 'lecture' },
            { title: "Mathematics", from: 12.5, to: 13, type: 'assignment' },
        ], [
            // Tuesday
            { title: "English", from: 8, to: 9.75, type: 'lecture' },
            { title: "Mathematics", from: 12.5, to: 13, type: 'assignment' },
        ],
    ];

    function timeToString(time) {
        const hours = Math.floor(time);
        let mins = Math.round(60*(time-Math.floor(time))/5)*5
        if (mins === 0) mins = '00';
        else if (mins === 5) mins = '05'
        return `${hours}:${mins}` 
    }

    function duration(from, to) {
        const hours = to-from;
        const mins = Math.round(60*(hours-Math.floor(hours))/5)*5;
        return (hours > 1 ? `${Math.floor(hours)}h `:'') + `${mins}min`
    }
</script>

<div class="">
    <header class="p-2 bg-white">
        <h1 class="text-xl">{format(today, "MMMM do")}</h1>
    </header>

    <ul class="flex justify-between w-full py-2 px-16">
        {#each "MTWTF".split("") as dayAbrv, index}
            <li class="flex flex-col items-center">
                <div class="text-gray-400">{dayAbrv}</div>
                <div
                    class="px-3 py-1 rounded-xl {getDay(today) - 1 == index
                        ? 'bg-blue-600 text-white'
                        : ''}"
                >
                    {getDate(monday) + index}
                </div>
            </li>
        {/each}
    </ul>

    <div class="p-4">
        {#each schedule as day, i}
            <h2 class="font-bold text-lg mb-1 mt-4 ml-1">{format(add(monday, { days: i }), "EEEE, LLL do")}</h2>
            { #each day as task }
            <div class="flex mb-2 py-2 px-3 rounded-2xl bg-yellow-100 border-yellow-200 border">
                <img src="/static/subjects/globe.png" alt="A globe icon refering to geography" height="48" width="48"/>
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
</div>
