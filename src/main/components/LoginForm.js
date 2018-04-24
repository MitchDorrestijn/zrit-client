import React, {Component} from 'react';
import {Button, Form, Label, Input} from 'reactstrap';
import Logo from '../assets/img/logo.gif';

export default class LoginForm extends Component {
    render() {
        return (
            <div className="grandParentContaniner">
                <div className="parentContainer">
                    <Form>
                        <header>
                            <img className="mb-4" src={Logo} alt="logo Zorgrit"/>
                        </header>

                        <Label for="inputUserName" className="float-left"><b>Gebruikersnaam</b></Label>
                        <Input type="text" id="inputUserName" className="mb-3 " placeholder="Gebruikersnaam" autofocus/>

                        <Label for="inputPassword" className="float-left"><b>Wachtwoord</b></Label>
                        <Input type="password" id="inputPassword" className="mb-4" placeholder="Password"/>

                        <Button color="primary" size="lg" block type="submit">Inloggen</Button>
                    </Form>
                </div>
            </div>
        )
    }
}