const { json } = require('body-parser');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const { v4: uuidv4 } = require('uuid');


class Database{
    read(){
        console.log("read")
        return readFile('data/notes.json',{encoding: 'utf-8'})
    }
    write(notes){
        return writeFile('data/notes.json',JSON.stringify(notes) )
    }
    getNotes(){
       return this.read().then((notes) => {
        console.log("notes")
           console.log(notes)
            let currentNote 
            try { 
                currentNote = [].concat(JSON.parse(notes))
                
            } catch (error) {
                currentNote = []
            }
            return currentNote
        })
    }

    addNotes(notes){
        const{title, text} = notes
        const addNote = {title, text, id:uuidv4()}

        return this.getNotes().then((notes) => [...notes, addNote])
        .then((updated) => this.write(updated))
        .then(() => addNote)
    }
}

module.exports = new Database()