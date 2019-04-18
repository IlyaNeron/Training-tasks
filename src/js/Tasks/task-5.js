export class TaskFive {
    constructor() {
        this.arr = [];
    }

    taskSolution() {
        this.arr = [
            [3, 4, 2, 11],
            [13, -2, 5, 12],
            [3, 7, -4, 3],
            [1, 14, 2, 3],
        ];

        const parent_elem = document.querySelector('.task-output_5');
        const build_elem_1 = document.createElement('span');
        const build_elem_2 = document.createElement('span');

        parent_elem.innerHTML = ' ';

        let sum = 0;
        let max = 0;
        let finalArr = [];

        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[i].length; j++) {
                if (this.arr[i][i] < 0) {
                    sum += this.arr[i][j];
                    finalArr.push(this.arr[i][j]);
                }
            }
        }

        max = Math.max.apply(null, finalArr);

        build_elem_1.innerHTML = 'Сумма всех элементов в строках с отрицательными числами: ' + sum;
        build_elem_2.innerHTML = 'Наибольший элемент в строках с отрицательными числами: ' + max;
        parent_elem.appendChild(build_elem_1);
        parent_elem.appendChild(build_elem_2);
    }
}