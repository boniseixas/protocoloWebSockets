# Curso de
# WebSockets: implemente comunicações em tempo real com Socket.IO e MongoDB

<img src="/logos/socket.io.png" alt="Logo Socket.IO" widht="120" height="80"> <img src="JavaScript.png" alt="Logo JavaScript" widht="80" height="80"> <img src="html5.png" alt="Logo HTML" widht="80" height="80"> <img src="VS Code.png" alt="Logo VS Code" widht="80" height="80">

-------

## Introduction
This training is part of [Training Node.js with Express](https://cursos.alura.com.br/formacao-node-js-express) and addresses the WebSocket protocol, where we will learn to implement communications and store data in realtime with Socket.IO and MongoDB.
Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

## Objetivos deste treinamento:
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

2. Trabalhando com Socket.IO
**Habilidades desenvolvidas neste tópico:**
+ Emitir seu primeiro evento a partir do cliente:
  + No front-end, utilizamos socket.emit() para emitir o evento "texto_editor" para o servidor, junto com o texto que foi digitado.
+ Emitir um evento para vários clientes a partir do servidor:
  + No back-end, com io.emit(), podemos emitir um evento para todos os clientes ou, com socket.broadcast.emit(), podemos emitir para todos os clientes, exceto o cliente que está emitindo o evento.
+ Organizar melhor os arquivos por responsabilidade:
  + No front-end, deixamos um arquivo responsável por lidar com as manipulações do HTML (documento.js) e outro responsável para lidar com as funções do Socket.IO (socket-front-documento.js).

3. Avançando na comunicação
**Habilidades desenvolvidas neste tópico:**
+ Agrupar clientes em salas do Socket.IO:
  + Utilizamos o método join() (do inglês “juntar”) para isso, passando como parâmetro o nome da sala na qual queremos colocar o cliente. No nosso caso, os nomes das salas eram os nomes dos documentos.
+ Emitir eventos para uma sala específica:
  + Para isso, utilizamos o método to() (do inglês “para”), passando como parâmetro o nome da sala para a qual queremos emitir o evento.
+ Enviar um dado de volta para o cliente com Reconhecimento:
  + Utilizamos esse recurso quando o cliente emite um evento e espera receber dados de volta do servidor, imitando o modelo de requisição-resposta do HTTP. Para tal, passamos uma função como último parâmetro de emit(), a obtemos na função callback do lado do servidor e a executamos, passando como parâmetro o dado que interessa ao cliente.

4. Utilizando o MongoDB
**Habilidades desenvolvidas neste tópico:**


5. Avançando o SeSoDocs
**Habilidades desenvolvidas neste tópico:**
