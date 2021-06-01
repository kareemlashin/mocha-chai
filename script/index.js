const axios = require('axios')
const alwaysTrue=()=>true;
const alwaysFalse=()=>false;
const Users=()=> {

    return  axios.get('https://jsonplaceholder.typicode.com/todos/1').then((value) => {
        return value
    }).catch((value) => {
        return value
    })
  
}
const add = (params1,params2) => {
    return params1+params2
}


const sub = (params1,params2) => {
    return params1-params2
}


const mul = (params1,params2) => {
    return params1*params2
}


const div = (params1,params2) => {
    return params1/params2
}

var fnError = function () { throw new Error("Error is Error"); }

Users();
module.exports={alwaysTrue,alwaysFalse,Users,fnError,add,sub,mul,div}