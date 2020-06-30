module.exports = (args) => {

    const menu = {

            'main' : `
                koszonj [command] <options>

                reggel ................. reggeli köszönést ír ki
                delben ................. délidőhöz illő köszönést ír ki
                este   ................. esti köszönést ír ki,
            
            `
    };
const subCmd = args[0] === 'help' ? args[1] : args[0];
console.log(menu[subCmd] || menu.main);

}