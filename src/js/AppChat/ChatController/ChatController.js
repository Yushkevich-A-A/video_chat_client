export default class ChatController {
  constructor(login, chat, io) {
    this.login = login;
    this.chat = chat;
    this.io = io;
    this.init();
  }

  init() {
    this.setConnect();
    this.listeners();
  }

  setConnect() {
    this.socket = this.io('http://localhost:7070/');
  }
}