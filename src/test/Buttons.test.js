import React from 'react';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuView from '../views/MenuView'
import OrderName from '../components/OrderName';


configure({ adapter: new Adapter() });

it('Debería devolver categoria desayuno al clickear  ', () => {
    const wrapper = shallow(<MenuView/>);
    wrapper.find('.btnCategory').at(0).simulate('click')
    expect(wrapper.state().list).toMatchSnapshot()
  });


it('Debería devolver categoria almuerzo al clickear ', () => {
const wrapper = shallow(<MenuView/>);
wrapper.find('.btnCategory').at(1).simulate('click')
expect(wrapper.state().list).toMatchSnapshot();
});

it('Debería encontrar la funcion ClearOrder al clickear ', () => {
    const wrapper = shallow(<MenuView/>);
    wrapper.find('.btn-aside-clear').simulate('click')
    expect(wrapper.state).toMatchSnapshot();
    });


it('Debería encontrar la funcion ClearOrder al clickear ', () => {
    const wrapper = shallow(<MenuView/>);
    wrapper.find('.btn-aside').simulate('click')
    expect(wrapper.state).toMatchSnapshot();
    });

describe('< orderName/>', () => {
    test('deberia retornar que el input existe devuelve un valor', () => {
        const wrapper = shallow(<OrderName/>);
        expect(wrapper.exists('input')).toBe(true);
    });
  });
  
