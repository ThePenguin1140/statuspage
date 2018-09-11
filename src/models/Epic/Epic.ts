import { TodoStatus } from "../../interfaces/interfaces";
import { Todo } from "../ToDo/Todo";

export class Epic {

    private _title: String;
    private _status: TodoStatus;
    private _todos: Todo[];

    constructor( title: String ) {
        this._title = title;
        this._status = TodoStatus.BACKLOG;
        this._todos = [];
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
}