<script>

  import {push} from 'svelte-spa-router'
  import {onMount} from 'svelte'
  import {loginUpdate} from '../../fetch/login'
    
  // kiui
  import KeyPad from '../../kiui/Inputs/KeyPad.svelte'

  let passcode = ""
  let phone
  
  onMount(() => {
    phone = localStorage.getItem("phone")
    if (phone == null) {
      push("/login")
    }
  })

</script>

<main>
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
  </div><br>

  <div id="spacing"></div>

  <KeyPad length={4} bind:value={passcode} onClick={async () => {
    await loginUpdate(phone, passcode)
  }}/>
</main>

<style scoped>
  #spacing {
    width: 100%;
    height: 100px;
  }

  #container {
    width: 100%;
    height: 30px;
    margin: auto;
    margin-top: 60px;
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