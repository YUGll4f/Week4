const express = require('express')
const app = express()

const products = [ 
    { id: 1, name: 'Laptop', price: 30000 }, 
    { id: 2, name: 'Smartphone', price: 15000 }, 
    { id: 3, name: 'Tablet', price: 12000 }, 
    { id: 4, name: 'Smartwatch', price: 8000 },
    { id: 5, name: 'Smart TV', price: 20000 },
    { id: 6, name: 'Smart Speaker', price: 4000 },
    { id: 7, name: 'Smart Bulb', price: 600 },
    { id: 8, name: 'Camera', price: 10000 },
    { id: 9, name: 'Gaming Console', price: 15000 },
    { id: 10, name: 'Smart Thermostat', price: 5000 }
]

app.use(express.json())

app.get('/products/searchByName', (req, res) => {
    const keyword = req.query.keyword
    if (!keyword) {
        return res.json({ message: 'No products found matching the name' })
    }
    const lowerCaseKeyword = keyword.toLowerCase()
    const result = products.filter(product => product.name.toLowerCase().includes(lowerCaseKeyword))
    res.json(result)
})

app.listen(3000, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:3000`)
})