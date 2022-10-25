import sveltePreprocess from 'svelte-preprocess';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const filePath = dirname(fileURLToPath(import.meta.url)).replace(/\\/g, '/');
const sassPath = `${filePath}/src/scss`;

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    // sourceMap: true,
    scss: {
      prependData: `@import '${sassPath}/global.scss';`,
    }
  })
}
