class Stopwatch {
    constructor() {

    }
    start = () => {
        this.startTime = Date.now();
    }
    stop = () => {
        this.stopTime = Date.now();
    }
    getTime = () => {
        console.log(this.stopTime - this.startTime);
    }

}

let timer = new Stopwatch();
timer.start();
setTimeout(timer.stop, 2000);
setTimeout(timer.getTime, 3000);
