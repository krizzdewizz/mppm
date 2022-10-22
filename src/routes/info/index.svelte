<script lang="ts">
  import HistoryBack from '$components/HistoryBack.svelte';
  import packageInfo from '../../../package.json';

  let version = packageInfo.version;
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons>
      <HistoryBack/>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div class="content">
    <h2>Musician's Practicing Player</h2>

    <table>
      <tr>
        <td>Version:</td>
        <td>{version}</td>
      </tr>
      <tr>
        <td>Author:</td>
        <td><a href="mailto:christian@o3tt3rli.com">christian@o3tt3rli.com</a></td>
      </tr>
    </table>

    <img src="assets/icon/favicon.png">
  </div>
</ion-content>

<style lang="scss">
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
