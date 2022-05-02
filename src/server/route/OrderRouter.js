const express = require('express')
const OrderController = require('../controller/OrderProductController')

const router = express.Router()
router.post('/orders',OrderController.createOrder)
router.put('/orders/:id', OrderController.updateOrder)
router.delete('/orders/:id', OrderController.deleteOrder)
router.get('/orders/:id', OrderController.getOrderById)
router.get('/orders', OrderController.getOrders)
module.exports = router