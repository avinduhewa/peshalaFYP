export const REGEX = {
    PHONE: /^(\+\d{1,3}[- ]?)?\d{8,15}$/,
    // tslint:disable-next-line:max-line-length
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    URL: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!$&'\(\)\*\+,;=.]+$/,
    SPECIAL_CHAR: /[`~!@#$%^&*()_|+\=;'",.<>\{\}\[\]\\\/]/gi,
    STRING_WO_SPECIAL_CHARS: /^([a-zA-Z0-9]*[-]*)*$/,
    STRING_W_SPACE: /^[a-zA-Z0-9- ]*$/
};