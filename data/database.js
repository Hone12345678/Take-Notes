const { json } = require('body-parser');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFileSync)
const writeFile = util.promisify(fs.writeFileSync)

class Database{
    read(){
        return readFile('data/notes.json', 'utf-8')
    }
    write(notes){
        return writeFile('data/notes.json',JSON.stringify(notes) )
    }
    getNotes(){
        return this.read().then((notes) => {
            let currentNote 
            try { 
                currentNote = [].concat(JSON.parse)
                
            } catch (error) {
                currentNote = []
            }
            return currentNote
        })
    }

    addNotes(notes){
        const{title, text} = notes
        const addNote = {title, text, id:1}

        return this.getNotes().then((notes) => [...notes, addNote])
        .then((updated) => this.write(updated))
        .then(() => addNote)
    }
}

module.exports = new Database()