import { Cliente } from "./cliente.js";
 export class cuentaCorriente{
    #cliente;
    numero;
    #saldo;
    agencia;

    set cliente(valor){
        if (valor instanceof Cliente){ //Si valor es una instancia de la clase cliente
            this.#cliente = valor;
        }
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(){
        this.#cliente = null;
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

    trasnsferirParaCuenta(valor, cuentaDestino){
        this.retirarcuenta(valor);
        cuentaDestino.depositoCuenta(valor);
    }
}