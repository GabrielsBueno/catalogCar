import './carsList.scss'
import List from './../../mocks/infoList'
import Cars from '../cars/cars';
import { Image } from 'semantic-ui-react';
import Imagens from './../../img/produtosImg/BMW i Vision Circular.jpg'

import {useState} from 'react'


export default function CarsList(){


    const listCarBox = List.map(
        (x, i) => 
        <div className='listCarBox' key={i}> 
           <div>
               <Image src={x.photo}></Image>
            </div>
           <h2>{x.name}</h2>
           <h3>{x.year}</h3>
        </div>
    )

    return(
        <div className="carsList">
            <div className="tittleContainer">
                {listCarBox}    
            </div>
        </div>
    );
}