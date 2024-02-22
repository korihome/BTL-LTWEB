const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const CART_LIST_NAME = 'CART_LIST_NAME'
const CAKE_CONTENT_NAME = 'CAKE_CONTENT_NAME'
const LIST_BUY_NAME = 'LIST_BUY_NAME'

const LIST_CAKE = [
    {
        id: 'cake1',
        name: 'Bánh kem tươi socola hoa quả nhiệt đới',
        des: 'Cốt và kem socola. Trang trí thêm xoài, dâu tây, việt quất',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-1.webp'
    },
    {
        id: 'cake2',
        name: 'Bánh kem tươi socola dâu tây xoài việt quất',
        des: 'Cốt và kem socola. Trang trí thêm xoài, dâu tây, việt quất.',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-2.webp'
    },
    {
        id: 'cake3',
        name: 'Bánh kem tươi dâu tây xoài việt quất',
        des: 'Kem tươi, cốt vani mứt xoài, nhân xoài tươi. Trang trí thêm xoài tươi, dâu tây, việt quất',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-3.webp'
    },
    {
        id: 'cake4',
        name: 'Bánh kem tươi xoài nhiệt đới',
        des: 'Kem tươi, cốt vani mứt xoài, nhân xoài tươi. Trang trí thêm xoài tươi.',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-4.webp'
    },
    {
        id: 'cake5',
        name: 'Bánh kem màu loang dâu Đà Lạt',
        des: '2-3 lớp cốt bánh vani kết hợp cùng kem tươi và mứt dâu tây. Mặt bánh và thành bánh trang trí màu loang',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-5.webp'
    },
    {
        id: 'cake6',
        name: 'Bánh kem sữa chua dâu tây',
        des: 'Cốt vani, kem sữa chua, nhân mứt dâu tây. Trang trí thêm dâu tây tươi ở trên',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-6.webp'
    },
    {
        id: 'cake7',
        name: 'Bánh hồng kem chảy dâu Đà Lạt',
        des: 'Cốt và kem socola. Trang trí thêm xoài, dâu tây, việt quất',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-7.webp'
    },
    {
        id: 'cake8',
        name: 'Bánh red velvet tròn dâu Đà Lạt',
        des: 'Cốt và kem socola. Trang trí thêm xoài, dâu tây, việt quất',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-8.webp'
    },
    {
        id: 'cake9',
        name: 'Mousse sữa chua việt quất',
        des: 'Cốt và kem socola. Trang trí thêm xoài, dâu tây, việt quất',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-9.webp'
    },
    {
        id: 'cake10',
        name: 'Mousse bơ sữa dừa',
        des: 'Cốt và kem socola. Trang trí thêm xoài, dâu tây, việt quất',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-10.webp'
    },
    {
        id: 'cake11',
        name: 'Mousse măng cụt sữa dừa',
        des: 'Cốt vani 2 lớp mousse: sữa dừa và măng cụt, trên cùng phủ lớp tráng gương cùng vị măng cụt. Trang trí thêm việt quất, dâu tây',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-11.webp'
    },
    {
        id: 'cake12',
        name: 'Bánh Tiramisu',
        des: 'Cốt socola thấm quyện với vị cà phê đăng đắng và rượu rum thơm nức. Thêm lớp kem tiramisu làm từ phô mai Mascarpone và kem tươi Whipping nhập khẩu loại xịn.',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-12.webp'
    },
    {
        id: 'cake13',
        name: 'Mousse sữa chua thạch nho',
        des: 'Cốt vani xen kẽ các tầng bánh. Tầng dưới là mousse sữa chua, tầng trên là lớp thạch nho siêu bắt mắt. Trang trí thêm chút lá hương thảo',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-13.webp'
    },
    {
        id: 'cake14',
        name: 'Mousse sữa chua măng cụt',
        des: 'Cốt vani với 2 lớp mousse măng cụ, bên trên là lớp tráng gương cùng vị măng cụt. Trang trí thêm việt quất, dâu tây cắt nhỏ và hoa socola',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-14.webp'
    },
    {
        id: 'cake15',
        name: 'Bánh kem Sữa Chua Hoa Quả Tươi',
        des: '2 - 3 lớp cốt bánh vani, xen giữa lớp cốt là phần nhân mứt xoài và xoài tươi. Trên mặt bánh được trang trí thêm phần hoa quả tươi chất lượng gồm xoài, nho và việt_quất',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-15.webp'
    },
    {
        id: 'cake16',
        name: 'Bánh kem Tim Red Velvet',
        des: 'Bánh hình trái tim, 2 - 3 lớp cốt Red Velvet. Kết hợp cùng với phần kem vị sữa chua thơm dịu. Mặt bánh và chân bánh được phủ lớp vụn bánh red velvet.',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-16.webp'
    },
    {
        id: 'cake17',
        name: 'Bánh kem Cà phê Cốt dừa',
        des: 'Cốt bánh vị cafe Robusta kết hợp cùng kem được đánh cùng cốt dừa, trang trí thêm quả việt quất và lá hương thảo. Lớp kem ngoài Gồm 2 tầng màu (nâu, be) phù hợp với phái mạnh.',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-17.webp'
    },
    {
        id: 'cake18',
        name: 'Bánh kem Xoài Dừa',
        des: 'Bánh cốt vani trang trí 2 lớp kem dừa và kem xoài, phía trên thêm xoài cắt và cơm dừa.',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-18.webp'
    },
    {
        id: 'cake19',
        name: 'Bánh kem Green Tea',
        des: 'Cốt bánh trà xanh hương nhài và kem tươi vị trà xanh, trang trí socola trắng.',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-19.webp'
    },
    {
        id: 'cake20',
        name: 'Mousse matcha yogurt',
        des: 'Gồm 2 lớp mousse: trà xanh và sữa chua, với 2 lớp cốt trà xanh xen kẽ. Hương vị tươi mát, không quá ngọt. Phía trên là lớp thạch tráng gương vị trà xanh, trang trí thêm hoa socola trắng.',
        cost: '220000',
        dealoff: '399000',
        size: '13 * 17',
        url: './img/piccake/cake-20.webp'
    },

]

