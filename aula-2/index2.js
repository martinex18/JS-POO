// Definición de clases

class Cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente{
    numero;
    saldo;
    agencia;

    constructor(){
        this.numero = " ";
        this.saldo = 0;
        this.agencia = " ";
    }

    depositoCuenta(valor){
        this.saldo += valor;
    }

    retirarcuenta(valor){
        this.saldo -= valor;
    }
}

cuentaLeonardo = new cuentaCorriente();

cuentaLeonardo.depositoCuenta(100);
console.log(cuentaLeonardo);

cuentaLeonardo.retirarcuenta(50);
console.log(cuentaLeonardo);
