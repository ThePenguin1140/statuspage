// Reference mocha-typescript's global definitions:
/// <reference path='../node_modules/mocha-typescript/globals.d.ts' />

import { suite, test } from 'mocha-typescript';
import { Todo } from '../models/ToDo/Todo';
import { TodoStatus } from '../models/interfaces';
import { expect } from 'chai';

describe('Todo items', () => {
    @suite('A new instance of a Todo item')
    class constructorTests {

        private readonly content = 'hello world';

        @test 'should contain Hello World'() {
            var myTodo = new Todo( this.content );
            expect( myTodo.getContent()).to.equal( this.content );
        }

        @test 'should be in the backlog'() {
            var myTodo = new Todo( this.content );
            expect( myTodo.getStatus() ).to.equal( TodoStatus.BACKLOG );
        }
    }

    @suite('Updating information in a Todo item')
    class updateTests {
        private static readonly content: string = 'hello world';
        private static todoItem: Todo;

        static before() {
            this.todoItem = new Todo( this.content );
        }

        @test 'should be able to move it to DOING'() {
            updateTests.todoItem.setStatus( TodoStatus.DOING );
            expect( updateTests.todoItem.getStatus() ).to.equal( TodoStatus.DOING );
        }

        @test 'should be able to set the content to foobar'() {
            updateTests.todoItem.setContent('foobar');
            expect( updateTests.todoItem.getContent() ).to.equal('foobar');
        }
    }
});