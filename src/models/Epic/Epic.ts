import { Item, ItemStatus } from "../../interfaces/interfaces";
import { Todo } from "./ToDo/Todo";

export class Epic extends Item{

    private _todos: Array<Item>;
    private _isMaster: boolean;

    constructor( content: string, todos: Array<Item> = [], isMasterEpic: boolean = false ) {
        super( content );
        this._todos = todos;
        this._isMaster = isMasterEpic;
    }

    getTodos(): Todo[] {
        return this._todos;
    }

    getTodo( index: number ): Todo {
        return this._todos[index];
    }

    getProgress(): number {
        if( this._todos.length == 0 ) return 0;
        return this._todos.reduce( ( sum: number, item: Item ) => {
            if( item.getStatus() == ItemStatus.DONE ) sum++;
            return sum;
        }, 0 ) / this._todos.length;
    }


    isMaster(): boolean {
        return this._isMaster;
    }

    addTodo( todo: Todo ): void {
        this._todos = this._todos.concat(todo);
    }

}