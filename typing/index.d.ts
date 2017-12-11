declare namespace ScoreAnalysis{
    interface info {
        name: string;
        age: number;
    }
}
declare module 'ScoreAnalysis' {//import ScoreAnalysis from 'ScoreAnalysis'
    export = ScoreAnalysis; //import info = ScoreAnalysis.info;
}