//entry tells webpack where to start processing your code.
//output is an object where there are two properties
//the path to the folder (dirname gives the path to the current folder)
//from that folder you can specify the filename
//resolve takes an extensions array with a list of file extensions we want to process
module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
