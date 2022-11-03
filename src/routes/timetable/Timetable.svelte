<script>
  
  import {token, today} from '../../stores';
  import {fetchSchool, fetchTimetable} from '../../fetch/fetch'
  import { writable } from 'svelte/store'
  import { onMount } from 'svelte'

  // kiui
  import Days from '../../kiui/Slide/Days.svelte'
  import Period from '../../kiui/Timetable/Period.svelte'
  import NavBar from '../../kiui/NavBar.svelte'
  import Heading from '../../kiui/Heading.svelte'


  let intervals = [1,2,3,4,5,6,7,8,9,10,11,12]

  let day = writable(1);
  onMount(() => {
    if ($today > 5) {
      day.set(1)
    } else day.set($today)
  })

</script>

<div id="container">
  <Heading title="Orar" />

  <Days {day} />
</div>
<div id="spacing"></div>

<NavBar location="timetable" />

{#await fetchSchool($token) then data}
  {#await fetchTimetable($token) then periods}
    {#each intervals as interval}
      {#if periods[$day][interval].length > 0}
        {#each periods[$day][interval] as period}
          <Period {period} />
        {/each}
      {/if}
    {/each}
  {/await}
{/await}

<br><br><br><br><br>

<style scoped>
  #container {
    width: var(--container);
    position: fixed;
    background: var(--offwhite);
    z-index: 10;
  }

  #spacing {
    height: 150px;
  }
</style>