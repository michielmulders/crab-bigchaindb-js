import { aKey, bKey } from './keypair'
import bdbOrm from './initdb'

// Functions
var createAsset = (keypair, payload) => {

  (bdbOrm.car
    .create({
        keypair: keypair,
        data: payload
    })
    .then(asset => {
      // asset.metadata
      console.log('\nid')
      console.log(asset.id)

      console.log('\ndata')
      console.log(asset.data)

      console.log('\nhistory')
      console.log(asset.transactionHistory)

      return asset.id
    }))

}


// Create two assets
createAsset(aKey, {'vin': '1234', 'manufacturer': 'BMW'})
createAsset(aKey, {'vin': '5678', 'manufacturer': 'Mercedes'})