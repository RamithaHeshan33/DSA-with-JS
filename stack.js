class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if(this.items.length == 0) {
            console.log("Empty array!");
        }
        else {
            this.items.pop();
        }
    }

    front() {
        if(this.items.length == 0) {
            console.error("Empty array!")
        }
        else {
            console.log(this.items[0]);
        }
    }

    isEmpty() {
        if(this.items.length == 0) {
            console.log("Empty array!");
        }
        else {
            console.log("Not an empty array!");
        }
    }

    find(value) {
        let target = this.items.find((target) => target == value);
        if(target) {
            console.log(value + " Found!");
        }
        else {
            console.log(value + " Not found!")
        }
    }

    print() {
        console.log(this.items.join(" <- "));
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // 10 <- 20 <- 30

stack.pop();
stack.print(); // 10 <- 20

stack.front(); // 10
stack.isEmpty(); // Not an empty array
stack.find(10); // 10 Found!
stack.find(30); // 30 Found!