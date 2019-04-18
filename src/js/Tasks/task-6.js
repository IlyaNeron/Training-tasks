export class TaskSix {
    constructor() {

    }

    taskSolution() {
        let promt = prompt('Введите строку');
        let val = (promt.length - promt.lastIndexOf(' ') -1);

        const parent_elem = document.querySelector('.task-output_6');
        const build_elem_1 = document.createElement('span');
        const build_elem_2 = document.createElement('span');

        parent_elem.innerHTML = ' ';

        build_elem_1.innerHTML = 'Мы получили строку: ' + promt;
        build_elem_2.innerHTML = 'Кол-во символов в последнем слове равно: ' + val;
        parent_elem.appendChild(build_elem_1);
        parent_elem.appendChild(build_elem_2);
    }
}