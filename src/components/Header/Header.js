import React from 'react'
import './header.css'
import {IoSearchOutline} from 'react-icons/io5'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {BsCart2} from 'react-icons/bs'


const Header = () => {
  return (
    <div className='containerh'>
      <div className='cont'>
      <nav className='wrapperh'>
        <img className='img' src='https://premioseikon.com/wp-content/uploads/2021/10/Logo_Meli.png' alt='no-img'/>
        </nav>

        <div className='inp-div'>
        <input className='inp-h' type='text' placeholder='Buscar productos, marcas y más...' />
        <button className='inp-b' ><IoSearchOutline/></button>
        </div>
      </div>

      <div className='extra'>
      <a className='ex' href='#'> Categorías </a>
      <a className='ex' href='#'> Ofertas   </a>
      <a className='ex' href='#'> Historial  </a>
      <a className='ex' href='#'> Supermercado  </a>
      <a className='ex' href='#'> Moda  </a>
      <a className='ex' href='#'> Vender  </a>
      <a className='ex' href='#'> Ayuda  </a>
      </div>

<div className='extra2'>
      <a className='ex3' href='#'> Creá tu cuenta </a>
      <a className='ex3' href='#'> Ingresá   </a>
      <a className='ex3' href='#'> Mis compras </a>
      <a className='ex2' href='#'> <BsCart2/> </a>
     

</div>
      
    </div>
  )
}

export default Header
