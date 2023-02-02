const { detect } = require('detect-package-manager')
const sh = require('shelljs')


const installerCommands = {
        'npm': 'npm install',
        'pnpm': 'pnpm install',
        'yarn': 'yarn add',
}


module.exports = function(name) {
        try {
                return require(name)
        } catch {
                detect()
                        .then(installer => {
                                const installerCommand = installerCommands[installer] || installerCommands['npm']
                                shell.exec(installerCommand + ' ' + name)
                        })
        }
}
