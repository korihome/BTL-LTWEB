const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const CART_LIST_NAME = 'CART_LIST_NAME'
const LIST_CART = JSON.parse(localStorage.getItem(CART_LIST_NAME)) || { list: [] }

const CAKE_CONTENT_NAME = 'CAKE_CONTENT_NAME'
const CHECK_CART = 'CHECK_CART'

let COST = 0;
let CHECK_CR = 0;
let LIST_BUY = { list: [] }

//count list cart
const handleCountCart = () => {
    $('#count-cart').innerHTML = `${LIST_CART.list.length}`
    $('#count').innerHTML = `${LIST_CART.list.length}`
}
handleCountCart()

const RenderListCart = (list) => {
    let html = ''
    if (LIST_CART.list.length != 0) {
        list.forEach((item, index) => {
            html += `
            <div class="list__item">
                    <input type="checkbox" name="" id="" onchange="handleCheckBox(${index}, event)">
                    <img src="${item.url}" alt="">
                    <div class="item__infor">
                        <p class="item__name">${item.name}</p>
                        <p class="item__des">${item.des}</p>
                        <p class="item__cost"><span>${item.dealoff}đ</span> <span>${item.cost}đ</span></p>
                        <p class="item__size">${item.size} cm<sup>2</sup></p>
                    </div>
                    <button id="btn-remove" onclick="handleRemoveCart(${index})">x</button>
                </div>
            `
        })
        html = `<ul>${html}</ul>`
        $('#list__cart').innerHTML = html

    }
    else {
        $('#list').style.display = 'none'
        $('#list-empty').style.height = '100vh'
        html = `
            <div class="empty-cart">
                <img id="empty-img" src="../img/emptycart.png" alt="">
                <h1 id="empty-text">Giỏ Hàng Trống!!!</h1>
            </div>
        `
        $('#menu').style.display = "none"
        $('#list-empty').innerHTML = html
    }
}
RenderListCart(LIST_CART.list)

// remove to cart
const handleRemoveCart = (index) => {
    LIST_CART.list = LIST_CART.list.filter((item) => {
        return item.id != LIST_CART.list[index].id
    })
    localStorage.setItem(CART_LIST_NAME, JSON.stringify(LIST_CART))
    RenderListCart(LIST_CART.list)

    COST = 0
    CHECK_CR = 0
    $('#cost').innerHTML = `${COST}`
    $('#count-cr').innerHTML = `${CHECK_CR}`
    $('#count-cart').innerHTML = `${LIST_CART.list.length}`
    $('#all').checked = false

}

const handleCheckBox = (index, e) => {
    if (e.target.checked) {
        COST += (LIST_CART.list[index].cost * 1)
        CHECK_CR++;
    }
    else {
        $('#all').checked = false
        COST -= (LIST_CART.list[index].cost * 1)
        CHECK_CR--;
    }
    $('#cost').innerHTML = `${COST}`
    $('#count-cr').innerHTML = `${CHECK_CR}`
}

const handleCheckAll = (e) => {
    let checklist = [...$$('input')]
    if (e.target.checked) {
        checklist.forEach((item, index) => {
            if (!item.checked) {
                item.checked = true
                COST += (LIST_CART.list[index].cost * 1)
                CHECK_CR++;
            }
        })
        $('#cost').innerHTML = `${COST}`
        $('#count-cr').innerHTML = `${CHECK_CR}`
    }
    else {
        checklist.forEach(item => {
            item.checked = false
        })
        COST = 0
        CHECK_CR = 0
        $('#cost').innerHTML = `${COST}`
        $('#count-cr').innerHTML = `${CHECK_CR}`
    }
}

//handle buy
const handleBuy = (e) => {
    let checklist = [...$$('input')]

    let isCheck = false
    for (let i = 0; i < checklist.length - 1; i++) {
        if (checklist[i].checked) {
            LIST_BUY.list.push(LIST_CART.list[i])
            checklist[i].checked = false
            isCheck = true
        }
    }
    if (isCheck == true) {
        $('#all').checked = false
        localStorage.setItem(CAKE_CONTENT_NAME, JSON.stringify(LIST_BUY))
        localStorage.setItem(CHECK_CART, JSON.stringify({
            isCheckCart: true
        }))
    } else {
        e.preventDefault()
    }
}