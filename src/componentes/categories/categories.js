import './categories.scss'


import { Button, Form, Madal } from 'semantic-ui-react';

export default function categories(){

    function modelo(){
        return(
            <div></div>
        );
    }

    function ano(){
        return(
            <div></div>
        );
    }

    return(
        <div className="categoriesContainer">
            <div className='header'>
                <h2>Filtros</h2>
                <Form className='filterContainer'>
                    <Button className='buttonCategories'>Modelo</Button>
                </Form>
                <Form className='filterContainer'>
                    <Button className='buttonCategories'> Ano </Button>
                </Form>
            </div>
        </div>
    );
}