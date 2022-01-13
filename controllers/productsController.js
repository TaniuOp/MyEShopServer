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

    getProductByName:async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`SELECT * FROM products WHERE title =$1;`
            , [title])
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

module.exports = productsControl;
