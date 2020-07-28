var Bicicleta = require('../../models/bicicleta');

beforeEach(() => {
    Bicicleta.allBicis = [];
});


describe('Bicicleta.allBicis', () => {
    it('comienza vacía', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });

});

describe('Bicicleta.add', () => {
    it('agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var a = new Bicicleta(1,"rojo", "urbano",[4.723390, -74.053630]);
        Bicicleta.add(a);
        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe('Find by id', () => {
    it('Debe devolver la bici con id 1', () =>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var b = new Bicicleta(1,"negra", "todoterreno",[4.721000,-74.049760])
        Bicicleta.add(b);
        var a = new Bicicleta(2,"rojo", "urbano",[4.723390, -74.053630]);
        Bicicleta.add(a);
        expect(Bicicleta.allBicis.length).toBe(2);

        expect(Bicicleta.findById(1)).toEqual(b);


    });

});
describe('Remove by id', () => {
    it('Debe devolver la bici con id 1', () =>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var b = new Bicicleta(1,"negra", "todoterreno",[4.721000,-74.049760])
        Bicicleta.add(b);
        expect(Bicicleta.allBicis.length).toBe(1);
        Bicicleta.removeById(1);
        expect(function() { Bicicleta.findById(1);}).toThrowError("No existe una bicicleta con el id 1");

        expect(Bicicleta.allBicis.length).toBe(0);

        


    });

});