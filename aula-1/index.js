class Cliente{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
    rutCliente;
}

const cliente1 =  new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "5445545";
cliente1.numeroCuenta = "21843";
cliente1.saldoCuenta = 3000;

console.log(cliente1);

const cliente2 = new Cliente();
cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "1053249654";
cliente2.numeroCuenta = "12542369";
cliente2.saldoCuenta = 1000;

console.log(cliente2);

const cliente3 = new Cliente();
cliente3.nombreCliente = "Maria";
cliente3.dniCliente = "154662";
cliente3.numeroCuenta = "20369";
cliente3.saldoCuenta = 500;

console.log(cliente3);