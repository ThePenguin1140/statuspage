import { Todo } from "./Todo";
import { expect } from "chai";
import { ItemStatus } from "../../interfaces/interfaces";
import * as _ from "lodash";

describe( 'Todo items', () => {

    describe( 'A new instance of a Todo item', () => {
        const content: string = 'hello world';
        var myTodo: Todo;

        before( () => {
            myTodo = new Todo( content );
        } );

        it( 'should have some content', () => {
            expect( myTodo.getContent() ).to.not.be.undefined.and.to.be.an.instanceof( String );
        } );

        it( 'should have the right content', () => {
            expect( myTodo.getContent() ).to.equal( content );
        } );

        it( 'should have a state', () => {
            expect( myTodo.getStatus() ).to.not.be.undefined;
        } );

        it( 'should be placed in the BACKLOG', () => {
            expect( myTodo.getStatus() ).to.equal( ItemStatus.BACKLOG );
        } );
    } );

    describe( 'Updating information in a Todo item', () => {
        const content: string = 'hello world';
        var myTodo: Todo;

        before( () => {
            myTodo = new Todo( content );
        } );

        //test that we can move the item to all available states
        for( let state in ItemStatus ) {
            if( _.isNaN( Number( state ) ) ) {
                it( 'should be able to move it to ' + state, () => {
                    const s: ItemStatus = Number(ItemStatus[state]) as ItemStatus;
                    myTodo.setStatus( s );
                    expect( myTodo.getStatus() ).to.equal( s );
                });
            }
        }

        it( 'should be able to set the content to foobar', () => {
            myTodo.setContent( 'foobar' );
            expect( myTodo.getContent() ).to.equal( 'foobar' );
        } );
    } );
} );