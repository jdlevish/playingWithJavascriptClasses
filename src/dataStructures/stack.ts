export default class Stack {
    data: any;
    top: number;
    constructor(data: any, top: number) {
        this.data = [data];
        this.top = -1;
    }
    push: Function = (data: any) => {
        this.top++
        this.data[this.top] = data
        return this.data

    }
    pop: Function = () => {
        if (this.top < 0) return undefined;
        const poppedTop: any = this.data[this.top];
        this.top--;
        return poppedTop;
    }

}


