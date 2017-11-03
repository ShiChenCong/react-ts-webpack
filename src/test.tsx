import React from "react";
// import a from "./tes";
interface IProps {
    foo: string;
  }
fetch('/api/v2/book/1220562').then((a) => {return a.json()}).then((err) => {
    console.log(err)
})

// fetch('https://api.douban.com/v2/book/1220562').then((a) => {return a.json()}).then((err) => {
//     console.log(err)
// })
export default class Test extends React.Component<any, any> {
    // private state = { name: "scc" };
    public props: any;
    private name: string; 
    // private state: any;
    constructor(props) {
        super(props);
        this.state = {
            name: "ssss",
        };
    }
    public  render() {
        // console.log(this.props.changeValue);
        // console.log(this.state);
        return (
            <div /*onClick = {this.props.changeValue}*/>this is tsx demo</div>
        );
    }
}

// const a = 1;
// function indentity<T>(arg: T): T {
//     return arg;
// }
// const b = indentity<number>(2);
// console.log(b);
