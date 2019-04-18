export class TaskThree {
    constructor() {
        this.arr = [];
    }

    taskSolution() {
        let start = prompt('Введите число, кол-во цифр которого вы хотите узнать');
        const parent_elem = document.querySelector('.task-output_3');
        const build_elem = document.createElement('span');

        parent_elem.innerHTML = ' ';

        this.arr = start.slice();

        let numLength = this.arr.length;

        build_elem.innerHTML = 'Кол-во цифр в введенном числе равно: ' + numLength;
        parent_elem.appendChild(build_elem);
        parent_elem.appendChild(build_elem);
    }
}