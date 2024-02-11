const perguntas = [
    {
      pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2 // "const"
    },
    {
      pergunta: "Qual função é utilizada para imprimir mensagens no console?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2 // "console.log()"
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1 // "==="
    },
    {
      pergunta: "Qual método é utilizado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0 // "pop()"
    },
    {
      pergunta: "Qual método é utilizado para adicionar elementos ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "concat()",
        "append()",
      ],
      correta: 0 // "push()"
    },
    {
      pergunta: "Qual símbolo é utilizado para comentários de linha única em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "<!-- -->",
      ],
      correta: 0 // "//"
    },
    {
      pergunta: "Qual é o operador de negação lógica em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 2 // "!"
    },
    {
      pergunta: "Qual método é utilizado para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toFloat()",
        "convertToNumber()",
      ],
      correta: 0 // "parseInt()"
    },
    {
      pergunta: "Qual função é utilizada para obter o comprimento de uma string em JavaScript?",
      respostas: [
        "length()",
        "size()",
        "length",
      ],
      correta: 2 // "length"
    },
    {
      pergunta: "Qual é o resultado da expressão '5' + 3 em JavaScript?",
      respostas: [
        "8",
        "53",
        "5+3",
      ],
      correta: 1 // "53"
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true or false
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas // contador
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
  