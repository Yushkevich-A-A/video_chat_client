export default class DrawLogin {
    constructor() {
        this.drawLoginPopup();
    }

    drawLoginPopup() {
        this.loginPopup = document.createElement('div');
        this.loginPopup.classList.add('login-popup_wrapper');
        this.loginPopup.innerHTML = `<div class="login-popup">
            <form class="login-popup-form">
                <div>
                    <label for="nickname" class="label login-popup-form__label">Введите NickName</label>
                    <input name="nickname" type="text" class="input login-popup-form__input" value="Type your nickname">
                </div>
                <div class="login-form-submit">
                    <button class="button login-popup-form__button login-popup-form__button_hover-green">Send</button>
                </div>
            </form>
            <div class="login-error login-error-disable">
                <p class="login-error__p"></p>
            </div>
        </div>`;
        document.body.appendChild(this.loginPopup);
        this.form = this.loginPopup.querySelector('.login-popup-form');
        this.input = this.loginPopup.querySelector('.login-popup-form__input');
        this.error = this.loginPopup.querySelector('.login-error');
        this.errorText = this.loginPopup.querySelector('.login-error__p');
    }

    enablePopup() {
        this.loginPopup.classList.remove('login-popup_wrapper-disable');
    }

    disablePopup() {
        this.loginPopup.classList.add('login-popup_wrapper-disable');
    }

    enableError(data) {
        this.errorText.value = data;
        this.error.classList.remove('login-error-disable');
        this.error.style.top = this.input.clientTop + this.input.clientHeight + 'px';
        this.error.style.left = this.input.clientLeft + 'px';
    }

    disableError() {
        this.errorText.value = '';
        this.error.classList.add('login-error-disable');
    }

    checkValueInput(data) {
        if(data.trim() === '') {
            this.enableError('Значение поля не может быть пустым');
        }
    }
}