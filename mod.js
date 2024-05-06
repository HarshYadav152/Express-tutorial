console.log("This is mod.js");

function avarage(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
module.exports = {
    avg:avarage,
    name:"harsh",
    repo :"GitHub",
};

module.exports.name = "hARSH"; // ye apne aap main ek object  hai