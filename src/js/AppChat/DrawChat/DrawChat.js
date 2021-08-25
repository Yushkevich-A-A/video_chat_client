export default class DrawChat {
    constructor() {
        this.drawChat();
    }

    drawChat() {
        this.chat = document.createElement('div');
        this.chat.classList.add('chat-wrapper', 'chat-wrapper_disable');
        this.chat.innerHTML = `<div class="chat">
        <div class="chat-information">
            <div class="chat-clients">
                <div class="chat-clients-title">
                    <h2 class="chat-clients-title__h2">
                        в сети
                    </h2>
                </div>
                <ul class="chat-clients-list">
                </ul>
            </div>
            <div class="chat-messages">
                <div class="chat-messages-title">
                    <h2 class="chat-messages-title__h2">
                        Комната: <span class="name-room"></span>
                    </h2>
                </div>
                <ul class="chat-messages-list">
                </ul>
            </div>
        </div>
        <div class="chat-input-message">
            <div class="chat-form">
                <div class="chat-form-input">
                    <textarea class="chat-form-input__input">Type your message here</textarea>
                </div>
                <div class="chat-form-button">
                    <span class="chat-form-button__span">Send</span>
                </div>
            </div>
        </div>
    </div>`;
    document.body.appendChild(this.chat);
    this.chatClientsList = this.chat.querySelector('.chat-clients-list');
    this.chatMessagesList = this.chat.querySelector('.chat-messages-list');
    this.nameRoom = this.chat.querySelector('.name-room');
    }

    chatEnable() {
        this.chat.classList.remove('chat-wrapper_disable');
    }

    setNameRoom(data) {
        this.nameRoom.textContent = data;
    }

    addNewClient(data) {
        const client = document.createElement('li');
        client.classList.add('online-client');
        client.innerHTML = `<div class="online-client-nickname"></div>`;
        this.chatClientsList.appendChild(client);
        client.dataset.userOnline = data.name.toLowerCase();
        const userName = client.querySelector('.online-client-nickname');
        userName.textContent = data.name;
    }

    removeClient(data) {
        const client = this.chatClientsList.querySelector(`[data-user-name="${data.name.toLowerCase()}"]`);
        this.chatClientsList.removeChild(client);
    }

    createNewMessage(data) {
        const message = document.createElement('li');
        message.class.classList.add('chat-messages-item', 'client-message-wrapper');
        message.innerHTML = `<div class="client-message">
            <div class="message-information">
                <div class="message-information-nickname"></div>
            </div>
            <div class="message-content">
                <p class="message-content__p"></p>
                <div class="message-content-date"></div>
            </div>
        </div>
        <div class="left-arrow"></div>`;
        this.chatMessagesList.appendChild(message);
        const messageInformationNickname = message.querySelector('.message-information-nickname');
        messageInformationNickname.textContent = data.name;
        const messageContent = message.querySelector('.message-content__p');
        messageContent.textContent = data.message;
        const messageContentDate = message.querySelector('.message-content-date');
        messageContentDate.textContent = moment(+data.date).format('DD.MM.YYYY');
    }

    createYourMessage(data) {
        const message = document.createElement('li');
        message.class.classList.add('chat-messages-item', 'you-message-wrapper');
        message.innerHTML = `<div class="you-message">
            <div class="message-information">
                <div class="message-information-nickname">You</div>
            </div>
            <div class="message-content">
                <p class="message-content__p"></p>
                <div class="message-content-date"></div>
            </div>
        </div>
        <div class="right-arrow"></div>`;
        this.chatMessagesList.appendChild(message);
        const messageContent = message.querySelector('.message-content__p');
        messageContent.textContent = data.message;
        const messageContentDate = message.querySelector('.message-content-date');
        messageContentDate.textContent = moment(+data.date).format('DD.MM.YYYY');
    }
}