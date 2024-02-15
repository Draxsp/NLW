const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "variable myVar = 10;",
        "let myVar = 10;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dessas não é uma estrutura de controle de fluxo em JavaScript?",
      respostas: [
        "if...else",
        "for...loop",
        "switch...case"
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um novo elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "concat()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do código `console.log(typeof([]));`?",
      respostas: [
        "'object'",
        "'array'",
        "'list'"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Como você acessa o terceiro elemento em um array chamado `myArray`?",
      respostas: [
        "myArray[3];",
        "myArray(3);",
        "myArray[2];"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função de `console.log()` em JavaScript?",
      respostas: [
        "Exibe um diálogo de alerta",
        "Registra mensagens no console do navegador",
        "Atualiza o DOM da página"
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um tipo de dados primitivo em JavaScript?",
      respostas: [
        "object",
        "function",
        "string"
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
