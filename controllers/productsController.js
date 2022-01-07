const pool = require('../utils/pgdb');

const productsControl = {
    // Get all products 
   getAllProducts:async () => {
        let client,result;
        try{
            client = await pool.connect(); // Espera a abrir conexion
            const data = await client.query(`select * from products;`)
            result = data.rows
            console.log(result)
        }catch(err){
            console.log(err);
            throw err;
        }finally{
            client.release();    
            
        }
        return result
    },

    getProductByName:async (name) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`SELECT * FROM products WHERE name =$1;`
            , [name])
        result = data.rows
        console.log(result)
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
},

    getProductByManufacturer: async (id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`SELECT P.*, M.* FROM products as P
        INNER JOIN manufacturer as M
        on P.fk_id_manufacturer=M.id 
        WHERE M.id=$1;`
            , [id])
        result = data.rows
        console.log(result)
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
};

    // Find by name 
    // getProductsByName: async (name) => {
    //     let client;
    //     try {
    //         const conection = await pool.connect();
    //         const productName = await conection.query(
    //             'SELECT * FROM products WHERE name =$1;'
    //             , [name])
    //         const productData = await productName.rows
    //         console.log(productData)
    //     } catch (err) {
    //         console.log(err);
    //         throw err;
    //     } finally {
    //         client.release();
    //     }
    //     return productData
    // },


    // 
    // getAllProducts: async (res) => {
    //     try {
    //         const conection = await pool.connect();
    //         const allProducts = await conection.query(
    //             'SELECT * FROM products'
    //         )
    //         const productsData = await allProducts.rows
    //         console.log(productsData)
    //         return productsData
    //     } catch (e) {
    //         console.log(e.message)
    //     }
    // }






// };


// const productsControl = {
//     getAllProducts,
//     getProductByName,
//     getProductByManufacturer
// }


module.exports = productsControl;
