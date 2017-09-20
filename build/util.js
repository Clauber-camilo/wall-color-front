const fs = require('fs')


/**
 * Read all directories in the path and
 * return an object to merge in with webpack alias
 * @param  {string} path
 * @return {Object}
 */
module.exports.fetchModules = modulesPath => {
    let dirs = fs.readdirSync(modulesPath)
      , modulesAlias = {}

    for (let dir in dirs) {
        try {
            let jsFolder = path.join(modulesPath, dirs[dir])
            fs.accessSync(jsFolder, fs.F_OK)
            modulesAlias[`@${dirs[dir]}`] = jsFolder
        } catch (e) {}
    }
}
