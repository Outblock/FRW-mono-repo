import fs from 'fs'
import path from 'path'

const fsPromises = fs.promises

let cadebceScripts = {}

const underscoreToCamelCase = (fileName) => {
  let name = fileName.replace(/_([a-z])/g, function (match, letter) {
    return letter.toUpperCase()
  })

  name = name.replace('Nft', 'NFT')
  name = name.replace('Ft', 'FT')

  return name
}

const readDirRecursive = async (dirPath) => {
  // let resolvedPath = path.resolve(dirPath)

  let files = await fsPromises.readdir(dirPath)

  for (file of files) {
    const filePath = path.join(dirPath, file)

    let stats = await fsPromises.stat(filePath)
    // console.log(stats)
    if (stats.isDirectory()) {
      await readDirRecursive(filePath)
    } else {
      if (filePath.indexOf('.cdc') == -1 || filePath.indexOf('_test.cdc') > 0)
        continue
      const fileContent = await fsPromises.readFile(filePath, 'utf8')
      // console.log(`Content of ${filePath}: ${data}`)
      const pathArr = filePath.split('/')
      const key = pathArr[pathArr.length - 2]
      let fileName = pathArr[pathArr.length - 1].split('.')[0]
      fileName = underscoreToCamelCase(fileName)
      // const base64Script = base64encode(fileContent)
      if (cadebceScripts[key]) {
        cadebceScripts[key] = {
          ...cadebceScripts[key],
          [fileName]: fileContent,
        }
      } else {
        cadebceScripts[key] = { [fileName]: fileContent }
      }
    }
  }
  return cadebceScripts
}

export const readCadenceScripts = async (path = './') => {
  return await readDirRecursive(path)
}

export const readScript = async (path) => {
  const fileContent = await fsPromises.readFile(path, 'utf8')
  return fileContent
}
