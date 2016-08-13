export default class Hello {
    constructor(name) {
        this.name = name;
    }

    greet() {
        document.getElementById('name').innerHTML = `${this.name}`;
    }
}
