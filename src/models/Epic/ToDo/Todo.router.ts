import { get, post, put, del } from 'server/router';
import { Middlewares } from "server/typings/common";
import { TodoController } from './Todo.controller';

var TodoRoutes: Middlewares = [
    get( '/epic:id/todo', TodoController.list),
    get( '/epic:id/todo:id', TodoController.item ),
    post( '/epic:id/todo', TodoController.create ),
    put( '/epic:id/todo:id', TodoController.update ),
    del( '/epic:id/todo:id', TodoController.delete )
];

export default TodoRoutes;