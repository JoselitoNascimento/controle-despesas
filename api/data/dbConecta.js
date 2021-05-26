const sql = require('mssql')
const sqlConfig = require('../../config/dbConfig');

module.exports = () => {
    async () => {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            await sql.connect(sqlConfig)
            const result = await sql.query`select * from mytable where id = ${value}`
            console.dir(result)
            return result
        } catch (err) {
            return err
        }
    }
}