export class TaskOne {
    constructor() {
        this.arr = [];
    }

    taskSolution() {
        let start = prompt('Введите 6 чисел');
        let max_length = 6;
        let sum = 0;

        const parent_elem = document.querySelector('.task-output_1');
        const build_elem_1 = document.createElement('span');
        const build_elem_2 = document.createElement('span');

        parent_elem.innerHTML = ' ';

        this.arr = start.split('');

        if (this.arr.length < max_length || this.arr.length > max_length) {
            alert('Введите кол-во символов в соответствии с условием. В данной задаче это - ' + max_length);
            return false;
        }

        if (this.arr.length === max_length) {
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] > 4 && this.arr[i] <= 7) {
                    let n = parseInt(this.arr[i], 10);
                    sum += n;
                }
            }
        }

        build_elem_1.innerHTML = 'Мы получили массив с числами: [' + this.arr + ']';
        build_elem_2.innerHTML = 'Сумма нужных нам чисел равна: ' + sum;
        parent_elem.appendChild(build_elem_1);
        parent_elem.appendChild(build_elem_2);
    }
}
