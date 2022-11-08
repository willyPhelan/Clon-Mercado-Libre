import React from 'react'
import './InfoVendedor.css'
import {IoMdRibbon} from 'react-icons/io' ;
import {HiOutlineLocationMarker, HiOutlineChatAlt2, HiOutlineClock} from 'react-icons/hi' ;


export default function InfoVendedor() {
  return (
    <div className='conten'>
      <h5 className='title-i'> Informacíon sobre el vendedor </h5>
      <div className='card'>
        <div className='LocationIcon'>
        <HiOutlineLocationMarker/>
        </div>
        <div className='div-i'>
          <p className='p-i'> Ubicación </p>
          <strong className='stg'> Capital Federal, Buenos Aires </strong>
        </div>
      </div>

      <div className='card'>
        <div className='platiniumIcon'>
          <IoMdRibbon/>
        </div>
        <div className='vend'>
          <p className='plati'> MercadoLíder Platinum </p>
          <strong className='stg2' > ¡Es uno de los mejores del sitio! </strong>
        </div>
      </div>

      <div className='reputacion'>
        <div className='caja'>
          <ol className='ordered'>
          <li className='li l1'/>
          <li className='li l2'/>
          <li className='li l3'/>
          <li className='li l4'/>
          <li className='active li l5'/>
          </ol>
        </div>
      </div>

      <div className='rowI'>
        <div className='div-in1'>
          <strong className='stg-i'>9542</strong>
          <span className='span-i'> Ventas en los últimos 60 días </span>
        </div>
        <div className='div-in'>
          <strong className='stg-i'>
            <div className='supporIcon'><HiOutlineChatAlt2/></div>
          </strong>
            <span className='span-i'> Brinda buena atención </span>
        </div>

        <div className='div-in2'>
          <strong className='stg-i'>
            <div className='clockIcon'><HiOutlineClock/></div>
          </strong>
          <span className='span-i'> Entrega sus productos a tiempo </span>
        </div>
      </div>
      <a className='Link' href='#'> Ver más datos de este vendedor   </a>
      





      


    </div>
  )
}




