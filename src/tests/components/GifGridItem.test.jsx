import React from 'react'
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"




describe('Pruebas en <GifGridItem/>', () => {

    const title = 'Un titulo';
    const url = 'https:localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe mostrar el componente correctamente ', async () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tner un parrafo con el title', () => {
     const p = wrapper.find('p');
     expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
       const img = wrapper.find('img');
       expect(img.prop('src')).toBe(url);
       expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animate__fadeIn', () => {
      const div = wrapper.find('div');
    //   console.log(div.hasClass('animate__fadeIn'));
      expect(div.hasClass('animate__fadeIn')).toBe(true);
    });
    
    
    
        
})
