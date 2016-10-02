//entry tells webpack where to start processing your code.
//output is an object where there are two properties
//the path to the folder (dirname gives the path to the current folder)
//from that folder you can specify the filename
//resolve takes an extensions array with a list of file extensions we want to process
//telling the babel-loader to take our files, parse them through react
//get the output and then run them through es2015 as well
//it knows what files to get based on the regex looking for .jsx extensions
//then it's also going to make sure to exclude two files.
//alias allows you to have shorter pathnames in the component files.
module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Greeter: 'public/components/Greeter.jsx',
      GreeterMessage: 'public/components/GreeterMessage.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx'
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
  }
};
