export default class Cell {
    constructor(rank , file) {
        this.element = document.createElement('div');
        this.rank = rank;
        this.file = file;
        this.element.setAttribute('data-rank',rank);
        this.element.setAttribute('data-file',file);
        this.element.classList.add('cell');
    }
}