import React, {Component} from 'react';
import HomeImg from '../assets/img/home.jpg';

//this class takes care of rendering image on the left side of LoginPage
export default class LoginImg extends Component {
    render() {
        return (
            <div className="grandParentContaniner">
                <div className="parentContainer">
                    <img src={HomeImg} className="img-fluid" alt=""/>
                </div>
            </div>
        )
    }
}