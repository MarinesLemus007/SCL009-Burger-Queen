import MenuView from '../views/MenuView';
import KitchenView from '../views/KitchenView'
import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Componentes existentes en MenuView y KitchenView', () => {

it('Deberia encontrar Navbar en MenuView', () => {
    const nameComponent = shallow(<MenuView/>);
    expect(nameComponent.find('Navbar').length).toBe(1);
  });

  it('Deberia encontrar CategoryBtn en MenuView', () => {
    const nameComponent = shallow(<MenuView/>);
    expect(nameComponent.find('CategoryBtn').length).toBe(2);
  });

  it('Deberia encontrar OrderName en MenuView', () => {
    const nameComponent = shallow(<MenuView/>);
    expect(nameComponent.find('OrderName').length).toBe(1);
  });

  it('Deberia encontrar Order en MenuView', () => {
    const nameComponent = shallow(<MenuView/>);
    expect(nameComponent.find('Order').length).toBe(1);
  });

  it('Deberia encontrar Navbar en KitchenView', () => {
    const nameComponent = shallow(<KitchenView/>);
    expect(nameComponent.find('Navbar').length).toBe(1);
  });

  it('Deberia encontrar OrderTemplate en KitchenView', () => {
    const nameComponent = shallow(<KitchenView/>);
    expect(nameComponent.find('OrderTemplate').length).toBe(1);
  });

});