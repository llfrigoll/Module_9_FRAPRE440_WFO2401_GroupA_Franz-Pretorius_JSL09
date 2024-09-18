// import {defineConfig} from 'vite'


// export default defineConfig({
// 	plugins: []	
// })

// vite.config.js

export default {
	build: {
	  target: 'es2019' // or 'es2018', 'es2017', etc. as long as it does not include top-level await
	}
  }