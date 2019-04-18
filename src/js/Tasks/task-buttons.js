export class TaskButtons {
    constructor() {
    }

    controls(selector, method) {
        const elem = document.querySelector(selector);
        elem.addEventListener('click', method);
    }
}