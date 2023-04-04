//Importación de clases

import {Cliente} from './cliente.js';
import {cuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente("Leonardo", "247848", "21545");
const cuentaLeonardo = new cuentaCorriente(cliente, "1", "001");

let saldo = cuentaLeonardo.verSaldo();
saldo = cuentaLeonardo.depositoCuenta(150);

const cliente2 = new Cliente("Maria", "254584", "78545");
const cuentaMaria = new cuentaCorriente(cliente2, "2", "002");

console.log(cuentaCorriente.cantidadCuentas);

