let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6]
let dict = {
    0: '周日',
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六',
}
let arr2 = arr.map((value) => {
    return dict[value]
})
console.log(arr2) // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']

let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
let scores2 = scores.filter((value) => {
    return value > 60
})
console.log(scores2) //  [95,91,82,72,85,67,66, 91]

let scores3 = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
let sum = scores3.reduce((sum, n) => {
    let temp = n % 2 === 0 ? 0 : n
    sum += temp
    return sum
}, 0)
console.log(sum) // 奇数之和：598