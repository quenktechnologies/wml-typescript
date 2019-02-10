import * as must from 'must/register';
import { AppView } from '../../src';

class TestView extends AppView<{}> {

    template = (_v: TestView) => document.createElement('p');

}

describe('AppView', function() {

    describe('findGroupByName', function() {

        xit('should return Just for a group that exists', function() {

            let view = new TestView({});

            view
                .registerByGroup('list', document.createElement('p'))
                .findGroupByName('list')
                .map((l: Element[]) => must(l.length).be(1))
                .orJust(() => { throw new Error('Should be Just!'); });

        });

        xit('should be Nothing if group is not found or empty', function() {

            let view = new TestView({});

            view
                .findGroupByName('non-existent')
                .map(() => { throw new Error('Should be Nothing!'); });

        });

    });

});
