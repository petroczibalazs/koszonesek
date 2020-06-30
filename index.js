
module.exports = () => {

 const args = process.argv.slice(2);

    
    switch(args[1]){

        case 'reggel':
            require('./cmds/reggel')(args);
            break;
        case 'delben':
            require('./cmds/delben')(args);
            break;
        case 'este':
            require('./cmds/este')(args);
            break;
        default:
            require('./cmds/help')(args);
    }

};