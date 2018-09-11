// Reference mocha-typescript's global definitions:
/// <reference path='../node_modules/mocha-typescript/globals.d.ts' />

import { Todo } from '../models/ToDo/Todo';
import { TodoStatus } from '../models/interfaces';
import { expect } from 'chai';
import * as _ from 'lodash';

describe( 'Class Tests', () => {
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
                expect( myTodo.getStatus() ).to.equal( TodoStatus.BACKLOG );
            } );
        } );

        describe( 'Updating information in a Todo item', () => {
            const content: string = 'hello world';
            var myTodo: Todo;

            before( () => {
                myTodo = new Todo( content );
            } );

            //test that we can move the item to all available states
            for( let state in TodoStatus ) {
                if( _.isNaN( Number( state ) ) ) {
                    it( 'should be able to move it to ' + state, () => {
                        const s: TodoStatus = Number(TodoStatus[state]) as TodoStatus;
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

    describe( 'Epic items', () => {
        describe( 'A new instance of an Epic', () => {
            const title: string = 'foobar';

            it( 'should contain a title', () => {

            } );

            it( 'should contain a list of linked todos', () => {

            } );

            it( 'should have a state', () => {

            } );

            it( 'should be placed in the BACKLOG', () => {

            } );
        } );
    } );

} );
