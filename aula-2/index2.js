// Definición de clases

class Cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente{
    numero;
    #saldo;
    agencia;

    constructor(){
        this.numero = " ";
        this.#saldo = 0;
        this.agencia = " ";
    }

    depositoCuenta(valor){
        if (valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarcuenta(valor){
        if (valor <= this.#saldo){
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }
}

cuentaLeonardo = new cuentaCorriente();

let saldo = cuentaLeonardo.verSaldo();
console.log(`El saldo es: ${saldo}`);

cuentaLeonardo.depositoCuenta(100);

cuentaLeonardo.retirarcuenta(50);
