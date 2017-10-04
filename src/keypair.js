import bip39 from 'bip39'
import * as driver from 'bigchaindb-driver'

// Keypairs
export const aKey = new driver.Ed25519Keypair(bip39.mnemonicToSeed("crabtutorial").slice(0, 32))
export const bKey = new driver.Ed25519Keypair(bip39.mnemonicToSeed("crabtutorial").slice(0, 32))