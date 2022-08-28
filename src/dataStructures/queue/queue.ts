
export default class Queue {
    queueObj: Object
    head: number
    tail: number
    constructor() {
        this.queueObj = {};
        this.head = 0;
        this.tail = 0;
    }
    enQueue: Function = (item: any) => {
        this.queueObj[this.tail] = item;
        this.tail++;
        return this.queueObj;
    }
    deQueue: Function = () => {
        const size: number = this.tail - this.head;
        if (size <= 0) return console.log("Queue deQueue failed as Queue is empty");
        delete this.queueObj[this.head];
        if (this.head === this.tail) {
            this.head = 0;
            this.head = 0;
        }
        return this.queueObj
    }
}