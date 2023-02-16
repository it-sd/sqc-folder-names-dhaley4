const newFolderName = function (folders) {

  let folderName = 'New Folder'
  let folderNumber = 2
  while (folders.includes(folderName)) {
    folderName = `New Folder (${folderNumber})`
    folderNumber++
  }

  return folderName

}

module.exports = { newFolderName }