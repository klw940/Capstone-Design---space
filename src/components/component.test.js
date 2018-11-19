import React from 'react';
import renderer from 'react-test-renderer';
import  Content from './Content';
import  Menu from './Menu';
describe('component', () => {
    describe('Content', () => {
        let component = null;
        it('renders correctly', () => {
            component = renderer.create(<Content />);
        });
        it('matches snapshot', () => {
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('Menu', () => {
    let component = null;
    it('renders correctly', () => {
        component = renderer.create(<Menu />);
    });
    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
}