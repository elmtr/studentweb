<script>
  import { pop, push } from 'svelte-spa-router'
  import {lastName, firstName} from '../../stores'

  // kiui
  import InputText from '../../kiui/Inputs/InputText.svelte'
  import Title from '../../kiui/Title.svelte'
  import Header from '../../kiui/Header.svelte'
  import Next from '../../kiui/Inputs/Next.svelte'
  import Previous from '../../kiui/Inputs/Previous.svelte'

  let active = false
  $: {
    if (lastName !== "" && firstName !== "") {
      active = true
    } else {
      active = false
    }
  }
</script>

<main>
  <Header />
  <Title value="Hai să ne cunoaștem!" />
  <InputText preinput="" label="Nume" placeholder="ex. Popescu" bind:value={$lastName} />
  <InputText preinput="" label="Prenume" placeholder="ex. Ion" bind:value={$firstName} />

  <Next {active} onClick={async () => {
    push('/signup/phone')
  }} />

  <Previous onClick={pop} />
</main>