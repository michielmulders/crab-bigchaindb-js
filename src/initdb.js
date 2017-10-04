import Orm from 'bigchaindb-orm'

const orm = new Orm('https://test.ipdb.io/api/v1/', { app_id: 'dfa777d5', app_key: '7208ea9bf95b43ce3a95f7c727e33fb9' })
orm.define('car', 'https://example.com/v1/car')

module.exports = orm