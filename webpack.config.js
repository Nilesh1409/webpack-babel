const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.join(__dirname, "build"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["css-loader","style-loader"]
            },
            {
                test : /\.js$/,
                use : ["babel-loader"]
            }
        ]
    }
}