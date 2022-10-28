<script>
  import { onMount } from "svelte"
  import { push } from "svelte-spa-router"


  onMount(() => {
    localStorage.removeItem("userInfo")
    localStorage.removeItem("phone")
    localStorage.removeItem("token")

    push('/welcome')
  })
</script>