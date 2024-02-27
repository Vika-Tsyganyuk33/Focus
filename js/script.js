//1 задание
const mainForm = document.forms[0];
const mainFormInput = mainForm.first_input;
const mainFormInputPlaceholder = mainFormInput.placeholder;
mainFormInput.addEventListener("focus", function(e){
    mainFormInput.placeholder=""
});
mainFormInput.addEventListener("blur", function (e){
    mainFormInput.placeholder="Привет, мир!"
});

//2 задание
const mainForm2 = document.forms[1]; 
const mainFormInput2 = mainForm2.second_input; 
mainFormInput2.focus();
setTimeout(() => {
mainFormInput2.blur();
},3000);

//3 задание
const mainForm3 = document.forms[2];
const mainFormInput3 = mainForm3.third_input;
mainFormInput3.addEventListener("input", function (event){
    console.log(`value: ${mainFormInput3.value}`);
});

//4 задание
const mainForm4 = document.forms[3];
const mainFormInput4 = mainForm4.four_input;
mainFormInput4.addEventListener("copy", function (event){
    console.log("Копируем");
});
mainFormInput4.addEventListener("paste", function (event){
    console.log("Вставляем");
});
mainFormInput4.addEventListener("cut", function (event){
    console.log("Вырезаем");
});