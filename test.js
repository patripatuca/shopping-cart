import {calcularTotal,calcularPeso} from './index';
import { equal } from "assert";

describe(('Cálculo del total'), () => {
  it('carrito vacio',()=>{ equal(calcularTotal([]),0)})
  it('comprar pan', () => { equal(calcularTotal([{producto:"pan",precio:100}]),100) })
  it('comprar pan y leche', () => { equal(calcularTotal([{producto:"pan",precio:100},
  {producto:"leche",precio:100}]),200)});
   it('comprar huevos', () => { equal(calcularTotal([{producto:"huevo",precio:30, cantidad:12}
  ]),360)});

})
describe(('cálculo del peso'),()=>{
  it('carrito  vacio',()=>{equal(calcularPeso([]),0)});
  it('peso pan',()=>{equal(calcularPeso([{producto:"pan",peso:80}]),80)})
  it('peso pan',()=>{equal(calcularPeso([{producto:"pan",peso:80, cantidad:2}]),160)})
 
})
