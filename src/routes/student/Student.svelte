<script>
  
  import axios from 'axios';
  import { link, location } from 'svelte-spa-router';

  import { tokenConfig, apiURL } from '../../axiosConfig';
  import {token, truancies, draftMarks} from '../../stores';

  export let params = {}

  async function loadPoints() {
    const {data} = await axios.get(
      `${apiURL}/v1/student/points?subjectID=${params.subjectID}`,
      tokenConfig($token),
    )

    return data
  }

  async function loadDraftMarks() {
    const {data} = await axios.get(
      `${apiURL}/v1/student/draftMarks?subjectID=${params.subjectID}`,
      tokenConfig($token),
    )
    draftMarks.set(data)
    return data
  }

  async function loadMarks() {
    const {data} = await axios.get(
      `${apiURL}/v1/student/marks?subjectID=${params.subjectID}`,
      tokenConfig($token),
    )
    return data
  }

  async function loadTruancies() {
    const {data} = await axios.get(
      `${apiURL}/v1/student/truancies?subjectID=${params.subjectID}`,
      tokenConfig($token),
    )
    truancies.set(data)
    return data
  }

</script>


<h1>points</h1>
{#await loadPoints() then points}
  {points.value}
{/await}


<h1>draft marks</h1>
{#await loadDraftMarks() then draftMarks}
  {#each draftMarks as draftMark}
    {draftMark.value} - {draftMark.dateDay}.{draftMark.dateMonth}
    <br>
  {/each}
{/await}

<h1>marks</h1>
{#await loadMarks() then marks}
  {#each marks as mark}
    {mark.value} - {mark.dateDay}.{mark.dateMonth}<br>
  {/each}
{/await}

<h1>truancies</h1>
{#await loadTruancies() then truancies}
  {#each truancies as truancy}
    {#if truancy.motivated}
      {truancy.motivated ? "motivata" : "nemotivata"} - 
      {truancy.dateDay}.{truancy.dateMonth}<br>
    {:else} 
      <a href="{$location}/motivate/{truancy.id}" use:link>
        {truancy.motivated ? "motivata" : "nemotivata"} - 
        {truancy.dateDay}.{truancy.dateMonth}
      </a><br>
    {/if}
  {/each}
{/await}