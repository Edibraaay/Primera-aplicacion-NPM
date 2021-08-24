const sumar = require("../index");
const assert = require("assert");


// Asserts = afirmacion

describe("Probar la suma de dos numeros",()=>{
    //Afirmamos que 5+7=es 12

    // Afirmamos que 5+7 != 57

    it("5+7=12", ()=>{
        assert.equal(12,sumar(5,7));
    });

    it("5+7!=57", ()=>{
        assert.notEqual(57, sumar(5,7));
    });
});

