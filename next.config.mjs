const path =await import('path')

 export default {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join('./', 'styles')],
    includePaths: [path.join('./', 'pages')],
    includePaths: [path.join('./', 'components')],
    silenceDeprecations: ['legacy-js-api'],
  },
}