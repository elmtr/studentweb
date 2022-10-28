<script>
  import {writable} from 'svelte/store';

  import {token} from '../../stores';

  import {
    fetchSubjects
  } from '../../fetch/fetch'

  // kiui
  import Points from '../../kiui/Dashboard/Points.svelte'
  import Marks from '../../kiui/Dashboard/Marks.svelte'
  import DraftMarks from '../../kiui/Dashboard/DraftMarks.svelte'
  import Truancies from '../../kiui/Dashboard/Truancies.svelte'
  import HeaderBack from '../../kiui/HeaderBack.svelte'

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
</script>

<HeaderBack />

{#await fetchSubjects($token, params.gradeKey) then subjects}
  {selectSubject(subjects)}
  <div id="heading">
    {$subject.name}
  </div>
{/await}

<Points subjectKey={params.subjectKey} studentKey={params.studentKey} mod={false}  />

<DraftMarks subjectKey={params.subjectKey} studentKey={params.studentKey} mod={false} />

<Marks subjectKey={params.subjectKey} studentKey={params.studentKey} mod={false}  />

<Truancies subjectKey={params.subjectKey} studentKey={params.studentKey} mod={false}  />

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
</style>
