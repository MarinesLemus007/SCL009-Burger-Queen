import React from 'react';
import { configure , shallow , mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuView from '../views/MenuView'
import LunchBtn from '../components/LunchBtn'
<<<<<<< HEAD
import Btn from '../components/Btn'
=======
>>>>>>> b1f7913b807eed429ee47223ea9cf615e1eee423
import CategoryBtn from '../components/CategoryBtn';
import OrderTemplate from '../components/OrderTemplate'
import OrderName from '../components/OrderName';
import OrderElement from '../components/OrderElement';
import OrderRecordTemplate from '../components/OrderRecordTemplate';
import toJson from 'enzyme-to-json';
import OrderDeliveryTemplate from '../components/OrderDeliveryTemplate';
import Navbar from '../components/Navbar';
import Btn from '../components/Btn';

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
 


it('deberia ejecutar saveOrder para el boton enviar con la clase dada ', () => {  
    const wrapper = shallow(<MenuView />) //Menuview es el nombre del componente
    const buttonComponent = wrapper.find('button') //indico que busco un boton dentro del componente
    buttonComponent.filter('.btn-aside').simulate('click') //'.btn-aside' es  la clase de mi boton
    expect(wrapper.state); 
});


  describe('CategoryBtn', () => {
    it('Debería existir el componente <CategoryBtn />', () => {
      const wrapper = shallow(<CategoryBtn/>);
      expect(wrapper.exists()).toBe(true);
    });
});

it('se renderea correctamente el componente OrderTemplate', () => {  
  const component = shallow(<OrderTemplate />);
  expect(toJson(component)).toMatchSnapshot();
});
it('se renderea correctamente el componente OrderRecordTemplate', () => {  
  const component = shallow(<OrderRecordTemplate />);
  expect(toJson(component)).toMatchSnapshot();
});
it('se renderea correctamente el componente OrderRecordTemplate', () => {  
  const component = shallow(<OrderDeliveryTemplate />);
  expect(toJson(component)).toMatchSnapshot();
});
it('se renderea correctamente el componente Navbar', () => {  
  const component = shallow(<Navbar />);
  expect(toJson(component)).toMatchSnapshot();
});
it('se renderea correctamente el componente Btn', () => {  
  const component = shallow(<Btn name="hola"/>);
  expect(toJson(component)).toMatchSnapshot();
});