const LIST_CART = JSON.parse(localStorage.getItem(CART_LIST_NAME)) || { list: [] }
const LIST_BUY = JSON.parse(localStorage.getItem(LIST_BUY_NAME)) || { cakes: [] }

const CHECK_CART = 'CHECK_CART'
const isCheckCart = JSON.parse(localStorage.getItem(CHECK_CART)) || { isCheckCart: false }

function removeDuplicates(arr1, arr2) {
    return arr1.filter(item => {
        let isvalid = true
        for (let i = 0; i < arr2.length; i++) {
            isvalid = item.id != arr2[i].id
            if (!isvalid) {
                break
            }
        }
        return isvalid
    })
}

const handleUpdateCart = () => {
    if (isCheckCart.isCheckCart == true) {
        console.log(LIST_BUY.cakes)
        LIST_CART.list = removeDuplicates(LIST_CART.list, LIST_BUY.cakes)

        localStorage.setItem(CART_LIST_NAME, JSON.stringify(LIST_CART))

        localStorage.setItem(CHECK_CART, JSON.stringify({
            isCheckCart: false
        }))
    }
}

handleUpdateCart()

$('#count-cart').innerHTML = `${LIST_CART.list.length}`

const RenderListPro = (list) => {
    let html = ''
    list.forEach((item, index) => {
        html += `
        <div class="product__item">
            <div>
                <a href="ProPage.html" onclick="handleShowCake(${index})">
                    <img src="${item.url}" alt="">
                    <div class="item-text">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-des">${item.des}</p>
                        <div>
                            <p><span>${item.dealoff}đ</span> <span>${item.cost}đ</span></p>
                            <p>${item.size} cm<sup>2</sup></p>
                            <p>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </p>
                        </div>
                    </div>
                </a>
                <button onclick="handleAddtoCart(${index})">Add to cart</button>
            </div>
        </div>
        `
    })
    $('.product__list').innerHTML = html
}

RenderListPro(LIST_CAKE)

//add to cart
const handleAddtoCart = (index) => {
    let check = true
    for (let i = 0; i < LIST_CART.list.length; i++) {
        if (LIST_CART.list[i].id === LIST_CAKE[index].id) {
            check = false
            break
        }
    }
    if (check) {
        LIST_CART.list.push(LIST_CAKE[index])
        localStorage.setItem(CART_LIST_NAME, JSON.stringify(LIST_CART))
        $('#count-cart').innerHTML = `${LIST_CART.list.length}`
    }
}

//chuyen trang chi tiet san pham
const handleShowCake = (index) => {
    localStorage.setItem(CAKE_CONTENT_NAME, JSON.stringify({
        list: [
            {
                ...LIST_CAKE[index]
            }
        ]
    }))
}

//Xu ly hover navigation bar
const handleHoverMenu = () => {
    let nav = document.getElementById("mainNav");
    let listnav = $$('#mainNav a')
    listnav.forEach(item => {
        item.addEventListener('click', () => {
            let current = $('a.active')
            current.classList.remove("active")
            item.classList.add('active')
        })
    })
}

handleHoverMenu()

//Chuyen tieng viet co dau sang khong dau
function rmVNeseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
}

// Xử lý khi mô tả của sản phẩm quá dài thì nên cắt bớt
const MakeItShort = () => {
    let desPro = $$('.item-des');

    desPro.forEach(item => {
        let text = item.innerHTML
        if (text.length > 65) {
            text = text.slice(0, 50) + "...";
        }
        item.innerHTML = text
    })
}

MakeItShort()

//Xu ly tim kiem san pham
const handleSearchPro = () => {
    const input = $('#search')
    input.addEventListener('input', () => {
        let searchWords = input.value.toLowerCase().split(" ")
        let array = LIST_CAKE
        array = array.filter(item => {
            let check = true
            console.log(rmVNeseTones(item.name).toLowerCase())
            searchWords.forEach(item2 => {
                if (!item.name.toLowerCase().includes(item2, 0) && !rmVNeseTones(item.name).toLowerCase().includes(item2, 0)) {
                    check = false
                }
            })
            return check
        })
        RenderListPro(array)
        MakeItShort()
    })
}

handleSearchPro()

//show menu
const handleShowMenu = (e) => {
    if (![...e.target.classList].includes('active')) {
        $('#mainNav').style.display = "block"
        e.target.classList.add('active')
    }
    else {
        $('#mainNav').style.display = "none"
        e.target.classList.remove('active')
    }
}