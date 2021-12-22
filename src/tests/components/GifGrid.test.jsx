import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');






describe('Pruebas en el <GifGrid/>', () => {
   
    const category = 'Goku';
    // const wrapper = shallow(<GifGrid category={ category }/>);
    console.log('la categoria es: ' , category);
   
   
    test('debe de mostrarse correctamente', () => {
        // const gifs = [{
        //     id: 'ABC',
        //     url: 'https:localhost/cualquier/cosa.jpg',
        //     title: 'cualquier cosa'
        // }];
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    
    test('debe de mostrar items cuando se cargan imagenes useFethGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https:localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa'
        }];
        const wrapper = shallow(<GifGrid category={ category }/>);
        useFetchGifs.mockReturnValue({ data: gifs, loading: false });



        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
        
     
   });
   
    
});
