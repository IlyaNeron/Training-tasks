export class TaskFour {
    constructor() {
        this.arr = [];
        this.resultArr = [];
    }

    taskSolution() {
        this.arr = [4, 14, 2, -5, 6.4, -10.5, 1];
        let strArr = this.arr.join(', ');
        let firstElem = this.arr[0];

        const parent_elem = document.querySelector('.task-output_4');
        const build_elem_1 = document.createElement('span');
        const build_elem_2 = document.createElement('span');

        parent_elem.innerHTML = ' ';

        this.arr.splice(0, 1);

        this.resultArr = this.arr.map( (num) => {
            num /= firstElem;
            return num;
        });

        let strResultArr = this.resultArr.join(', ');

        build_elem_1.innerHTML = 'У нас есть массив с числами: [' + strArr + ']';
        build_elem_2.innerHTML = 'Делим все элементы массива(кроме первого) на первый ' + strResultArr;
        parent_elem.appendChild(build_elem_1);
        parent_elem.appendChild(build_elem_2);
    }
}