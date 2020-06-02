const este = require('./cmds/este');
const del = require('./cmds/delben');
const reggel = require('./cmds/reggel');

const minimist = require('minimist');
const PATH  = require('path');
console.log(PATH);

module.exports = () => {

 const args = minimist(process.argv.slice(2));
 let cmd = args._[0] || 'help';

if(args.h || args.help)     { cmd = 'help' }
if(args.v || args.version)  { cmd = 'version'}
    
    switch(cmd){

        case 'reggel':
            require('./cmds/reggel')(args);
            break;
        case 'delben':
            require('/cmds/del')(args);
            break;
        case 'este':
            require('./cmds/este')(args);
        case 'help':
            require('./cmds/help')(args);
            break;
        case 'version':
            require('./cmds/version')(args);
            break;
        default:
            require('/cmds/help')(args);
    }

};