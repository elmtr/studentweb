<script>  
  import { loginVerifyCode } from '../../fetch/login'
  import {onMount} from 'svelte'
  import {push, pop} from 'svelte-spa-router'

  // kiui
  import Header from '../../kiui/Header.svelte'
  import Title from '../../kiui/Title.svelte'
  import KeyPad from '../../kiui/Inputs/KeyPad.svelte'
  import Code from '../../kiui/Code.svelte'
  import ErrorMessage from '../../kiui/ErrorMessage.svelte'

  import Previous from '../../kiui/Inputs/Previous.svelte'
  import Next from '../../kiui/Inputs/Next.svelte'
  
  let code = ""

  let active = false

  $: {
    if (code.length === 6) {
      active = true
    } else {
      active = false
    }
  }
</script>

<main>
  <Header />
  <Title value="Introdu codul de pe SMS" />

  <Code value={code} />
  <div style="height: 10px;"></div>
  <ErrorMessage />

  <div id="spacing"></div>
  <KeyPad bind:value={code} length={6} okButton={false} />

  <Previous onClick={pop} />
  <Next {active} onClick={async () => {
    await loginVerifyCode(code)
  }} />
</main>

<style scoped>
  #spacing {
    height: 100px;
    width: 100%;
  }
</style>