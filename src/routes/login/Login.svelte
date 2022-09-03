<script>

  import axios from 'axios'
  import {config, apiURL} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'
  
  let phone
  let password

  async function submit() {
    try {
      const {data} = await axios.post(
        `${apiURL}/v1/student/login`,
        {phone, password},
        config
      )
      localStorage.setItem('phone', phone)
      push('/login/verify-code')
    } catch(error) {
      console.log(error.response.data.message)
    }
  }

</script>

<main>
  <br>
  <input name="phone" placeholder="phone" type="text" bind:value={phone}>
  <input name="password" placeholder="password" type="text" bind:value={password}>

  <input type="submit" value="submit" on:click={submit}/>
</main>