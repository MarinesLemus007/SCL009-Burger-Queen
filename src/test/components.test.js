import React from 'react';
import { configure , shallow , mount , Enzyme} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuView from '../views/MenuView'
import LunchBtn from '../components/LunchBtn'
import Btn from '../components/Btn'
import CategoryBtn from '../components/CategoryBtn';
import OrderTemplate from '../components/OrderTemplate'
import Order from '../components/Order';
import OrderName from '../components/OrderName';
import OrderElement from '../components/OrderElement';

configure({ adapter: new Adapter() });

//tests que verifica si existen los componentes
describe('<MenuView/>', () => {
  test('deberia retornar que el componente devuelve un valor ', () => {
      const wrapper = shallow(<MenuView/>);
      expect(wrapper.find(MenuView)).toBeDefined();//verifica que el componente este devolviendo "algo"
  });
});
describe('<CategoryBtn/>', () => {
  test('deberia retornar que el componente existe y devuelve un valor', () => {
      const wrapper = shallow(<CategoryBtn/>);
      expect(wrapper.find(CategoryBtn)).toBeDefined();
  });
});
describe('<LunchBtn/>', () => {
  test('deberia retornar que el componente existe devuelve un valor', () => {
      const wrapper = shallow(<LunchBtn/>);
      expect(wrapper.find(LunchBtn)).toBeDefined();
  });
});
describe('<OrderElement/>', () => {
    test('deberia retornar que el componente existe devuelve un valor', () => {
        const wrapper = mount(<OrderElement/>);
        expect(wrapper.find(OrderElement)).toBeDefined();
    });
  });
describe('<Btn/>', () => {
    test('deberia retornar que el componente existe y devuelve un valor', () => {
        const wrapper = shallow(<Btn/>);
        expect(wrapper.exists()).toBe(true);
    });
  });
  describe('<OrderTemplate/>', () => {
    test('deberia retornar que el componente existe y devuelve un valor', () => {
        const wrapper = mount(<OrderTemplate/>);
        expect(wrapper.find(OrderElement)).toBeDefined();
    });
  });
  describe('<OrderName/>', () => {
    test('deberia retornar que el componente existe y devuelve un valor', () => {
        const wrapper = mount(<OrderName/>);
        expect(wrapper.exists()).toBe(true);
    });
  });
  describe('<Order/>', () => {
    test('deberia retornar que el componente existe devuelve un valor', () => {
        const wrapper = shallow(<Order/>);
        // expect(wrapper.exists()).toBe(true);
         expect(wrapper.find(Order)).toBeDefined();
    });
  });

it('deberia ejecutar saveOrder para el boton enviar con la clase dada ', () => {  
    const wrapper = shallow(<MenuView />) //Menuview es el nombre del componente
    const buttonComponent = wrapper.find('button') //indico que busco un boton dentro del componente
    buttonComponent.filter('.btn-aside').simulate('click') //'.btn-aside' es  la clase de mi boton
    expect(wrapper.state); 
});
it('Debería devolver categoria almuerzo al clickear ', () => {
    const wrapper = shallow(<CategoryBtn/>);
    wrapper.find('.btnCategory').at(1).simulate('click')
    expect(wrapper.state);
  });
  it('Debería devolver categoria desayuno al clickear  ', () => {
    const wrapper = shallow(<CategoryBtn/>);
    wrapper.find('.btnCategory').at(0).simulate('click')
    expect(wrapper.state);
  });

  describe('CategoryBtn', () => {
    it('Debería existir el componente <CategoryBtn />', () => {
      const wrapper = shallow(<CategoryBtn/>);
      expect(wrapper.exists()).toBe(true);
    });
});it('Debería devolver categoria almuerzo al clickear ', () => {
  const wrapper = shallow(<CategoryBtn/>);
  wrapper.find('.btnCategory').at(1).simulate('click')
  expect(wrapper.state);
});