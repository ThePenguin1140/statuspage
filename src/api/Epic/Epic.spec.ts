import { Epic } from "./Epic";
import { expect } from "chai";
import { Todo } from "./ToDo/Todo";
import { ItemStatus } from "../../interfaces/interfaces";

describe( 'Epic items', () => {
    describe( 'A new instance of an Epic', () => {
        const title: string = 'foobar';
        var myEpic: Epic;
        var one: Todo;

        before( () => {
            one = new Todo( "Todo 1" );
            var two: Todo = new Todo( "Todo 2" );
            myEpic = new Epic( title, [ one, two ] );
        } );

        it( 'should not be a master epic', () => {
            expect( myEpic.isMaster() ).to.be.false;
        } );

        it( 'should contain a title', () => {
            expect( myEpic.getContent() ).to.not.be.undefined.and.to.be.an.instanceof( String );
        } );

        it( 'should contain the right title', () => {
            expect( myEpic.getContent() ).to.equal( title );
        } );

        it( 'should contain a list of todos', () => {
            expect( myEpic.getTodos() ).to.not.be.undefined.and.to.equal( [] );
        } );

        it( 'should have a state', () => {
            expect( myEpic.getStatus() ).to.not.be.undefined;
        } );

        it( 'should be placed in the BACKLOG', () => {
            expect( myEpic.getStatus() ).to.equal( ItemStatus.BACKLOG );
        } );

        it( 'should return some progress', () => {
            expect( myEpic.getProgress() ).to.equal( 0.0 );
        } );

        it( 'should return a specific todo', () => {
            expect( myEpic.getTodo(0) ).to.equal( one );
        } );
    } );
    describe( 'Updating an Epic', () => {
        var title_one: string = 'title1';
        var title_two: string = 'title2';
        var epic: Epic;

        before( () => {
            epic = new Epic( title_one );
        } );

        it( 'should change the content', () => {
            expect( epic.getContent() ).to.equal( title_one );
            epic.setContent( title_two );
            expect( epic.getContent() ).to.equal( title_two );
        } );

        it( 'should add new todo items', () => {
            var todo = new Todo( 'todo1' );
            epic.addTodo( todo );
            expect( epic.getTodos().length ).to.equal( 1 );
            expect( epic.getTodo(0) ).to.equal( todo );
        } );

        it('should update todos', () => {
            epic.getTodos()[0].setStatus( ItemStatus.DONE );
            expect( epic.getTodo(0).getStatus() ).to.equal( ItemStatus.DONE );
        } );

        it( 'should update the progress', () => {
            expect( epic.getProgress() ).to.equal( 1 );
        } );
    } );
} );