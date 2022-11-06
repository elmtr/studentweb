<script>
  import {link} from 'svelte-spa-router'
  import NavBar from '../../kiui/NavBar.svelte'
  import {info} from '../../stores'
  let profile = $info
</script>

<main>
  {#if profile}
    <div id="heading">
      {profile.firstName} {profile.lastName}
    </div> 

    <!-- <div id="bonus">
      <div id="bonus-title">Beneficiile mele</div>
    </div>  -->

    <div id="sections">
      <a href="/profile/account" use:link>
        <div class="section">
            <img src="/img/bullet.svg" alt="">
            <span>Contul meu </span>
        </div>
      </a>
    </div> 

    <a href="/profile/logout" use:link>
      <div id="logout">
        <img src="/img/logout.svg" alt="">
        <span>Deconectare</span>
      </div>
    </a>
  {/if}
  <NavBar location="profile" />
</main>

<style scoped>
  #heading {
    font-size: 1.5em;
		color: var(--black);
		margin-left: 25px;
		margin-top: 30px;
		margin-bottom: 20px;
		font-weight: 600;
		font-family: var(--sans-serif);
  }

  /* #bonus {
    background: var(--white);
    width: var(--width);
    height: 130px;

    border-radius: var(--border-radius);
    box-shadow: 0 1px 5px var(--gray);

    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 20px;

    margin: auto;
  }

  #bonus-title {
    font-size: 1.6em;
    font-weight: 600;
    font-family: var(--sans-serif);
    color: var(--black);
  } */

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
    filter: var(--lightgreen-filter);

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

  #logout {
    background: var(--white);
    width: var(--width);
    margin: auto;
    height: 50px;

    margin-top: 20px;

    border-radius: var(--border-radius);
    box-shadow: 0 1px 5px var(--gray);

    position: relative;
  }

  #logout img {
    height: 20px;
    filter: var(--red-filter);

    position: absolute;
    top: 50%;
    left: 20px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  #logout span {
    position: absolute;
    top: 50%;
    left: 55px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    font-family: var(--sans-serif);
    color: var(--black);
    font-weight: 600;
  }
</style>