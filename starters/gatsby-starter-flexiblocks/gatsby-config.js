module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: true,
        colorMode: true
      }
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'Mumara',
    name: 'Mumara',
    description: 'Mumara is collection of SaaS applications and customer engagement tools to fuel your multi-channel marketing strategy.'
  }
}
