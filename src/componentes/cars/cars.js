import './cars.scss'
import react, { Component } from 'react';
import { useState } from 'react';
//import InfoList from '../../mocks/infoList';





export default function CarsBox (){

    const carros = ['BMW Série 1', 'Corsa']

    const listCarBox = carros.map(
        (c) => <li> {c} </li>
    )
          

    return(
        <div className="carsContainer">
            
        </div>
    );
}