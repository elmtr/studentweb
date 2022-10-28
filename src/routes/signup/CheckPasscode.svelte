<script>
  
  import { signupPasscode } from '../../fetch/signup'
  import {pop} from 'svelte-spa-router'
  import {passcode} from '../../stores'
  
  // kiui
  import Passcode from '../../kiui/Passcode.svelte'
  import Header from '../../kiui/Header.svelte'
  import Title from '../../kiui/Title.svelte'


  import KeyPad from '../../kiui/Inputs/KeyPad.svelte'
  import Previous from '../../kiui/Inputs/Previous.svelte'
  import Next from '../../kiui/Inputs/Next.svelte'


  let active = false
  let checkPasscode = ""

  $: {
    if (checkPasscode === $passcode && checkPasscode !== "") {
      active = true
    } else {
      active = false
    }

    console.log($passcode)
  }
  
</script>

<main>
  <Header />
  <Title value="Verifică PIN-ul" />
  <div style="height: 20px;"></div>
  <Passcode value={checkPasscode} />

  <div style="height: 100px;"></div>
  <KeyPad bind:value={checkPasscode} length={4} okButton={false} />

  <Previous onClick={pop} />
  <Next {active} onClick={async () => {
    await signupPasscode($passcode)
  }} />
</main>