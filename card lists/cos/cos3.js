var fixType = function(x){
    var s = x.Type;
    var re = new RegExp(' ?[:-] ');
    var types = s.split(re);
    var descriptors;
    if(types[0] === "Adventure" || types[0] === "Character"){
        descriptors = types.splice(1);
        x.type = types;
        if(descriptors.length) x.descriptors = descriptors;
        return x;
    }
    var kind = types[0];
    var type = types[1];
    descriptors = types.splice(2);
    if(kind[1]==='a')
        x.cost = "?F";
    else 
        x.cost = "?" + kind[0];

    x.type = type;
    if(descriptors.length) x.descriptors = descriptors;
    return x;
}
module.exports = fixType;
