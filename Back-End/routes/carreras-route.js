var express = require('express');
//var aspirantesModel = require('../models/aspirantes-model');
//const { Result } = require('postcss');
var carrerasModel = require('../models/carreras-model');



var router = express.Router(); // en lugar de app usar router.

router.get('/',async (req,res)=>{
    let msj = '';
    listaCarrerasJson= await carrerasModel.getAllCarreras();
    if(listaCarrerasJson){
        msj='';     
    }else{

    }

});

//evaluarAspirantes();
/**y se exporta todo el objeto completo.*/
module.exports = router;