var elements = [
    {
        id: 1,
        title: 'PopIn',
        price: 10,
        pictureUrl: 'https://m.media-amazon.com/images/I/71lxZaWBKSL._AC_SL1000_.jpg',
        category: 'pañales de tela',
        stock: 30
    },
    {
        id: 2,
        title: 'Pack x6 Covertores',
        price: 45,
        pictureUrl: 'data:image/jpeg;base64,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',
        category: 'pañales de tela',
        stock: 10
    },
    {
        id: 3,
        title: 'Pack HappyFlutte',
        price: 50,
        pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXK87-b7v0YtGFdB9XAXQejz6rcsvPY5-u8g&usqp=CAU',
        category: 'pañales de tela',
        stock: 47
    },
    {
        id: 4,
        title: 'Abs Cañamo',
        price: 25,
        pictureUrl: 'data:image/jpeg;base64,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',
        category: 'absorventes',
        stock: 120
    },
    {
        id: 5,
        title: 'Abs Bamboo Charcoal',
        price: 30,
        pictureUrl: 'data:image/jpeg;base64,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',
        category: 'absorventes',
        stock: 100
    },
    {
        id: 6,
        title: 'Abs algodón',
        price: 20,
        pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TkFQ9LKmNSooSdZNEiAKxE3Qpa6fktN-EQ&usqp=CAU',
        category: 'absorventes',
        stock: 109
    },
    {
        id: 7,
        title: 'Covertor',
        price: 20,
        pictureUrl: 'https://i.pinimg.com/originals/f8/25/ea/f825eae323d61cbdb51e1e3bcfc88d29.jpg',
        category: 'pañales de tela',
        stock: 38
    },
    {
        id: 8,
        title: 'Covertor híbrido',
        price: 20,
        pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufNhy0rmMoGrPHf-JgV5cjjPPIrkIkUo3NKS7YucII_sI5CLwCfBL4MQpTrKlKpRImO8&usqp=CAU',
        category: 'pañales de tela',
        stock: 29
    },
    {
        id: 9,
        title: 'Covertor recien nacido',
        price: 20,
        pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEP0jKjJDV4WLDPXYxaRa7druALG8tzA70w&usqp=CAU',
        category: 'pañales de tela',
        stock: 46
    },
    {
        id: 10,
        title: 'Toallita ecológica',
        price: 20,
        pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbbwGVFFe-oeNvTScs26T-_hYpP1j1gQOpA&usqp=CAU',
        category: 'higiene femenina',
        stock: 46
    },
    {
        id: 11,
        title: 'Copita Menstrual',
        price: 20,
        pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AXh2Bi__tbQ1rlWYwnh8uPMwAbYFVal_KQ&usqp=CAU',
        category: 'higiene femenina',
        stock: 46
    },
    {
        id: 12,
        title: 'Toallita ecológica',
        price: 20,
        pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDruRlQ57Nri8axZMrU2FnGwqlXV2I6nE8g&usqp=CAU',
        category: 'higiene femenina',
        stock: 46
    },
]
const categories = [
    {id:'pañales de tela', description:'Pañales de Tela'},
    {id:'absorbentes', description:'Absorbentes para pañales'},
    {id:'covertores', description:'Covertor de Tela'},
    {id:'higiene femenina', description:'Higiene ecológico para la mujer'},
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 5000)
    })
}

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(elements)
        }, 3000 )
    })
}

export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(elements[0])
        }, 2000 )
    })
}