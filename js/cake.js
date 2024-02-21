const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const CART_LIST_NAME = 'CART_LIST_NAME'
const LIST_CART = JSON.parse(localStorage.getItem(CART_LIST_NAME)) || { list: [] }

const CAKE_CONTENT_NAME = 'CAKE_CONTENT_NAME'
const CAKE_CONTENT = JSON.parse(localStorage.getItem(CAKE_CONTENT_NAME))

const LIST_BUY_NAME = "LIST_BUY_NAME"

let COST = 0

const LIST_BUY = {
    cakes: []
}

const LIST_ITEM = [
    {
        id: 'item1',
        name: 'Hộp mica trong suốt',
        cost: '25000'
    },
    {
        id: 'item2',
        name: '10 thiệp sinh nhật 7x10cm',
        cost: '30000'
    },
    {
        id: 'item3',
        name: 'Bộ dao dĩa nhựa',
        cost: '10000'
    },
    {
        id: 'item4',
        name: 'Nến sinh nhật hình trái tim',
        cost: '7000'
    },
    {
        id: 'item5',
        name: 'Nến tuổi',
        cost: '5000'
    },
    {
        id: 'item6',
        name: 'Pháo bông',
        cost: '20000'
    },
    {
        id: 'item7',
        name: 'Mũ sinh nhật',
        cost: '5000'
    },
]

const RenderItem = () => {
    let html = ''
    LIST_ITEM.forEach((item, index) => {
        html += `
            <li>
                <input type="checkbox" name="checkItem" id="checkItem" onchange="handleCheckBox(${index}, event)">
                ${item.name} - ${item.cost}đ
            </li>
        `
    })

    return html
}

const RenderCakeContent = () => {

    let html = ''
    for (let i = 0; i < CAKE_CONTENT.list.length; i++) {
        COST += (CAKE_CONTENT.list[i].cost * 1)
        html += `
            <div class="list__item">
            <img src="${CAKE_CONTENT.list[i].url}" alt="">
            <div class="item__infor">
                <p class="item__name">${CAKE_CONTENT.list[i].name}</p>
                <p class="item__des">${CAKE_CONTENT.list[i].des}</p>
                <p class="item__cost"><span>${CAKE_CONTENT.list[i].dealoff}đ</span> <span>${CAKE_CONTENT.list[i].cost}đ</span></p>
                <p class="item__size">${CAKE_CONTENT.list[i].size} cm<sup>2</sup></p>
            </div>
            </div>
            `

    }
    $('#infor').innerHTML = `
                                <ul id="infor__pro">${html}</ul>
                                <ul id="infor__item">
                                    ${RenderItem()}
                                    <div id="infor__pay">
                                        <label for="">Phương thức thanh toán</label> <br>
                                        <select name="" id="payment">
                                            <option value="">Thanh toán khi nhận hàng</option>
                                            <option value="">ZaloPay</option>
                                            <option value="">MOMO</option>
                                        </select> <br>
                                        <label for="">Địa chỉ</label> <br>
                                        <select name="" id="address">
                                        <option value="">Địa chỉ 1</option>
                                        <option value="">Địa chỉ 2</option>
                                        </select> <br>
                                        <label for="">Tổng tiền</label>: <span id="cost">${COST}đ</span> <br>
                                        <button onclick="handleComplete()">HOÀN TẤT MUA HÀNG</button>
                                    </div>
                                </ul>
                            `

}

RenderCakeContent()

const handleChooseItem = () => {
    $$('#checkItem').forEach((item, index) => {
        item.addEventListener('change', () => {
            if (item.checked) {
                LIST_BUY.items.push(LIST_ITEM[index])
            }
            else {
                LIST_BUY.items.splice(index, 1)
            }
        });
    })
}

handleChooseItem()

//count list cart
const handleCountCart = () => {
    $('#count-cart').innerHTML = `${LIST_CART.list.length}`
}

handleCountCart()

//add to cart
const handleAddtoCart = () => {
    let check = true
    for (let i = 0; i < LIST_CART.list.length; i++) {
        if (LIST_CART.list[i].id === CAKE_CONTENT.id) {
            check = false
            break
        }
    }
    if (check) {
        LIST_CART.list.push(CAKE_CONTENT.list[0])
        localStorage.setItem(CART_LIST_NAME, JSON.stringify(LIST_CART))
        $('#count-cart').innerHTML = `${LIST_CART.list.length}`
    }
}

//checkbox item
const handleCheckBox = (index, e) => {
    if (e.target.checked) {
        COST += (LIST_ITEM[index].cost * 1)
    }
    else {
        COST -= (LIST_ITEM[index].cost * 1)
    }
    $('#cost').innerHTML = `${COST}đ`

}

const handleBuy = () => {
    LIST_BUY.cakes = [...CAKE_CONTENT.list]
    localStorage.setItem(LIST_BUY_NAME, JSON.stringify(LIST_BUY))
}


//complete buy
const handleComplete = () => {
    handleBuy()
    $('#complete').style.display = "block"
    $('#complete__content').style.opacity = "1"
    setTimeout(() => {
        $('#home').click()
    }, 500)
}

