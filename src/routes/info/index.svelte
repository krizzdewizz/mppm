<script lang="ts">
  import BackButton from '$components/BackButton.svelte';
  import packageInfo from '../../../package.json';

  let version = packageInfo.version;
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons>
      <BackButton/>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div class="content">
    <div class="title">
      <h2>Musician's Practicing Player</h2>
      <img src="assets/icon/favicon.png">
    </div>

    <table class="footer">
      <tr>
        <td>Author:</td>
        <td><a href="mailto:christian@o3tt3rli.com">christian@o3tt3rli.com</a></td>
      </tr>
      <tr>
        <td>Version:</td>
        <td>{version}</td>
      </tr>
    </table>
  </div>
</ion-content>

<style lang="scss">
  .title {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .footer {
    margin-top: 5em;
  }

  .content {
    padding: 20px;
  }

  td {
    padding: 5px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }

</style>
