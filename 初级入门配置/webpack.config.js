const path = require('path')
module.exports={
    entry: {
        entry: './src/js/entry.js',
        entry1: './src/js/entry1.js',
        entry2: './src/js/entry2.js'

    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    },
    mode: 'development'
}