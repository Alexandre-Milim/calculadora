function inserir(num) {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML += num; //se eu tirar o "+" só vai dar para escrver um numero so
  }

  function limpar() {
    var resultado = document.getElementById('resultado'); 
    resultado.innerHTML = ''; 
  }
  function tirar() {
    var resultado = document.getElementById('resultado'); 
    resultado.innerHTML = resultado.innerHTML.slice(0, -1); 
    // o slice aqui esta servindo para remover um caractere, o zero est falando que não é pra 
    //remover  nenhuma casa casa da esquerda e sim comçar da direita apagando un numero só
  }

  function calcular() {
    var resultado = document.getElementById('resultado'); 
    var expressao = resultado.innerHTML; 
    if (expressao) {
      resultado.innerHTML = eval(expressao); // o eval aqui esta dando o resultado da operação
    } else {
    }
  }