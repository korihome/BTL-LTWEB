function removeDuplicates(arr1, arr2) {
    return arr1.filter(item => {
        let isvalid = true
        for (let i = 0; i < arr2.length; i++) {
            isvalid = item != arr2[i]
            if (!isvalid) {
                break
            }
        }
        return isvalid
    })
}

let a = [1, 3, 4, 5, 6]
let b = [1, 3,4]
let c = removeDuplicates(a, b)
console.log(c)