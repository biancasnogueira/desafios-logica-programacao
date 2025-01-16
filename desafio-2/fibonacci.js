function gerarFibonacci(limite) {
    let fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] < limite) {
        let proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(proximoNumero);
    }
    return fibonacci;
}

function verificarFibonacci() {
    let numero = document.getElementById('numero').value;
    numero = parseInt(numero);

    if (isNaN(numero)) {
        document.getElementById('resultado').textContent = "Por favor, insira um número válido!";
        return;
    }

    let fibonacciSequencia = gerarFibonacci(numero);

    if (fibonacciSequencia.includes(numero)) {
        document.getElementById('resultado').textContent = `O número ${numero} pertence à sequência de Fibonacci!`;
    } else {
        document.getElementById('resultado').textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}
