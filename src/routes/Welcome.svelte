<script>

  import { onMount } from 'svelte'
  import {link} from 'svelte-spa-router'
  import {token, info} from '../stores'
  import {push} from 'svelte-spa-router'

  if ($info && !$token) {
    push("/login/update")
  }

</script>

<div id="image-banner">
  <img src="/img/banner.png" alt="">
</div>

<div id="logo">
  elmtree
</div>

<div id="text">
  Ești gata să vezi cum tehnologia schimbă modul în care vezi educația?
</div>

<a href="/login" use:link>
  <div id="next">
    <img src="/img/right-lightgreen.png" alt="">
  </div>
</a>

<style scoped>
  #image-banner {
    width: 100%;
    height: 60vh;
  }

  #logo {
    margin-top: 20px;
    width: 40%;
    height: 20px;
    margin-left: 30px;
    font-size: 1.3em;
    font-family: var(--serif);
    font-weight: 400;
    text-decoration: underline;
    color: var(--black);
    margin-bottom: 10px;
  }

  #text {
    width: 80%;
    margin-left: 30px;
    font-size: 1.7em;
    font-family: var(--sans-serif);
    color: var(--darkgreen);
  }

  #next {
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--darkgreen);
    border-radius: 300px;
  }

  #next img {
    width: 80%;
    height: 80%;

    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>