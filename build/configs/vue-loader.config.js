module.exports = {
    postcss: [
        require('autoprefixer')({
            browsers: ['last 4 versions', 'IE 11']
        })
    ]
}
