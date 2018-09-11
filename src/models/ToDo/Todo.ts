import { ItemStatus } from '../../interfaces/interfaces';

export class Todo {
    private _content: string;
    private _status: ItemStatus;

    constructor( public content: string ) {
        this._content = content;
        this._status = ItemStatus.BACKLOG;
    }

    getContent(): string {
        return this._content;
    }

    getStatus(): ItemStatus {
        return this._status;
    }

    setContent( content: string ): void {
        this._content = content;
    }

    setStatus( status: ItemStatus ): void {
        this._status = status;
    }
}