import React from "react";
import Menu from "../menu/menu";
import './home.css'
import IMG_6852 from "../../resources/imgs/IMG_6852.jpg";
import IMG_8590 from "../../resources/imgs/IMG_8590.jpg";
import IMG_6705 from "../../resources/imgs/IMG_6705.jpg";

import {specialization, about}from "../../resources/texts/stories"
export class Home extends React.Component{


    render(){
        return <div className="mainWrap">
            <div>
                <Menu></Menu>
            </div>
            <div className={"banner"}>Our Story</div>
            <div className={"homeGallery"}>
                <img id={"hp1"} src={IMG_8590} alt={"hp1"}></img>
                <img id={"hp2"} src={IMG_6852} alt={"hp2"}></img>
                <img id={"hp3"} src={IMG_6705} alt={"hp3"}></img>
            </div>
            <h2 className={"why"}>WHY US</h2>
            <div className={"paragraphBox"}>
                <p className={"paragraph"}>{specialization}</p>
            </div>
            <h2 className={"why"}>ABOUT OUR DOGS</h2>
            <div className={"paragraphBox"}>
                <p className={"paragraph"}>{about}</p>
            </div>
        </div>
    }
}