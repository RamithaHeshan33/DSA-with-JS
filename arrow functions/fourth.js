this.name = "Ramitha";

const obj =  {
    name: "Heshan",
    normal: function() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
}

console.log(this.name); // Ramitha

obj.normal(); // Heshan

obj.arrow(); // Ramitha