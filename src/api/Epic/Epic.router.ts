import { get, post, put, del } from 'server/router';
import { Middlewares } from "server/typings/common";
import { EpicController } from './Epic.controller';

var EpicRoutes: Middlewares = [
    get( '/epic', EpicController.list),
    get( '/epic:id', EpicController.item ),
    post( '/epic', EpicController.create ),
    put( '/epic:id', EpicController.update ),
    del( '/epic:id', EpicController.delete )
];

export default EpicRoutes;