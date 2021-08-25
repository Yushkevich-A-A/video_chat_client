import DrawLogin from "./DrawLogin/DrawLogin";
import DrawChat from "./DrawChat/DrawChat";
import ChatController from "./ChatController/ChatController";
import { io } from 'socket.io-client';


const login = new DrawLogin();
const chat = new DrawChat();
const chatController = new ChatController(login, chat, io);