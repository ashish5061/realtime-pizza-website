const authController = require('../app/http/controllers/authController')
const homeController = require('../app/http/controllers/homeController')
const cartController = require('../app/http/controllers/customers/cartController')
const orderController = require('../app/http/controllers/customers/orderController')
const AdminorderController = require('../app/http/controllers/admin/orderController')
const StatusController = require('../app/http/controllers/admin/statusController')
const guest = require('../app/http/middlewares/guest')
const auth = require('../app/http/middlewares/auth')
const admin = require('../app/http/middlewares/admin')

module.exports = function(app) {


    app.get('/', homeController().index) 

    
    app.get('/login', guest, authController().login)
    app.post('/login', authController().postlogin)
    
    app.get('/register',guest,authController().register)
    app.post('/register',authController().postRegister)

    app.post('/logout',authController().logout)


    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
    // Customer routes
    app.post('/orders', auth, orderController().store)
    app.get('/customer/orders', auth, orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)

    // Admin routes
    app.get('/admin/orders', auth, admin,AdminorderController().index)
    app.post('/admin/order/status',  admin,StatusController().update)
   
   
}


