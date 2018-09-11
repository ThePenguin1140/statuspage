import { Item } from "../../interfaces/interfaces";
import { Todo } from "../ToDo/Todo";

export class Epic extends Item{

    private _todos: Todo[];
    private _progress: Number;

    constructor( content: string ) {
        super( content );
        this._todos = [];
        this._progress = 0.0;
    }

    getTodos() {
        return this._todos;
    }

    getProgress() {
        return this._progress;
    }
}