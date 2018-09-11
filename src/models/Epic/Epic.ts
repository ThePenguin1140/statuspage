import { TodoStatus } from "../../interfaces/interfaces";
import { Todo } from "../ToDo/Todo";

export class Epic {

    private _title: String;
    private _status: TodoStatus;
    private _todos: Todo[];
    private _progress: Number;

    constructor( title: String ) {
        this._title = title;
        this._status = TodoStatus.BACKLOG;
        this._todos = [];
        this._progress = 0.0;
    }

    getTitle() {
        return this._title;
    }

    getTodos() {
        return this._todos;
    }

    getStatus() {
        return this._status;
    }

    getProgress() {
        return this._progress;
    }
}