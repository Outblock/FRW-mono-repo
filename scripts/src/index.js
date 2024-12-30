import * as fcl from '@onflow/fcl'
import { readCadenceScripts } from './cadence'

let scriptsMap = null

export const exportScripts = async (path) => {
  scriptsMap = await readCadenceScripts(path)
  return scriptsMap
}

export const queryScripts = async (path, args, addressMapping = {}) => {
  let pathArr = path.split('/')
  if (scriptsMap == null) {
    scriptsMap = await readCadenceScripts()
  }

  let script = scriptsMap[pathArr[0]][pathArr[1]]
  if (script == null) {
    throw new Error(`Script ${path} not found`)
  }
  let keys = Object.keys(addressMapping)

  keys.forEach((key) => {
    let addr = addressMapping[key]
    if (addr) {
      script = script.replace(key, addressMapping[key])
    }
  })

  const response = await fcl.send([
    fcl.script(script),
    fcl.args(args),
  ])
  return await fcl.decode(response)
}
