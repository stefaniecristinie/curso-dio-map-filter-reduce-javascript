function mapSemThis(arr) {
    return arr.map(function (item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10]; //Array e item.

console.log(mapSemThis(nums));