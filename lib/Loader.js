const modulesLoaded = [];
const getFunction = (dir, functionName) => {
    for(let mdl of modulesLoaded) {
        if(dir === mdl.dir) {
            let fn = mdl.object[functionName];
            if (typeof fn === "function") {
                return fn;
            }
        }
    }
    let m;
    try {
        m = require(dir);
    } catch (e) {
        console.log("MODULE NOT FOUND");
        return;
    }
    const newModule = {
        dir: dir,
        object: m
    }
    let fn = newModule.object[functionName]
    if (typeof fn === "function") {
        modulesLoaded.push(newModule)
        return fn;
    }
}

module.exports = {getFunction}