
require('dotenv').config();

/**
 * Puerto
 */
process.env.PORT = process.env.PORT || 3000;


/**
 * Entorno
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


/**
 * Vencimiento del Token
 * 60 seg
 * 60 min
 * 24 horas
 * 30 dias
 */
process.env.CADUCIDAD_TOKEN = '48h';


/**
 * SEED de autentication
 */
process.env.SEED = process.env.SEED  || 'este-es-el-seed-desarrollo';

/**
 * Base de datos
 */
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


/**
 * Google Client ID
 */
process.env.CLIENT_ID = process.env.CLIENT_ID || '634199726139-d26a7kmaiicr0kloe7sf936ajg3uu8ga.apps.googleusercontent.com';