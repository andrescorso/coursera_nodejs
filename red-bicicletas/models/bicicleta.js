var Bicicleta = function (id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return "id: " + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}



Bicicleta.findById = function(aBiciID){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciID);
    if (aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciID}`)
}

Bicicleta.removeById = function(aBiciID){
    Bicicleta.findById(aBiciID);
    for (var i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciID){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }

}
/*
var a = new Bicicleta(1,"rojo", "urbano",[4.723390, -74.053630])
var b = new Bicicleta(2,"negra", "todoterreno",[4.721000,-74.049760])
Bicicleta.add(a);
Bicicleta.add(b);
*/
module.exports = Bicicleta;