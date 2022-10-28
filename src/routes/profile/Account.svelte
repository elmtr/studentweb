<script>
  import HeaderBack from '../../kiui/HeaderBack.svelte'
  import {link} from 'svelte-spa-router'
</script>

<HeaderBack />

<div id="heading">
  Setarile contului
</div> 

<div id="sections">
  <a href="/profile/account/change-password" use:link>
    <div class="section">
        <img src="/img/location-lightgreen.png" alt="">
        <span>Schimbă parola</span>
    </div>
  </a>

  <a href="/profile/account/change-passcode" use:link>
    <div class="section">
        <img src="/img/location-lightgreen.png" alt="">
        <span>Schimbă PIN-ul</span>
    </div>
  </a>
</div> 

<style scoped>
  #heading {
    font-size: 1.8em;
		color: var(--black);
		margin-left: 25px;
		margin-top: 30px;
		margin-bottom: 20px;
		font-weight: 600;
		font-family: var(--sans-serif);
  }

  #sections {
    width: var(--width);
    margin: auto;
    margin-top: 20px;
    background: var(--white);
    border-radius: var(--border-radius);

    box-shadow: 0 1px 5px var(--gray);

    box-sizing: border-box;
    padding: 10px 20px;
  }

  .section {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;

    position: relative;
  }

  .section img {
    float: left;
    height: 20px;

    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .section span {
    font-family: var(--sans-serif);
    font-weight: 600;
    color: var(--black);

    margin: 0;
    position: absolute;
    top: 50%;
    left: 30px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
</style>