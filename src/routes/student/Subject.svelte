<script>
  import {writable} from 'svelte/store';

  import {pointsValue, token} from '../../stores';

  import {
    fetchDraftMarks,
    fetchMarks,
    fetchPoints,
    fetchSubjects,
    fetchTruancies
  } from '../../fetch/fetch'

  // kiui
  import Points from '../../kiui/Dashboard/Points.svelte'
  import Marks from '../../kiui/Dashboard/Marks.svelte'
  import DraftMarks from '../../kiui/Dashboard/DraftMarks.svelte'
  import Truancies from '../../kiui/Dashboard/Truancies.svelte'
  import HeaderBack from '../../kiui/HeaderBack.svelte'
  import Loading from '../../kiui/Loading.svelte'
    import Loader from '../../kiui/Loader.svelte'

  let subject = writable({})

  export let params = {}

  function selectSubject(subjects) {
    for (let index in subjects) {
      let selSubject = subjects[index] 
      if (selSubject.key === params.subjectKey) {
        subject.set(selSubject)
      }
    }

    return ''
  }

  async function reload() {
    await fetchPoints($token, params.subjectKey, params.studentKey)
    await fetchDraftMarks($token, params.subjectKey, params.studentKey)
    await fetchMarks($token, params.subjectKey, params.studentKey)
    await fetchTruancies($token, params.subjectKey, params.studentKey)
  }
</script>

<HeaderBack />

<div id="reload" on:click={reload}>
  <img src="/img/reload.svg" alt="">
</div>

{#await fetchSubjects($token, params.gradeKey) then subjects}
  {selectSubject(subjects)}
  <div id="heading">
    {$subject.name}
  </div>
{/await}
  
<Loader />

<Points subjectKey={params.subjectKey} studentKey={params.studentKey} mod={false} />

<DraftMarks subjectKey={params.subjectKey} studentKey={params.studentKey} mod={false} />

<Marks subjectKey={params.subjectKey} studentKey={params.studentKey} mod={false} />

<Truancies subjectKey={params.subjectKey} studentKey={params.studentKey} mod={false} />

<style scoped>
  #heading {
    font-size: 2em;
		color: var(--black);
		margin-left: 18px;
		margin-top: 10px;
		margin-bottom: 15px;
		font-weight: 700;
		font-family: var(--sans-serif);
  }

  #reload {
    width: 35px;
    height: 35px;
    position: fixed;
    top: 12px;
    right: 15px;
  }

  #reload img {
    filter: var(--darkgreen-filter);
    width: 70%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
