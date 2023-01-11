## Curso de
# WebSockets: implemente comunicações em tempo real com Socket.IO e MongoDB

<img src="/logos/socket.io.png" alt="Logo Socket.IO" widht="100" height="70"> <img src="/logos/JavaScript.png" alt="Logo JavaScript" widht="70" height="70"> <img src="/logos/html5.png" alt="Logo HTML" widht="70" height="70"> <img src="/logos/NodeJS.png" alt="Logo NodeJS" widht="90" height="70"> <img src="/logos/mongoDB-atlas.png" alt="Logo MongoDB-atlas" widht="100" height="70"> <img src="/logos/VS Code.png" alt="Logo VS Code" widht="70" height="70">

-------

## Links úteis:
+ [Protocolo Web Sockets > biblioteca Socket.IO](https://socket.io/pt-br/docs/v4/server-api/#o-que-o-socketio-n%C3%A3o-%C3%A9) permite que trabalhemos com o protocolo WebSockets de forma mais facilitada.
+ [Integrating Socket.IO](https://socket.io/pt-br/get-started/chat) faz a conexão do front-end com o servidor.
+ [A documentação na MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API) fornece mais detalhes sobre o protocolo e como você pode escrever aplicações WebSockets utilizando JavaScript puro.
+ [Socket.IO](https://socket.io/pt-br/docs/v4/) é uma biblioteca que permite baixa-latência, bidirecional e baseado em eventos de comunicação entre cliente e um servidor.
+ [Documentação do JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mostra quais tipos de dados podem ser serializados.
+ [A classe URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), pode ser instanciada para criar um objeto que conterá informações da URL.
+ [Seção Rooms do Socket.IO](https://socket.io/docs/v4/rooms/).
+ [A documentação do MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) mostra como configurar um projeto com MongoDB Atlas, utilizando MongoDB Node Driver.
+ [Seção "Quick Start"](https://www.mongodb.com/docs/drivers/node/current/quick-start/).
+ [Seção CRUD Operations](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/) explica os métodos findOne, insertOne, deleteOne, etc..., do mongo DB.
+ [Seção Access Data From a Cursor da documentação do mongo DB](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/cursor/).

## Introduction
This training is part of [Training Node.js with Express](https://cursos.alura.com.br/formacao-node-js-express) and addresses the WebSocket protocol, where we will learn to implement communications and store data in realtime with Socket.IO and MongoDB.
Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

## Objectives of this training:
+ Implementar comunicações em tempo real com o protocolo WebSockets;
+ Utilizar a biblioteca Socket.IO para maior facilidade de desenvolvimento;
+ Integrar o Front-end e o Back-end do projeto;
+ Explorar diferentes formas de comunicação entre cliente e servidor, utilizando recursos como as Salas e o Reconhecimento do Socket.IO;
+ Integrar o projeto com o MongoDB, um banco de dados NoSQL; e
+ Avançar nas funcionalidades do projeto;

## Tópicos abordados:
1. Criando o SeSoDocs
2. Trabalhando com Socket.IO
3. Avançando na comunicação
4. Utilizando o MongoDB
5. Avançando o SeSoDocs

## 1. Criando o SeSoDocs
**Habilidades desenvolvidas neste tópico:**
+ Diferenciar o protocolo HTTP do WebSockets:
  + O protocolo HTTP trabalha com o modelo requisição-resposta, que não é adequado para aplicações quando queremos criar uma comunicação bidirecional e em tempo real entre cliente e servidor. Para esses casos, utilizamos o protocolo WebSockets.
+ Criar um servidor **Socket.IO** com Express e conectar um cliente:
  + Você pode sempre consultar o passo a passo da documentação, na **seção Get Started**.
+ Escutar o evento de conexão do cliente:
  + Utilizamos o **método io.on()**, que recebe como primeiro parâmetro o nome do evento (por exemplo, “connection”) e como segundo parâmetro uma função callback, que será executada assim que o evento for escutado.

## 2. Trabalhando com Socket.IO
**Habilidades desenvolvidas neste tópico:**
+ Emitir seu primeiro evento a partir do cliente:
  + No front-end, utilizamos socket.emit() para emitir o evento "texto_editor" para o servidor, junto com o texto que foi digitado.
+ Emitir um evento para vários clientes a partir do servidor:
  + No back-end, com io.emit(), podemos emitir um evento para todos os clientes ou, com socket.broadcast.emit(), podemos emitir para todos os clientes, exceto o cliente que está emitindo o evento.
+ Organizar melhor os arquivos por responsabilidade:
  + No front-end, deixamos um arquivo responsável por lidar com as manipulações do HTML (documento.js) e outro responsável para lidar com as funções do Socket.IO (socket-front-documento.js).

## 3. Avançando na comunicação
**Habilidades desenvolvidas neste tópico:**
+ Agrupar clientes em salas do Socket.IO:
  + Utilizamos o método join() (do inglês “juntar”) para isso, passando como parâmetro o nome da sala na qual queremos colocar o cliente. No nosso caso, os nomes das salas eram os nomes dos documentos.
+ Emitir eventos para uma sala específica:
  + Para isso, utilizamos o método to() (do inglês “para”), passando como parâmetro o nome da sala para a qual queremos emitir o evento.
+ Enviar um dado de volta para o cliente com Reconhecimento:
  + Utilizamos esse recurso quando o cliente emite um evento e espera receber dados de volta do servidor, imitando o modelo de requisição-resposta do HTTP. Para tal, passamos uma função como último parâmetro de emit(), a obtemos na função callback do lado do servidor e a executamos, passando como parâmetro o dado que interessa ao cliente.

## 4. Utilizando o MongoDB
**Habilidades desenvolvidas neste tópico:**
+ Criar um banco de dados e conectá-lo com o Alura Docs:
  * Criamos um cluster, um banco de dados e uma coleção no MongoDB Atlas. Em seguida, utilizamos o driver do Node.js para conectar o projeto ao banco de dados. Assim, conseguiremos fazer o projeto interagir com o banco de dados para persistir as informações dos documentos.
+ Obter dados do banco de dados:
  * Utilizamos o método findOne (do inglês “encontrar um”) das coleções do MongoDB para buscar por um documento específico. No nosso caso, passamos um objeto com a propriedade nome, e seu valor é o nome do documento a ser encontrado. Com esse método, conseguimos obter o texto salvo no banco de dados para exibir na página de documento.
+ Alterar dados do banco de dados:
  * Utilizamos o método updateOne (do inglês “atualizar um”) das coleções do MongoDB para editar um documento específico. O primeiro parâmetro é o de busca do documento, e o segundo parâmetro é um objeto que deve possuir propriedades específicas (por exemplo, $set), que irão indicar ao MongoDB como atualizar o documento. Com esse método, a Eduarda e a Juliana conseguem refletir as alterações dos textos dos documentos no banco de dados.

## 5. Avançando o SeSoDocs
**Habilidades desenvolvidas neste tópico:**
+ Obter todos os documentos do banco de dados:
  * Utilizamos o método find(), que retorna um Cursor do MongoDB. Para transformá-lo em um array que contém todos os documentos, utilizamos o método toArray(). Enviando essa informação de volta ao cliente, a tela inicial poderá mostrar os documentos do banco de dados em vez de uma lista estática.
+ Adicionar um documento:
  * Utilizamos o método insertOne() para inserir um novo documento no MongoDB. Precisamos verificar se o documento não existe para então adicioná-lo. Por fim, o resultado da operação de adição possui a propriedade acknowledged, que informa se a operação foi reconhecida pelo banco. Em caso positivo, emitimos um evento de volta para os clientes para adicionar o documento na interface front-end.
+ Excluir um documento:
  * Utilizamos o método deleteOne() para excluir um documento do MongoDB. O resultado da operação de exclusão possui a propriedade deletedCount, que informa se a operação foi reconhecida pelo banco. Em caso positivo, emitimos um evento de volta para todos os clientes para realizar as operações necessárias no front-end.
+ Atualizar diferentes páginas a partir do mesmo evento:
  * A partir do evento de exclusão emitido pelo servidor, realizamos diferentes operações dependendo de qual página o cliente está. Quem estiver na página do documento excluído será redirecionado para a página inicial, e quem estiver na página inicial verá o documento ser excluído da lista.

## Conclusão
Implementar o protocolo WebSockets com a biblioteca Socket.IO:
Em contraste com o HTTP, o protocolo WebSockets com a biblioteca Socket.IO, possui algumas vantagens:
  + comunicação em tempo real,
  + a biblioteca Socket.IO é responsável por várias tratativas de erros, o que facilita o desenvolvimento.
Explorar as possibilidades do Socket.IO.
Começamos aprendendo como o servidor emite eventos para um ou vários clientes, como o cliente emite para o servidor e como escutar esses eventos. Descobrimos que, quando o servidor emite para um único cliente, podemos usar o recurso de reconhecimentos (acknowledgements), que imita o modelo de requisição e resposta do HTTP.
Já quando a emissão é para vários clientes, temos algumas possibilidades: emitir para todos os clientes (exceto o que está em um determinado socket) ou emitir para clientes em uma determinada sala do Socket.IO, um conceito importante dessa biblioteca. Nós podemos agrupar diversos clientes em uma determinada sala para ter um melhor gerenciamento e essa estratégia funcionou bem para os nossos documentos no Alura Docs.
Também exploramos a interação do servidor com diversas páginas do front-end. Por exemplo, quando o servidor emite um evento para todos os clientes, dependendo da página em que o cliente está, podemos escutar esse evento e fazer uma determinada ação.
Mais adiante, aplicamos conceitos de front-end e de back-end. Se este foi o seu primeiro contato com front-end, espero que você tenha gostado e aproveitado todas as interações que fizemos.
Por fim, aprendemos a usar o Driver do Node.js do MongoDB, uma forma interessante de conectar nossa interação com o MongoDB Atlas. Estudamos como utilizar os métodos internos do MongoDB e conseguimos persistir os dados de forma segura.
