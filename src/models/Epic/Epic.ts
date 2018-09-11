import { Item, ItemStatus } from "../../interfaces/interfaces";
import { Todo } from "../ToDo/Todo";
import * as _ from 'lodash';

export class Epic extends Item{

    private _todos: Todo[];

    constructor( content: string ) {
        super( content );
        this._todos = [];
    }

    getTodos() {
        return this._todos;
    }

    getProgress() {
        if( this._todos.length == 0 ) return 0;
        return _.reduce( this._todos, ( sum: number, item: Item ) => {
            if( item.getStatus() == ItemStatus.DONE ) sum++;
            return sum;
        }, 0 ) / this._todos.length;
    }
}