<script>

  import {push} from 'svelte-spa-router'
  import {onMount} from 'svelte'
  import {loginUpdate} from '../../fetch/login'
  import {info} from '../../stores'
    
  // kiui
  import KeyPad from '../../kiui/Inputs/KeyPad.svelte'
  import Heading from '../../kiui/Heading.svelte'
  import ErrorMessage from '../../kiui/ErrorMessage.svelte'

  let passcode = ""

</script>

<main>
  <Heading title="Bună, {$info.firstName} 👋" />
  <div id="container">
    <div id="passcode">
      <div class="digit-container">
        {#if passcode.length > 0}
          <div class="digit digit-on"></div>
        {:else}
          <div class="digit"></div>
        {/if}
      </div>

      <div class="digit-container">
        {#if passcode.length > 1}
          <div class="digit digit-on"></div>
        {:else}
          <div class="digit"></div>
        {/if}
      </div>

      <div class="digit-container">
        {#if passcode.length > 2}
          <div class="digit digit-on"></div>
        {:else}
          <div class="digit"></div>
        {/if}
      </div>

      <div class="digit-container">
        {#if passcode.length > 3}
          <div class="digit digit-on"></div>
        {:else}
          <div class="digit"></div>
        {/if}
      </div>
    </div>

    <div id="error-container">
      <ErrorMessage />
    </div>
  </div><br>

  <div id="spacing"></div>

  <div id="keypad-container">
    <KeyPad length={4} bind:value={passcode} onClick={async () => {
      await loginUpdate($info.phone, passcode)
      passcode = ""
    }}/>
  </div>

</main>

<style scoped>
  #keypad-container {
    width: var(--container);
    height: 350px;
    margin: auto;
    position: fixed; 
    bottom: 0;
  }

  #error-container {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }

  #spacing {
    width: 100%;
    height: 100px;
  }

  #container {
    width: 100%;
    height: 30px;
    margin: auto;
    margin-top: 120px;
  }

  #passcode {
    width: 20%;
    height: 100%;
    margin-left: 40%;

    display: flex;
    flex-wrap: wrap;
  }

  .digit-container {
    flex: 25%;
    position: relative;
  }

  .digit {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: var(--border);

    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  
  .digit-on {
    background: var(--darkgreen);
  }
</style>