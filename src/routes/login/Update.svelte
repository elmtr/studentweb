<script>

  import axios from 'axios'
  import {tokenConfig, apiURL} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'
  import {token, info} from '../../stores'
  import {onMount} from 'svelte'

  let passcode
  let phone
  
  onMount(() => {
    phone = localStorage.getItem("phone")
    if (phone == null) {
      push("/login")
    }
  })

  async function submit() {
    try {
      const {data} = await axios.post(
        `${apiURL}/v1/student/login/update`,
        {phone, passcode},
        tokenConfig(localStorage.getItem("userToken"))
      )
      localStorage.setItem("userInfo", JSON.stringify(data.student))
      token.set(data.token)
      info.set(data.student)

      // keep it logged in
      localStorage.setItem("token", data.token)

      
      push('/')
    } catch(error) {
      console.log(error.response.data.message)
    }
  }

</script>

<main>
  <input name="passcode" placeholder="passcode" type="text" bind:value={passcode} />

  <input type="submit" value="submit" on:click={submit}/>
</main>