const { render } = require("@testing-library/react")
const { GifItem } = require("../../src/components/GifItem")


describe('Pruebas en <GifItem />', () => { 
    
    const title = 'Dragon Ball';
    const url = 'https://dragon-ball.com/goku-ssjb.jpg'

    test('Debe hacer match con el snapshot', () => { 
        const { container}=render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

     })
 })