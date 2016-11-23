var webpack = require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
      Navigation: 'app/components/Navigation.jsx',
      Prueba: 'app/components/Prueba.jsx',
      Entreno: 'app/components/Entreno.jsx',
      Controls: 'app/components/Controls.jsx',
      Resume :'app/components/Resume.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap : 'app/api/openWeatherMap.jsx',
      Checked : 'app/components/Checked.jsx',
      Clickme: 'app/components/Clickme.jsx'
  },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
