export class TaskTwo {
    constructor() {
    }

    taskSolution() {
        let maxNum = prompt('Задайте числовое значение n');
        let start = 0;

        const parent_elem = document.querySelector('.task-output_2');
        const build_elem_1 = document.createElement('span');

        parent_elem.innerHTML = ' ';

        for (let i = 1; i < maxNum; i++) {

            // if (i % 2 === 0) {
            //     start -= i**i;
            // } else {
            //     start += i**i;
            // }

            start = i % 2 === 0 ? start -= i**i : start += i**i;
        }

        build_elem_1.innerHTML = 'Результат операции: ' + start;
        parent_elem.appendChild(build_elem_1);
    }
}