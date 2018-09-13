import { Context, Middleware } from 'server/typings/common';

export class TodoController {

    static list: Middleware = async ( ctx: Context ) => {};

    static item: Middleware = async ( ctx: Context ) => {};

    static create: Middleware = async ( ctx: Context ) => {};

    static update: Middleware = async ( ctx: Context ) => {};

    static delete: Middleware = async ( ctx: Context ) => {};
}