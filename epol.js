function result() {
    let arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").replace(/^\s*/,'').replace(/\s*$/,'').split(" ");
    let arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").replace(/^\s*/,'').replace(/\s*$/,'').split(" ");
    let count = 0;
    let value0 = "0";
    let value1 = "1";
    let str = " ";
    if (arr1.length == 9) {
        if (arr2.length > 9) {
            alert("Размерность второго массива не должна превышать 9");
        }
        else {
            for (let i = 0; i < 9; i++) {
                for (let k = 0; k < 9; k++) {
                    if (arr1[i] == (arr2[k]))
                        count++;
                }
                if (count > 0)
                    (str = str + value1)
                else
                    (str = str + value0);
                count = 0;
            }
            console.log(str);
            document.getElementById('result').innerHTML = "Полученная строка : " + str;
        }
    }
    else {
        alert("Размерность первого массива не соответствует 9");
    }
}