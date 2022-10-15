import React from "react";
import './menu.css'

import IMG_6852 from '../../resources/imgs/IMG_6852.jpg';
class Menu extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {
            data: new Date()
        }
    }
    render(){
        return <div className={"headerWrap"}>
            <div className={"menuTab"}>OUR DOGS</div>
            <div className={'mainTitle'}>
                <div>Good Friends</div>
                <div>Golden Doodle</div>
            </div>
            <div className={"menuTab"}>OUR STORY</div>
        </div>
    }
}

export default Menu;