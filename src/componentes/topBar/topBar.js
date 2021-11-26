
import './topBar.scss'
import { Button, Form, Modal } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Signup from '../../singup';
export default function topBar(){

    return(
        <div className="topBar">
            <div className="bemVindo"> Seja Bem Vindo</div>
            <Button class="ui button" onClick>
                <Link to='/'>Home</Link>
            </Button>

            <Button class="ui button" onClick>
                <Link to='/Signup'>Cadastre-se</Link>
            </Button>
        </div>
    );
}