<script>

  import axios from 'axios'
  import {apiURL, tokenConfig} from '../../axiosConfig'
  import {pop, push} from 'svelte-spa-router'
  import {token} from '../../stores'
  import {changePassword} from '../../fetch/profile'

  // kiui
  import SubmitButton from '../../kiui/Inputs/SubmitButton.svelte'
  import Next from '../../kiui/Inputs/Next.svelte'
  import InputPassword from '../../kiui/Inputs/InputPassword.svelte'
    import HeaderBack from '../../kiui/HeaderBack.svelte'
    import Heading from '../../kiui/Heading.svelte'

  let password = ""
  let newPassword = ""
  let newPasswordCheck

  let active = false
  
  let reqLength = false
  let reqDigit = false
  let reqSpecialChar = false

  $: {
    if (newPassword === newPasswordCheck 
      && newPassword !== "" 
      && reqDigit 
      && reqSpecialChar 
      && reqLength
    ) {
      active = true
    } else {
      active = false
    }
  }

  $: {
    const digits = [0,1,2,3,4,5,6,7,8,9]
    reqDigit = digits.some(digit => newPassword.includes(digit))

    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '.', '-', '_', '+', '=']
    reqSpecialChar = specialChars.some(char => newPassword.includes(char))

    reqLength = newPassword.length >= 12
  }
  

</script>

<main>
  <br>

  <HeaderBack />

  <Heading title={"Schimbă parola"} />

  <InputPassword preinput="" label="Parola veche" placeholder="parola veche" bind:value={password} />
  <InputPassword preinput="" label="Parola nouă" placeholder="ex. 1Motocoasa.Circuit#Triplu23" bind:value={newPassword} />
  <InputPassword preinput="" label="Verifică parola nouă" placeholder="ex. 1Motocoasa.Circuit#Triplu23" bind:value={newPasswordCheck} />

  <div id="indications">
    <span id="title">O parola ar trebui sa aiba: </span>
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
        Cel putin 12 caractere
      </div>
    </div>
    <div class="requirement">
      {#if reqDigit}
        <div class="req-status req-done">
          <img src="/img/done.svg" alt="">
        </div>
      {:else}
        <div class="req-status">
          <img src="/img/bullet.svg" alt="">
        </div>
      {/if}
      <div class="req-text">
        Cel putin o cifra <br>
        (ex. de la 0 la 9)
      </div>
    </div>

    <div class="requirement">
      {#if reqSpecialChar}
        <div class="req-status req-done">
          <img src="/img/done.svg" alt="">
        </div>
      {:else}
        <div class="req-status">
          <img src="/img/bullet.svg" alt="">
        </div>
      {/if}
      <div class="req-text">
        Cel putin un caracter special <br>
        (ex. !@#$%^&*.-_+=)
      </div>
    </div>
  </div>

  <div id="submit-container">
    <Next {active} onClick={async () => {
      await changePassword(password, newPassword)
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
    filter: var(--darkgreen-filter);
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