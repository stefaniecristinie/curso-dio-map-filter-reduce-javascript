const maca = { //this
	value: 2,
};

const laranja = { //this
	value: 3,
};

function mapComThis(arr, thisArg) {
	return arr.map(function (item) {
		return item * this.value;
	}, thisArg);
}

const nums = [1, 2] //Array e itens (primeiro 1, depois o 2)

console.log('this -> maçã', mapComThis(nums, maca)); //imprime = this -> maçã [ 2, 4]

console.log('this -> laranja', mapComThis(nums, laranja));