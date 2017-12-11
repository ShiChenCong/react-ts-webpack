import React from "react";
declare function require(arg:string): any;
import name = ScoreAnalysis.info;

export default class Test extends React.Component<any, any> {

    public props: any;
    private name: string; 
    constructor(props) {
        super(props);
        this.state = {
            name: "ssss",
        };
    }
    public  render() {
        return (
            <div>
                Welcome! haha
                <img src={require("./assets/images/scc.png")}/>
            </div>
        );
    }
}

