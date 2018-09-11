import { Item, ItemStatus } from "../../interfaces/interfaces";
import { Todo } from "../ToDo/Todo";

export class Epic extends Item{

    private _todos: Todo[];
    private _isMaster: boolean;

    constructor( content: string, todos: Item[] = [], isMasterEpic: boolean = false ) {
        super( content );
        this._todos = todos;
        this._isMaster = isMasterEpic;
    }

    getTodos(): Todo[] {
        return this._todos;
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

    }
}