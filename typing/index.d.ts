declare namespace ScoreAnalysis{
    interface info {
        name: string;
        age: number;
    }
}
declare module 'ScoreAnalysis' {
    export = ScoreAnalysis;
}