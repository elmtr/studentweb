<script>

  import { signupPassword } from '../../fetch/signup'
  import {pop} from 'svelte-spa-router'
  
  // kiui
  import Header from '../../kiui/Header.svelte'
  import Title from '../../kiui/Title.svelte'
  
  import InputPassword from '../../kiui/Inputs/InputPassword.svelte'
  import Previous from '../../kiui/Inputs/Previous.svelte'
  import Next from '../../kiui/Inputs/Next.svelte'

  let password = ""
  let checkPassword = ""

  let active = false

  let reqLength = false
  let reqDigit = false
  let reqSpecialChar = false

  $: {
    if (password === checkPassword 
      && password !== "" 
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
    reqDigit = digits.some(digit => password.includes(digit))

    // const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '.', '-', '_', '+', '=']
    // reqSpecialChar = specialChars.some(char => password.includes(char))

    reqLength = password.length >= 8
  }
  
</script>

<main>
  <Header />
  <Title value="Acum poți să-ți creezi o parolă" />
  
  <InputPassword 
    preinput="" 
    label="Parola" 
    placeholder="ex. 1Motocoasa.Circuit#Triplu23" 
    bind:value={password} 
  />
  <InputPassword 
    discoverable={false}
    preinput="" 
    label="Confirmă parola" 
    placeholder="(aceeași cu cea de sus)" 
    bind:value={checkPassword} 
  />

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
        Cel putin 8 caractere
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

    <!-- <div class="requirement">
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
    </div> -->
  </div>

  <Previous onClick={pop} />
  <Next {active} onClick={async () => {
    await signupPassword(password);
  }} />
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