class Cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente{
    numero;
    saldo;
    agencia;

    depositoCuenta(valor){
        this.saldo += valor;
    }
}

const cliente1 =  new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "5445545";
cliente1.rutCliente = "1234";

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numero = "21843";
cuentaCorriente1.saldo = 3000;
cuentaCorriente1.agencia = 1001;

console.log(cliente1);
console.log(cuentaCorriente1);

const cliente2 =  new Cliente();
cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "1053249654";
cliente2.rutCliente = "2548";

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero = "12542369";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia = 1002;

console.log(cliente2);
console.log(cuentaCorriente2);

const cliente3 =  new Cliente();
cliente3.nombreCliente = "Maria";
cliente3.dniCliente = "154662";
cliente3.rutCliente = "59877";

const cuentaCorriente3 = new cuentaCorriente();
cuentaCorriente3.numero = "20369";
cuentaCorriente3.saldo = 500;
cuentaCorriente3.agencia = 1003;

console.log(cliente3);
console.log(cuentaCorriente3);

console.log(cuentaCorriente3.saldo);
cuentaCorriente3.depositoCuenta(200);
console.log(cuentaCorriente3.saldo);