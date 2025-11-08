// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-studio'
  ],
    studio: {

    route: '/_studio',

    repository: {
      provider: 'github', // only GitHub is currently supported
      owner: 'narr07', // your GitHub username or organization
      repo: 'tes-studio', // your repository name
      branch: 'master', // the branch to commit to (default: main)
      rootDir: '' // optional: if your Nuxt app is in a subdirectory (default: '')
    }
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
})
