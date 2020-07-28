var Bicicleta = require('../../models/bicicleta');
var request = require('request');
const server = require('../../bin/www');
const { head } = require('request');

describe('Bicicleta API', () => {
    describe('GET Bicicletas /', () => {
        it('Status 200', () => {
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(1,"rojo", "urbano",[4.723390, -74.053630]);
            Bicicleta.add(a);

            request.get('http://localhost:3000/api/bicicletas', function (error, response, body){
                expect(response.statusCode).toBe(200);

            });

        });

    });

    describe('POST Bicicletas /create', () => {
        it('Status 200', (done) => {

            var headers = {'content-type': 'application/json'};
            var aBici = {"id": 5, "color": "amarillo", "modelo": "todoterreno", "lat": 4.721000, "lng": -74.049760};

            request.post({
                'headers': headers,
                'url': 'http://localhost:3000/api/bicicletas/create',
                'body': JSON.stringify(aBici)
                        }, function (error, response, body){
                            expect(response.statusCode).toBe(200);
                            var sBici = Bicicleta.findById(5);
                            expect(sBici.color).toBe(aBici.color);
                            expect(sBici.modelo).toBe(aBici.modelo);
                            expect(sBici.ubicacion).toEqual([aBici.lat, aBici.lng]);
                            done();
            });
        });
    });

    describe('POST Bicicletas /update', () => {
        it('Status 200', (done2) => {

            var a = new Bicicleta(5,"rojo", "urbano",[4.723390, -74.053630]);
            var b = Object.assign({}, a);
            Bicicleta.add(b);


            var headers = {'content-type': 'application/json'};
            var aBici = {"id": 5, "color": "negra", "modelo": "montaña", "lat": 4.62, "lng": -74.08};

            request.post({
                'headers': headers,
                'url': 'http://localhost:3000/api/bicicletas/update',
                'body': JSON.stringify(aBici)
                        }, function (error, response, body){
                            expect(response.statusCode).toBe(200);
                            var sBici = Bicicleta.findById(5);
                            //Check color
                            expect(sBici.color).not.toBe(a.color);
                            expect(sBici.color).toBe(aBici.color);
                            //Check model
                            expect(sBici.modelo).not.toBe(a.modelo);
                            expect(sBici.modelo).toBe(aBici.modelo);
                            //Check ubicacion
                            expect(sBici.ubicacion).not.toBe(a.ubicacion);
                            expect(sBici.ubicacion).toEqual([aBici.lat, aBici.lng]);
                            
                            done2();
            });
        });
    });

    describe('DELETE Bicicletas /delete', () => {
        it('Status 200', () => {
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(2,"rojo", "urbano",[4.723390, -74.053630]);
            Bicicleta.add(a);

            var headers = {'content-type': 'application/json'};
            var aBici = {"id": 2};

            request.delete({
                'headers': headers,
                'url': 'http://localhost:3000/api/bicicletas/delete',
                'body': JSON.stringify(aBici)
                        }, function (error, response, body){
                expect(response.statusCode).toBe(204);
                expect(function() { Bicicleta.findById(2);}).toThrowError();
                expect(Bicicleta.allBicis.length).toBe(0);


            });

        });

    });

});