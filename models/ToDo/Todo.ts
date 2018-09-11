import { TodoStatus } from '../interfaces';

export class Todo {
    private _content: string;
    private _status: TodoStatus;

    constructor( public content: string ) {
        this._content = content;
        this._status = TodoStatus.BACKLOG;
    }

    getContent(): string {
        return this._content;
    }

    getStatus(): TodoStatus {
        return this._status;
    }

    setContent( content: string ): void {}

    setStatus( status: TodoStatus ): void {}
}