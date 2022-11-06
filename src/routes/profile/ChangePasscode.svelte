<script>

  import axios from 'axios'
  import {apiURL, tokenConfig} from '../../axiosConfig'
  import {pop, push} from 'svelte-spa-router'
  import {token} from '../../stores'
  import {changePasscode} from '../../fetch/profile'

  // kiui
  import SubmitButton from '../../kiui/Inputs/SubmitButton.svelte'
  import Next from '../../kiui/Inputs/Next.svelte'
  import InputPassword from '../../kiui/Inputs/InputPassword.svelte'
  import HeaderBack from '../../kiui/HeaderBack.svelte'
  import Heading from '../../kiui/Heading.svelte'

  let passcode = ""
  let newPasscode = ""
  let newPasscodeCheck

  let active = false
  
  let reqLength = false
  let reqDigits = false

  $: {
    if (newPasscode === newPasscodeCheck 
      && newPasscode !== "" 
      && passcode !== ""
      && reqDigits
      && reqLength
    ) {
      active = true
    } else {
      active = false
    }
  }

  $: {
    reqLength = newPasscode.length === 4

    const digits = [0,1,2,3,4,5,6,7,8,9]
    reqDigits = /^\d+$/.test(newPasscode)
  }
  

</script>

<main>
  <br>

  <HeaderBack />

  <Heading title={"Schimba PIN-ul"} />

  <InputPassword preinput="" label="PIN vechi" placeholder="PIN vechi" bind:value={passcode} />
  <InputPassword preinput="" label="PIN nou" placeholder="ex. 1234" bind:value={newPasscode} />
  <InputPassword preinput="" label="Verifică PIN nou" placeholder="ex. 1234" bind:value={newPasscodeCheck} />

  <div id="indications">
    <span id="title">Un PIN ar trebui sa aiba: </span>
    <div class="requirement">
      {#if reqLength}
        <div class="req-status req-done">
          <img src="/img/done.svg" alt="">
        </div>
      {:else}
        <div class="req-status">
          <img src="/img/bullet.svg" alt="">
        </div>
      {/if}
      <div class="req-text">
        Exact 4 caractere
      </div>
    </div>
    <div class="requirement">
      {#if reqDigits}
        <div class="req-status req-done">
          <img src="/img/done.svg" alt="">
        </div>
      {:else}
        <div class="req-status">
          <img src="/img/bullet.svg" alt="">
        </div>
      {/if}
      <div class="req-text">
        Doar cifre
      </div>
    </div>
  </div>

  <div id="submit-container">
    <Next {active} onClick={async () => {
      await changePasscode(passcode, newPasscode)
      push('')
    }} />
  </div>
</main>

<style scoped>
  #indications {
    width: 90%;
    box-sizing: border-box;
    margin: auto;

    padding: 10px;
  }

  #title {
    color: var(--black);
    font-family: var(--sans-serif);
  }
  
  .requirement {
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    color: var(--black);
    font-family: var(--sans-serif);
  }

  .req-status {
    box-sizing: border-box;
    padding: 10px 0;
    width: 20px;

    position: relative;
  }

  .req-status img {
    width: 80%;
    height: 80%;
    filter: var(--darkgree-filter);
  }

  .req-done img {
    filter: var(--lightgreen-filter);
  }

  .req-text {
    box-sizing: border-box;
    padding: 10px 0;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 30px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
</style>