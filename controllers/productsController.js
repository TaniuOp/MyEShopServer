const { send } = require('express/lib/response');
const pool = require('../utils/pgdb');

const productsControl = {
    getAllProducts: async (res) => {
        try {
            const conection = await pool.connect();
            const allProducts = await conection.query(
                'SELECT * FROM products'
            )
            const productsData = await allProducts.rows
            console.log(productsData)
        } catch (e) {
            console.log(e.message)
        }
    }
};

module.exports = productsControl;
