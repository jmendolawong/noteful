
export const findNote = (notes = [], noteId) => {
  const note = notes.find(note => note.id === parseInt(noteId))
  return note
}


export const findFolder = (folders = [], folderId) => {
  const folder = folders.find(folder => parseInt(folder.id) === folderId)
  return folder
}

export const folderNotes = (notes = [], folderId) => {
  if (!folderId) {
    return notes
  } else {
    console.log(notes[0])
    console.log(`folderId: ` + typeof notes[0].folderid)
    console.log(`folderId: ` + typeof folderId)
    const theseNotes = notes.filter(note => note.folderid === parseInt(folderId))
    return theseNotes
  }
}