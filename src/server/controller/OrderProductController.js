const Order = require('../model/OrderProduct')


//POST
createOrder = (req,res) =>{
    const body =req.body
    if (!body){
        return res.status(400).json({
            success:false,
            error:'you must provide a product'
        })
    }

    const order = new Order(body)
    if (!order){
        return res.status(400).json({
            success:false,
            error:'err'
        })
    }

    order
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: order._id,
                message: 'order created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'order not created!',
            })
        })
}

//GET
getOrderById = async (req, res) => {
    await Order.findOne({_id:req.params.id},(err,order) => {
        if (err){
            return res.status(400).json({ success:false,error:err})
        }
        if (!order) {
            return res
                .status(404)
                .json({ success: false, error: `order not found` })
        }
        return res.status(200).json({ success: true, data: order })
    }).catch(err => console.log(err))
}


//DELETE
deleteOrder = async (req, res) => {
    await Order.findOneAndDelete({ _id: req.params.id }, (err, order) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!order) {
            return res
                .status(404)
                .json({ success: false, error: `order not found` })
        }

        return res.status(200).json({ success: true, data: order })
    }).catch(err => console.log(err))
}


//PUT
updateOrder = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Order.findOne({ _id: req.params.id }, (err, order) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        order.username = body.username
        order.phoneNumber = body.phoneNumber
        order.userComment = body.userComment
        order
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: order._id,
                    message: 'Order updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Order not updated!',
                })
            })
    })
}

getOrders= async (req, res) => {
    await Order.find({}, (err, orders) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!orders.length) {
            return res
                .status(404)
                .json({ success: false, error: `orders not found` })
        }
        return res.status(200).json({ success: true, data: orders })
    }).catch(err => console.log(err))
}

module.exports = {
    createOrder,
    getOrderById,
    deleteOrder,
    updateOrder,
    getOrders
}