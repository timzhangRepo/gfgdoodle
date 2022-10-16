import React from "react";
import './menu.css'
import {Navigate} from 'react-router-dom';


import IMG_6852 from '../../resources/imgs/IMG_6852.jpg';
export class Menu extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {
            redirect:false
        }
    }
    render(){
        return <div className={"headerWrap"}>
            <div className={"menuTab"}>
                <a href={"/adopt"}>OUR DOGS</a>
            </div>
            <div className={'mainTitle'}>
                <div>Best Friend</div>
                <div>Golden Doodles</div>
            </div>
            <div className={"menuTab"}>
                <a href={"/"}>OUR STORY</a>
            </div>
        </div>
    }
}

export default Menu;