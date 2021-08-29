let arr = ["Джаз","Блюз","Рок-н-Ролл"];
function find(values) {
   let c = arr.indexOf(values);
    if (c==-1) {
        console.log("Вибачте,такого в масиві не знайдено");
    }else{
        console.log("Номер данного значення: "+(arr.indexOf(values)+1));
    }
}
find("Джаз");





