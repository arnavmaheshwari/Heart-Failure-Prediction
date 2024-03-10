export class HeartFailurePred {
    public Age:any;
    public Sex:any;
    public ChestPainType:any;
    public RestingBP:any;
    public Cholestrol:any;
    public FastingBS:any;
    public RestingECG: any;
    public MaxHR: any;
    public ExerciseAngina:any;
    public Oldpeak: any;
    public ST_Slope:any;

    constructor(Age:any,Sex:any,ChestPainType:any,RestingBP:any, Cholestrol:any,FastingBS:any,RestingECG:any,MaxHR:any,ExerciseAngina:any,Oldpeak:any,ST_Slope:any){
        this.Age=Age;
        this.Sex=Sex;
        this.ChestPainType=ChestPainType;
        this.RestingBP = RestingBP;
        this.Cholestrol=Cholestrol;
        this.FastingBS=FastingBS;
        this.RestingECG=RestingECG;
        this.MaxHR=MaxHR;
        this.ExerciseAngina=ExerciseAngina;
        this.Oldpeak=Oldpeak;
        this.ST_Slope=ST_Slope;
    }
}
