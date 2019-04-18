import {btn_elements} from './buttons';
import {TaskButtons} from './task-buttons';
import {TaskOne} from './task-1';
import {TaskTwo} from './task-2';
import {TaskThree} from './task-3';
import {TaskFour} from './task-4';
import {TaskFive} from './task-5';
import {TaskSix} from './task-6';


export class TasksApply {
    constructor() {
        this.task_buttons = new TaskButtons();
        this.task_one = new TaskOne();
        this.task_two = new TaskTwo();
        this.task_three = new TaskThree();
        this.task_four = new TaskFour();
        this.task_five = new TaskFive();
        this.task_six = new TaskSix();
    }

    run() {
        this.task_buttons.controls(btn_elements.one, this.task_one.taskSolution);
        this.task_buttons.controls(btn_elements.two, this.task_two.taskSolution);
        this.task_buttons.controls(btn_elements.three, this.task_three.taskSolution);
        this.task_buttons.controls(btn_elements.four, this.task_four.taskSolution);
        this.task_buttons.controls(btn_elements.five, this.task_five.taskSolution);
        this.task_buttons.controls(btn_elements.six, this.task_six.taskSolution);
    }
}