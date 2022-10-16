import React from "react";
import './dogs.css'
import IMG_9197 from '../../resources/imgs/IMG_9197.jpg';
import IMG_9170 from '../../resources/imgs/IMG_9170.jpg';

declare type stat = {
    image?: string;
    birthdate: string;
    ready: boolean;
    parents: string;
    gender: string;
}

export class Dogs extends React.Component {
     private pups: stat[] = [
        {
            image: IMG_9197,
            birthdate: "8/12/2022",
            ready: true,
            parents: "Paisley (12lbs) & Ruston (14lbs)",
            gender: "male"
        },
        {
            image: IMG_9170,
            birthdate: "8/12/2022",
            ready: true,
            parents: "Paisley (12lbs) & Ruston (14lbs)",
            gender: "female"
        },
    ]

    private getPupBox(pup: stat, index: number): JSX.Element{
        return <div key={index} className={"card"}>
            <img src={pup.image}/>
            <table className={"cardTable"}>
                <tbody>
                <tr>
                    <th>Birthdate:</th>
                    <td>{pup.birthdate}</td>
                </tr>
                <tr>
                    <th>Ready:</th>
                    <td>{pup.ready ? "Ready for adoption 😊" : "Coming Soon"}</td>
                </tr>
                <tr>
                    <th>Parents:</th>
                    <td>{pup.parents}</td>
                </tr>
                <tr>
                    <th>Gender:</th>
                    <td>{pup.gender}</td>
                </tr>
                </tbody>
            </table>
        </div>
    }

    render(){

       return <div className={"mainWrap"}>
           <div className={"banner"}>Adopt Your Pup</div>
           <div className={"cardContainer"}>
               {this.pups.map((pup, index):any => this.getPupBox(pup, index))}
           </div>
       </div>
    }
}