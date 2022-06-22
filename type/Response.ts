export interface IResponse<T>{
    info: {
        count:number
    },
    results:Array<T>
}