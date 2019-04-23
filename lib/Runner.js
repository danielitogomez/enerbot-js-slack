const modulesConf = require('./ModulesConf');
const Loader = require('./Loader');
const run = async(text) => {
    let response;
    for(let mdl of modulesConf) {
        if(mdl.regex.test(text)) {
            if(!mdl['dir']) {
                response = mdl.text;
                break;
            }
            else {
                let fn = Loader.getFunction(mdl.dir, mdl.functionName);
                if(fn) {
                    response = await fn.apply(null, [text]);
                    break;
                } 
            }                      
        }
    }
    return response;
}

module.exports = {run}