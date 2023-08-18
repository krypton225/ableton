const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        marin: "./src/js/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    },
    resolve: {
        extensions: [".js"]
    }
};