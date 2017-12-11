declare namespace index{
    interface info {
        name: string;
        age: number;
    }
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}
declare module 'index' {//import ScoreAnalysis from 'ScoreAnalysis'
    export = index; //import info = ScoreAnalysis.info;
}