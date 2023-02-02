const shell = require('shelljs')
const { detect } = require('detect-package-manager')


const installerCommands = {
        'npm': 'npm install',
        'pnpm': 'pnpm install',
        'yarn': 'yarn add',
}


module.exports = async function(name) {
        try {
                return require(name)
        } catch {
                const installer = await detect()
                const installerCommand = installerCommands[installer] || installerCommands['npm']
                
                shell.exec(installerComamnd + ' ' + name)
                
                return require(name)
        }
}
