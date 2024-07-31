// // Task 1

// const objectToMap = (obj) => new Map(Object.entries(obj))

// // let map = new Map
// // for (const key in obj) {
// //     map.set(key, obj[key])
// // }
// // console.log(map);



// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// // console.log(objectToMap(obj));

// function removeDigits(str) {
//     let set = new Set(str)
//     return set
// }
// // console.log(removeDigits("aaabc123dddeeff456"));

// let newMap = new Map();

// newMap.set("key1", "value1");
// newMap.set("key2", "value2");
// newMap.set("key2", "value2");
// newMap.set("key3", "value3");

// let obj2 = {}
// newMap.forEach((value, key) => obj2[key] = value);
// // console.log(obj2);


// // {key1: "value1", key2: "value2", key3: "value3"}
// // console.log(newMap);

// let userData = [{
//     name: "Eshmat",
//     age: 28
// },
// {
//     name: "Eshmat2",
//     age: 14
// },
// {
//     name: "Eshmat2",
//     age: 38
// },
// ]

// let newArr = userData.map((val) => ({
//     age: val.age + 10,
//     name: val.name
// }))

// // console.log(newArr);

// function handleLogin() {
//     const username = document.getElementById("username").value
//     const password = document.getElementById("password").value
//     console.log(username, password);
// }
// handleLogin()

// const isShow = document.getElementById("isShow")
// isShow.addEventListener("click",function (e) {
//     e.preventDefault()
//     const password = document.getElementById("password")
//     const type = password.getAttribute("type")
//     if (type === "password") {
//         password.setAttribute("type","text")
//     }
//     else if (type === "text") {
//         password.setAttribute("type", "password")
//     }
// })
// const btn = document.getElementById("btn")
// btn.addEventListener("click", function (e) {
//     e.preventDefault()
//     let result = ""
//    const number1 = +document.getElementById("number1").value
//     const number2 = +document.getElementById("number2").value
//     const operations = document.getElementById("operations").value
//    if (operations === "+") {
//     result = number1 + number2
//    }
//     else if (operations === "-") {
//         result = number1 - number2
//     }
//     else if (operations === "*") {
//         result = number1 * number2
//     }
//     else if (operations === "/") {
//         result = number1 / number2
//     }
//     document.getElementById("result").innerText = result
// })
const save = document.getElementById("save")
save.addEventListener("click", function (e) {
    e.preventDefault()
    const result = document.getElementById("result")
    const width = document.getElementById("width").value
    const height = document.getElementById("width").value
    const borderRadius = document.getElementById("border_radius").value
    const bgColor = document.getElementById("bg_color").value
    result.style.width = width +"px"
    result.style.height = height +"px"
    result.style.borderRadius = borderRadius +"px"
    result.style.backgroundColor = bgColor
    

    // document.getElementById("result").innerText = result
})




