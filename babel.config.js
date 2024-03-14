module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: '18',
          esmodules: true,
          ie: '11'
        }
      }
    ],
    '@babel/preset-react'
  ],
  sourceType: 'unambiguous',
  plugins: [
    '@babel/plugin-transform-object-rest-spread',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
  ],
  env: {
    playwright: {
      plugins: ['istanbul']
    }
  }
}
