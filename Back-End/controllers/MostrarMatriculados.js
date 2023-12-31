const mssql = require('mssql');

const config = {
  user: 'Grupo',
  password: '1234',
  server: 'localhost',
  database: 'Registro2',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    
  },
};
class DocenteController {
  static async obtenerClasesAsignadas(nombreUsuario) {
    try {
      const pool = await mssql.connect(config);
      const result = await pool
        .request()
        .input('nombreUsuario', mssql.Int, nombreUsuario) // Cambiado de 'idDocente' a 'nombreUsuario'
        .query(`
          SELECT asignaturas.id_asignatura, asignaturas.nombre_asig, s.id_seccion, s.hora_inicio
          FROM asignaturas
          JOIN secciones s ON asignaturas.id_asignatura = s.id_asignatura
          JOIN docentes d ON s.id_docente = d.num_empleado
          WHERE d.num_empleado = @nombreUsuario


        `);

      return result.recordset;
    } catch (error) {
      console.error('Error al obtener clases asignadas:', error);
      throw error;
    } finally {
      await mssql.close();
    }
  }
}


module.exports = DocenteController;
