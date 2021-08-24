export default class DrawChat {
    constructor() {
        this.init();
    }

    init() {
        this.drawChat();
    }

    drawChat() {
        this.chat = document.createElement('div');
        this.chat.classList.add('chat-wrapper');
        this.chat.innerHTML = `<div class="chat">
        <div class="chat-information">
            <div class="chat-clients">
                <div class="chat-clients-title">
                    <h2 class="chat-clients-title__h2">
                        в сети
                    </h2>
                </div>
                <ul class="chat-clients-list">
                    <li class="online-client">
                        <div class="online-client-nickname">Антон</div>
                    </li>
                    <li class="online-client">
                        <div class="online-client-nickname">Александра</div>
                    </li>
                </ul>
            </div>
            <div class="chat-messages">
                <div class="chat-messages-title">
                    <h2 class="chat-messages-title__h2">
                        Имя комнаты,,,,
                    </h2>
                </div>
                <ul class="chat-messages-list">
                    <li class="chat-messages-item client-message-wrapper">
                        <div class="client-message">
                            <div class="message-information">
                                <div class="message-information-nickname">Антон</div>
                            </div>
                            <div class="message-content">
                                <p class="message-content__p">Привет МИР!</p>
                                <div class="message-content-date">24,12,2022</div>
                            </div>
                        </div>
                        <div class="left-arrow"></div>
                    </li>
                    <li class="chat-messages-item you-message-wrapper">
                        <div class="you-message">
                            <div class="message-information">
                                <div class="message-information-nickname">You</div>
                            </div>
                            <div class="message-content">
                                <p class="message-content__p">Привет МИР!</p>
                                <div class="message-content-date">24,12,2022</div>
                            </div>
                        </div>
                        <div class="right-arrow"></div>
                    </li>
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
    this.chatClientsList





    }
}