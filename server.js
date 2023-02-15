const newFolderName = function (folders) {

  let folderName = 'New Folder'
  let folderNumber = 1
  while (folders.includes(folderName)) {
    folderName = `New Folder (${folderNumber})`
    folderNumber++
  }

  console.log(folderName) // can replace with return statement if necessary

}

newFolderName([])
newFolderName(["New Folder"])
newFolderName(['stinky', 'New Folder', 'New Folder (1)', 'New Folder (2)'])
