import { Epic } from "./Epic";
import { expect } from "chai";
import { Todo } from "../ToDo/Todo";
import { TodoStatus } from "../../interfaces/interfaces";

describe( 'Epic items', () => {
    describe( 'A new instance of an Epic', () => {
        const title: string = 'foobar';
        var myEpic: Epic;

        before( () => {
            myEpic = new Epic( title );
        });

        it( 'should contain a title', () => {
            expect( myEpic.getTitle() ).to.not.be.undefined.and.to.be.an.instanceof( String );
        } );

        it( 'should contain the right title', () => {
            expect( myEpic.getTitle() ).to.equal( title );
        });

        it( 'should contain a list of todos', () => {
            expect( myEpic.getTodos() ).to.not.be.undefined.and.to.equal([] );
        } );

        it( 'should have a state', () => {
            expect( myEpic.getStatus() ).to.not.be.undefined;
        } );

        it( 'should be placed in the BACKLOG', () => {
            expect( myEpic.getStatus() ).to.equal(TodoStatus.BACKLOG);
        } );

        it('should return some progress', () => {
            expect( myEpic.getProgress() ).to.equal( 0.0);
        });
    } );
} );