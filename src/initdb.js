import Orm from 'bigchaindb-orm'

const orm = new Orm('https://test.ipdb.io/api/v1/', { app_id: 'app_id', app_key: 'app_key' })
orm.define('car', 'https://example.com/v1/car')

module.exports = orm