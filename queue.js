class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if(this.items.length != 0) {
            this.items.shift();
        }
        else{
            console.log("Empty Array");
        }
    }

    isEmpty() {
        if(this.items.length == 0) {
            console.log("Empty Array");
        }
        else {
            console.log("Not Empty");
        }
    }

    find(value) {
        let item = this.items.find((item) => item == value);
        if(item) {
            console.log("Found");
        }
        else {
            console.log("Not Found");
        }
    }
    
    front() {
        console.log(this.items[0]);
    }

    print() {
        console.log(this.items.join(" <- "));
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print(); // 10 <- 20 <- 30

queue.dequeue();
queue.print(); // 20 <- 30

queue.isEmpty(); // Not Empty
queue.front(); // 20

queue.find(20); // Found
queue.find(40); // Not Found