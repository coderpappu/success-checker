const manName = document.quiz.name;
const professionCheck = document.quiz.profession;
const successManCheck = document.quiz.successMan;
const suce_hour_manCheck = document.quiz.suce_hour_man;
const aim_success = document.quiz.aim_success;


const submit = document.querySelector('#submit');

submit.addEventListener("click", function () {
    alert( " প্রিয় "+ manName.value + " নিচে আপনার ফলাফল টি দেখুন । ধন্যবাদ । Developer : Pappu Dey ")
    var  output
    if ((professionCheck.value == "student" || professionCheck.value == "Businesman") && (successManCheck.value == "successY") && (suce_hour_manCheck.value == "more_hours" || suce_hour_manCheck.value == "5") && (aim_success.value == "Yes")) {
        
        output = "প্রিয় "+ manName.value +" আপনি জীবনে সাফল্য অর্জন করতে পারবেন । আপনি চেষ্টা চালিয়ে যান । আপনার বর্তমান চেষ্টা ১০০% ঠিক আছে । "
    }else if ((professionCheck.value == "student" || professionCheck.value == "Businesman") && (successManCheck.value == "successY") && (suce_hour_manCheck.value == "3") && (aim_success.value == "Yes")){
        output = "প্রিয় "+ manName.value +" আপনি নিজের লক্ষ্যে পৌছানোর জন্য আপনার পড়া লেখা বা আপনার কাজে আর একটু সময় বাড়িয়ে দিন । আপনি জীবনে সাফল্য অর্জন করতে পারবেন । 🥰  "
    }
    else if ((professionCheck.value == "student" || professionCheck.value == "Businesman") && (successManCheck.value == "successY") && (suce_hour_manCheck.value == "" || suce_hour_manCheck.value == "5" || suce_hour_manCheck.value == "more_hours") && (aim_success.value == "No")){
        output = "প্রিয় "+ manName.value +" প্রত্যেক মানুয়ের জীবনে একটা করে লক্ষ্য থাকা প্রয়োজন । কারন আপনার যদি কোনো লক্ষ্য না থাকে তাহলে আপনি জীবনে কোনো দিনও সফলতা অর্জন করতে পারবেন না । আপনার লক্ষ্য স্থীর করুন  । আপনি জীবনে সাফল্য অর্জন করতে পারবেন । 🥰  "
    }
    else{
        output = "প্রিয় "+ manName.value +" আপনি জীবনে সাফল্য অর্জন করতে পারবেন । কিন্তু আপনার চেষ্টা আরও বাড়াতে হবে । 😍 "
    }
    document.querySelector("#show").innerHTML = output
})