<script>

  import {login} from '../../fetch/login'
  import {link} from 'svelte-spa-router'
  import {phoneNumber} from '../../stores'

  // kiui
  import InputNumber from '../../kiui/Inputs/InputNumber.svelte'
  import InputPassword from '../../kiui/Inputs/InputPassword.svelte'
  import SubmitButton from '../../kiui/Inputs/SubmitButton.svelte'
  import Next from '../../kiui/Inputs/Next.svelte'
  import Header from '../../kiui/Header.svelte'
  import Title from '../../kiui/Title.svelte'
  import ErrorMessage from '../../kiui/ErrorMessage.svelte'

  let phone
  let password

</script>

<main>
  <Header />
  <Title value="Salut! Ne-ai lipsit!" />
  <InputNumber preinput="+4" label="Numărul de telefon" placeholder="ex. 0712345678" bind:value={phone} />
  <InputPassword preinput="" label="Parola" placeholder="ex. 1Motocoasa.Circuit#Triplu23" bind:value={password} />

  <ErrorMessage />

  <div id="signup-link">
    Nu ai cont? <a href="/signup/basic" use:link>Creează unul acum.</a>
  </div>
  <Next active={true} onClick={
    async () => {
      await login("0" + phone.toString(), password)
      $phoneNumber = '0' + phone.toString()
  }} />
</main>

<style scoped>
  #signup-link {
    width: 50%;
    height: 20px;
    position: fixed;
    bottom: 50px;
    left: 10px;

    color: var(--darkgreen);
    font-family: var(--sans-serif);
    text-align: center;
  }

  #signup-link a {
    color: var(--lightgreen);
    text-decoration: none;
  }
</style>