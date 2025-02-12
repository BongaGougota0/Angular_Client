export class ResponseDto {
    constructor(
        private message:string,
        private statusCode: string,
    private datetime: Date){
        
    }
}
