//Importación de clases

import {Cliente} from './cliente.js';
import {cuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = "Leonardo";
cliente.dniCliente = "247848";
cliente.rutCliente = "21545";

const cuentaLeonardo = new cuentaCorriente();
cuentaLeonardo.numero = "1";
cuentaLeonardo.agencia = "001";
cuentaLeonardo.cliente = cliente;


let saldo = cuentaLeonardo.verSaldo();

saldo = cuentaLeonardo.depositoCuenta(150);
console.log(`El saldo actual (cuentaLeonardo): ${saldo}`);

const cliente2 = new Cliente();
cliente2.nombreCliente = "Maria";
cliente2.dniCliente = "254584";
cliente2.rutCliente = "78545";

const cuentaMaria = new cuentaCorriente();
cuentaMaria.numero = "2";
cuentaMaria.agencia = "002";
cuentaMaria.cliente = cliente2;

if (cuentaMaria.cliente)
    console.log(cuentaMaria.cliente);
else
    console.log(cuentaMaria);

/*
cuentaLeonardo.trasnsferirParaCuenta(100, cuentaMaria);
console.log(cuentaMaria);

const saldoMaria = cuentaMaria.verSaldo();
console.log(`El saldo actual (cuentaMaria): ${saldoMaria}`);

let saldoLeonardo = cuentaLeonardo.verSaldo();
console.log(`El saldo actual (cuentaLeonardo): ${saldoLeonardo}`); */

