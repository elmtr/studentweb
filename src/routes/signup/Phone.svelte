<script>
  
  import {signupBasic} from '../../fetch/signup'
  import {pop} from 'svelte-spa-router'
  import {lastName, firstName, errorMessage} from '../../stores'

  // kiui
  import Title from '../../kiui/Title.svelte'
  import ErrorMessage from '../../kiui/ErrorMessage.svelte'
  import Header from '../../kiui/Header.svelte'
  import InputText from '../../kiui/Inputs/InputText.svelte'
  import Next from '../../kiui/Inputs/Next.svelte'
  import Previous from '../../kiui/Inputs/Previous.svelte'
  import { onMount } from 'svelte'

  let phone = ""
  let active = false
  $: {
    if (phone.length === 10) {
      active = true
      console.log($lastName + " " + $firstName)
    } else {
      active = false
      console.log($lastName + " " + $firstName)
    }
  }

  onMount(() => {
    $errorMessage = ""
  })

</script>

<main>
  <Header />
  <Title value="Sigur nu ești robot? 🤖" />
  <InputText preinput="+4" label="Numarul de telefon" placeholder="ex. 0712345678" bind:value={phone} />

  <ErrorMessage />

  <Next {active} onClick={async () => {
    await signupBasic($lastName, $firstName, phone)
  }} />

  <Previous onClick={pop} />
</main>