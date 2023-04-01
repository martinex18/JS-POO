//Importación de clases

import {cuentaCorriente} from './cuentaCorriente.js';

const cuentaLeonardo = new cuentaCorriente();

let saldo = cuentaLeonardo.verSaldo();
console.log(`El saldo es: ${saldo}`);

cuentaLeonardo.depositoCuenta(100);

cuentaLeonardo.retirarcuenta(50);