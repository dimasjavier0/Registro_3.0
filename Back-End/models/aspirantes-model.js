const aspirante_DTO = require('../DTOs/aspiranteDTO');

db = require('../conections/database');

var querys={
    aspirante:{
        select:'',
        insert:[`EXEC [dbo].[agregar_aspirante]`,11],
        update:'',
        delete:'',
    }
};

/**clase que se comunica con la base de datos y sirve como aspirantesDAO*/
class AspirantesModel{
    
    constructor(){}

    async createAspirante(aspiranteJson){//puede ser insertAspirante
        try {
            var aspirante = aspirante_DTO.verify(aspiranteJson); 
            
            console.log(`mostrando Aspirante`,aspirante.toString());

            if (aspirante != null){//quiere decir que si es valido. lo guarda en la base de datos
                await db.connect();
                
                /** */
                let result = await db.query(
                    `${querys.aspirante.insert[0]} '${aspirante.getNumero_identidad()}' ,'${aspirante.getPrimerNombre()}' ,'${aspirante.getSegundoNombre()}' ,'${aspirante.getPrimerApellido()}' ,'${aspirante.getSegundoApellido()}' 
                    ,'${aspirante.getTelefono()}' ,'${aspirante.getCorreo()}' ,${aspirante.getCarreraPrincipal()} ,${aspirante.getCarreraSecundaria()} ,${aspirante.getFoto_certificado_secundaria()} 
                    ,${aspirante.getId_centro()}
                    `
                );// 
                console.log(`respuesta de la base:`,result);
                //let result = db.query(`select * from aspirantes where aspirantes.id_persona = '${aspirante.getNumero_identidad()};' `);
                await db.close();
                
                return result;   
            }else{
                return result;
            }
        } catch (error) {
            return error.originalError.message;
        }
    }

    async getAllAspirantes(){//(nombreTabla) {    
        try {
           
            const tableNamePlural = this.validator.paramToPlurar(nombreTabla);
            console.warn('Valores Recibidos en el modelo:',nombreTabla);
            console.log(`======== tabla Para Traer:'${tableNamePlural} ========`);
    
            if(tableNamePlural){
                 /**Conectando a base de datos */
                await db.connect();
    
                /**definiendo la consulta una consulta */
                const query = `SELECT * FROM '${tableNamePlural}`;
    
                console.log(`- - - consulta Enviada:'${query} -' - - `);
                const result = await db.query(query);
    
                await db.close();
                return result;
            }else{
                return 'no se recibio un nombre de tabla';
            }
    
            /**guardando resultado de la consulta. se envia el query. */
            //const result = await db.query(query);
            
        
            /**retorna el elemento */
            //return result;
        } catch (error) {
            console.error(':::: ERROR :::: En Modelo getAllTables');
            return `:::: ERROR :::: En Modelo getAllTables`;
            //throw error;
        }
    }
    updateAspirante(){}
    deleteAspirante(){}

}

module.exports = new AspirantesModel();