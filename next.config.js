const path = require('path')
const glob = require('glob')

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed', // These options are from node-sass: https://github.com/sass/node-sass
                includePaths: ['styles', 'node_modules']
                  .map(d => path.join(__dirname, d))
                  .map(g => glob.sync(g))
                  .reduce((a, c) => a.concat(c), []),
              },
            },
          },
        ],
      },
    )
    return config
  },
  plugins: ['@babel/plugin-syntax-dynamic-import'],
  // exportPathMap: function(defaultPathMap) {
  //   return {
  //     '/': { page: '/' },
  //     '/landing': { page: '/landing' },
  //     '/generic': { page: '/generic' },
  //     '/landing': { page: '/landing' }
  //   }
  // }
}
