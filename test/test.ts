// Reference mocha-typescript's global definitions:
/// <reference path='../node_modules/mocha-typescript/globals.d.ts' />

import { suite, test } from 'mocha-typescript';
import { Todo } from '../models/ToDo/Todo';
import { TodoStatus } from '../models/interfaces';
import { expect } from 'chai';

describe('Class Tests', () => {
    describe('Todo items', () => {
        @suite('A new instance of a Todo item')
        class constructorTests {

            private static readonly content: string = 'hello world';
            private static myTodo: Todo;

            static before() {
                this.myTodo = new Todo( this.content );
            }

            @test 'should have some content'() {
                expect( constructorTests.myTodo.getContent() ).to.not.be.undefined.and.to.be.an.instanceof( String );
            }

            @test 'should have a state'() {
                expect( constructorTests.myTodo.getStatus() ).to.not.be.undefined;
            }

            @test 'should be placed in the BACKLOG'() {
                expect( constructorTests.myTodo.getStatus() ).to.equal( TodoStatus.BACKLOG );
            }
        }

        @suite('Updating information in a Todo item')
        class updateTests {
            private static readonly content: string = 'hello world';
            private static myTodo: Todo;

            static before() {
                this.myTodo = new Todo( this.content );
            }

            @test 'should be able to move it to DOING'() {
                const state = TodoStatus.DOING;
                updateTests.myTodo.setStatus( state );
                expect( updateTests.myTodo.getStatus() ).to.equal( state );
            }

            @test 'should be able to move it to DONE'() {
                const state = TodoStatus.DONE;
                updateTests.myTodo.setStatus( state );
                expect( updateTests.myTodo.getStatus() ).to.equal( state );
            }

            @test 'should be able to move it to BLOCKED'() {
                const state = TodoStatus.BLOCKED;
                updateTests.myTodo.setStatus( state );
                expect( updateTests.myTodo.getStatus() ).to.equal( state );
            }

            @test 'should be able to move it to BACKLOG'() {
                const state = TodoStatus.BACKLOG;
                updateTests.myTodo.setStatus( state );
                expect( updateTests.myTodo.getStatus() ).to.equal( state );
            }

            @test 'should be able to set the content to foobar'() {
                updateTests.myTodo.setContent('foobar');
                expect( updateTests.myTodo.getContent() ).to.equal('foobar');
            }
        }
    });
});
