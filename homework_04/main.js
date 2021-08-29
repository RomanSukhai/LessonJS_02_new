let array = [1,2,3,45,67,21,23,98,42,63,35,88,100]
function filter(a,b) {
    array.sort(function(a, b){return a - b}); 
   for (let first = 0; first < array.length; first++) {
       if (a==array[first]) {
           a=first
       }
   }
   for (let second = 0; second < array.length; second++) {
        if (b==array[second]) {
            b=second+1
        }
}
console.log(array.splice(a,b));
}
filter(1,88)
