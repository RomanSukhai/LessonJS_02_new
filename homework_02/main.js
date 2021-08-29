
let styles = ["Джаз","Блюз"];
styles.push("Рок-н-Ролл");
for(let i= 0; i<styles.length;i++){
    if (styles[i]==styles[styles.length-2]) {
        styles[i]="Класика"
    }
}
console.log( styles);
styles.splice("Джаз");
console.log(styles[0]);
styles.push("Реп","Реггі")
console.log( styles);






