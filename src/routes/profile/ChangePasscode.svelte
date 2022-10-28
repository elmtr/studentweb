<script>

  import axios from 'axios'
  import {apiURL, tokenConfig} from '../../axiosConfig'
  import {pop, push} from 'svelte-spa-router'
  import {token} from '../../stores'
  import {changePasscode} from '../../fetch/profile'

  // kiui
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

  <InputPassword preinput="" label="PIN vechi" placeholder="PIN veche" bind:value={passcode} />
  <InputPassword preinput="" label="PIN nou" placeholder="ex. 1234" bind:value={newPasscode} />
  <InputPassword preinput="" label="Verifică PIN nou" placeholder="ex. 1234" bind:value={newPasscodeCheck} />

  <div id="indications">
    <span id="title">Un PIN ar trebui sa aiba: </span>
    <div class="requirement">
      <div class="req-status req-done">
        {#if reqLength}
          <img src="/img/location-lightgreen.png" alt="">
        {:else}
          <img src="/img/location-darkgreen.png" alt="">
        {/if}
      </div>
      <div class="req-text">
        Exact 4 caractere
      </div>
    </div>
    <div class="requirement">
      <div class="req-status req-done">
        {#if reqDigits}
          <img src="/img/location-lightgreen.png" alt="">
        {:else}
          <img src="/img/location-darkgreen.png" alt="">
        {/if}
      </div>
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