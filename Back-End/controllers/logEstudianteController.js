const sql = require('mssql');


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

sql.connect(config);

const loginUser = async (req, res) => {
    const { nombre_usuario, password } = req.body;

    // Validar campos vacios
    if (!nombre_usuario || !password) {
        return res.json({ success: false, message: 'complete todos los campos' });
    }

    // Consulta para obtener el usuario y contraseña

    
    const result = await sql.query`
    SELECT id_usuario, rol, password_hash FROM usuarios
    WHERE nombre_usuario = ${nombre_usuario}`;//AND password_hash = ${password}`;
    
    const esPasswordCorrecto = await bcrypt.compare(password, result.recordset[0]["password_hash"]);

    if (result.recordset.length > 0) {
        const { id_usuario, rol } = result.recordset[0];

        if (rol === 2) {
        res.json({ success: true, message: 'Inicio de sesión exitoso', user_id: id_usuario });
        } else {
        res.json({ success: false, message: 'Usuario no autorizado' });
        }
    } else {
        res.json({ success: false, message: 'Credenciales incorrectas' });
    }
};


module.exports = { loginUser };