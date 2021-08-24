export default class DrawInitRoom{
    constructor() {
        this.init();
    }
    
    init() {
        this.drawCreateRoomPopup();
    }

    drawCreateRoomPopup() {
        this.CreateRoomPopup = document.createElement('div');
        this.CreateRoomPopup.classList.add('create-room-popup_wrapper', 'create-room-popup_wrapper-disable');
        this.CreateRoomPopup.innerHTML = `<div class="create-room-popup">
            <form class="create-room-popup-form">
                <div>
                    <label for="room" class="label create-room-popup-form__label">Создайте комнату</label>
                    <input name="room" type="text" class="input create-room-popup-form__input">
                </div>
                <div class="create-room-form-submit">
                    <button class="button create-room-popup-form__button create-room-popup-form__button_hover-green">Create</button>
                </div>
            </form>
            <div class="create-room-error">
                <p class="create-room-error__p">введите номер комнаты</p>
            </div>
        </div>`;
        document.body.appendChild(this.CreateRoomPopup);
        this.form = this.CreateRoomPopup.querySelector('.create-room-popup-form');
        this.input = this.CreateRoomPopup.querySelector('.create-room-popup-form__input');
        this.error = this.CreateRoomPopup.querySelector('.create-room-error');
        this.errorText = this.CreateRoomPopup.querySelector('.create-room-error__p');
    }

    enablePopup() {
        this.CreateRoomPopup.classList.remove('create-room-popup_wrapper-disable');
    }

    disablePopup() {
        this.CreateRoomPopup.classList.add('create-room-popup_wrapper-disable');
    }

    enableError(data) {
        this.errorText.value = data;
        this.error.classList.remove('create-room-error-disable');
        this.error.style.top = this.input.clientTop + this.input.clientHeight + 'px';
        this.error.style.left = this.input.clientLeft + 'px';
    }

    disableError() {
        this.errorText.value = '';
        this.error.classList.add('create-room-error-disable');
    }

    checkValueInput(data) {
        if(data.trim() === '') {
            this.enableError('Значение поля не может быть пустым');
        }
    }
}