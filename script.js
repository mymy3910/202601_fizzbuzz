// ボタン取得
const button = document.getElementById("checkAge");
const input = document.getElementById("inputAge");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    const input_number = Number(input.value);

    // 表示リセット
   result.innerHTML = "";

    for (let i = 0; i <= input_number; i++) {
    const li = document.createElement("li");

    if (i % 3 === 0 && i % 5 === 0) {
        li.textContent = "FizzBuzz!!";
    } else if (i % 3 === 0) {
        li.textContent = "Fizz";
    } else if (i % 5 === 0) {
        li.textContent = "Buzz";
    } else {
        li.textContent = i;
    }

    result.appendChild(li);
    }
});
