import React from 'react'
import './Product.css'
import Info from './Info'
import Garantia from './Garantia'
import InfoVendedor from './InfoVendedor.js'
import ProductoVenta from './ProductoVenta'
import Garantia2 from './Garantia2'



const Product = () => {
  return (
    <div className='container-p'>
      
      <div className='panel'>
      <ProductoVenta/>
      <InfoVendedor/>
      <Garantia2/> 
      <Garantia/>
        <div className='columna'>
        
      
          <div classname='divga'>
          <div className='galeria'>
            <img className='img-p' src='https://http2.mlstatic.com/D_NQ_NP_778807-MLA29586763218_032019-O.webp' alt='producto'></img>
          </div>
         
          </div>
          <Info/>
          
          
          <div className='info'></div>
          
          <div className='column'>
            <div className='producto-venta'></div>
            
            <div className='info-vendedor'></div>
            
            <div className='galeria'></div>
            
          </div>
          </div>
        </div>
        </div>
  )
}

export default Product
