import './ProductoVenta.css'
import {HiOutlineHeart, HiOutlineCheck, HiOutlineShieldCheck} from 'react-icons/hi'
import {IoIosReturnLeft} from 'react-icons/io'
import {IoTrophyOutline} from 'react-icons/io5' ;
export default function ProductoVenta () {
    return ( 
        <div className='cont-pv'> 

            <div className='estado'> Nuevo | 4 Vendidos</div>

            <div className='row-pv'>
                <h1 className='h1-pv'>ROLAND TR-8S RHYTHM PERFORMER</h1>
                <div className='HeartIcon'> <HiOutlineHeart/> </div>
            </div>

            <div className='price'>
                <div className='div-pv'>
                <span className='pre'>$168.000 <h9 className='h9-p'>00</h9></span>
                <span className='h9'>en 6x $28.000,12 </span>
                <a className='more' href='#'> Ver los medios de pago </a>
                </div>
               
                
                
               
            </div>

            <div className='card-pv'>
                <div className='checkIcon'><HiOutlineCheck/></div>
                <div className='div-pv'>
                
                    <span className='title-pv'>Llega gratis mañana</span>
                    <span className='bene-pv'>Beneficios mercado puntos</span>
                    <span className='detalle-pv'></span>
                    <a className='more2' href='#'> Ver más formas de entrega </a>
                </div>
            </div>

            <div className='devolucion'>
           
           <div className='div-pv'>
           <div className='io'> <span className='icon'>< IoIosReturnLeft/> </span>
            <span className='title-pv2'>Devolución gratis</span>
            <hr></hr>
             <span className='estado2'>Tenés 30 días desde que lo recibís</span>
             <hr></hr>
            <a className='more3' href='#'> Conocer más</a>
            </div>
            </div>
            </div>


            <div className='color'>
                Color: <strong> Negro </strong>
            </div>

            <div className='color'>
                Color de Luz: <strong> Verde </strong>
            </div>

            <div className='cantidad-pv'>
                <p> Cantidad: </p>
                <strong className='stg-pv'> 1 unidad </strong>
                <input className='inp-pv' type='number' value=''/>
                <span className='sp-pv'>(7 disponibles)</span>

            </div>

            <div className='boton-pv'>
                <button className='solid'> Comprar ahora</button>
                <button className='agregar'> Agregar al carrito </button>
            </div>

            <div className='beneficios-pv'>
                <li className='li-pv'>
                    <div className='shiedIcon'><HiOutlineShieldCheck/></div>
                    <p className='p-pv'> Compra Protegida,
                        <span className='sp-pv'>Recibe el producto que esperabas o te devolvemos tu dinero.</span>
                    </p>
                </li>
                
                <li className='li-pv'>
                    <div className='copaIcon'><IoTrophyOutline/></div>
                    <p className='p-pv2'> Mercado Puntos. <span className='sp-pv'>Sumas 4703 puntos</span>
                        
                    </p>
                </li>
            </div>


        </div>
    )
}