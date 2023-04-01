export class cuentaCorriente{
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