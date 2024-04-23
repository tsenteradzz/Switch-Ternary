//  switch syntax >>

// switch (expression) {
//     case value1:
//     // code to be executed...
//     break;

//    case value2:
//     // code...
//     break;

//    default:
//     code to be executed if no other cases can be executed...
// }

function lectureAssistant(){
let day = prompt("შეიყვანე კვირის დღე (ქართული ასეოებით :D)")


switch (day) {
    case "ორშაბათი":
    alert("დღეს შენ არ გაქვს ლექცია.");
    break;
      
    case "სამშაბათი":
    alert("დღეს შენ გაქვს ლექცია 18:00 საათზე.");
    break;

    case "ოთხშაბათი":
    alert("დღეს შენ არ გაქვს ლექცია.");
    break;

    case "ხუთშაბათი":
    alert("დღეს შენ გაქვს ლექცია 18:00 საათზე.");
    break;

    case "პარასკევი":
    alert("დღეს შენ არ გაქვს ლექცია");
    break;

    case "შაბათი":
    alert("დღეს შენ გაქვს ლექცია 18:00 საათზე.");
    break;

    case "კვირა":
    alert("დღეს შენ არ გაქვს ლექცია");
    break;
}
}



// ternary syntax >>

// condition ? expression_if_true : expression_if_false


let isRaining = false;

let weatherReport = isRaining ? "წაიღე ქოლგა რადგან გარეთ წვიმს არგატყუებ მართლა." : 
"გარეთ მზეა გადი გარეთ."

console.log(weatherReport);

let size = 0;

function updateSize() {
    size = document.getElementById("sizeNumber").value;
    
    // condition
    size >= 10 && size <= 13 
    // if true then ->
    ? (document.getElementById("showSize").innerHTML = "XS")
    // if false then ->
    : size >=14 && size <=17 
    ? (document.getElementById("showSize").innerHTML = "S")
    : size >=18 && size <=21 
    ? (document.getElementById("showSize").innerHTML = "M")
    : size >=22 && size <=25
    ? (document.getElementById("showSize").innerHTML = "L")
    : size >=26 && size <=30 
    ? (document.getElementById("showSize").innerHTML = "XL")
    : size >=31 && size <=35 
    ? (document.getElementById("showSize").innerHTML = "XXL")
    : (document.getElementById("showSize").innerHTML = "თქვენი ზომა არ ვიცით.")
}
