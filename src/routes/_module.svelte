<script lang="ts">
  import { mppmKey } from '$directives/key';
</script>

<ion-app use:mppmKey>
  <div class="ion-page" id="main">
    <slot/>
  </div>
</ion-app>


