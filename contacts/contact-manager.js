const fs = require('fs');
const FILE_PATH = './data.json'

function readData() {
    const fileContent = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
}

function writeData(data) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

function addContact(name, number, email) {
    const data = readData();

    const maxId = data.contacts.length > 0 
        ? Math.max(...data.contacts.map(contact => contact.id))
        : 0

    const newContact = {
        id: maxId + 1,
        name: name,
        number: number,
        email: email
    }
    data.contacts.push(newContact);
    writeData(data);
    console.log(`Contact '${name}' added successfully`);
}

function viewContacts() {
    const data = readData();

    if(data.contacts.length === 0) {
        console.log('No contacts found');
        return;
    }
    data.contacts.forEach(contact => {
        console.log(`ID: ${contact.id} | Name: ${contact.name} | Number: ${contact.number} | Email: ${contact.email}`)
    });
}

function updateContact(id, newName, newNumber, newEmail) {
    const data = readData();
    const index = data.contacts.findIndex(contact => contact.id === id);

    if(index === -1) {
        console.log(`Contact with ID: ${id} does not exist.`);
        return;
    }
    data.contacts[index].name = newName;
    data.contacts[index].number = newNumber;
    data.contacts[index].email = newEmail;
    writeData(data);
    console.log(`Contact ID: ${id} updated successfully`);
}

function deleteContact(id) {
    const data = readData();
    const index = data.contacts.findIndex(contact => contact.id === id);

    if(index === -1) {
        console.log(`Contact with ID: ${id} does not exist.`);
        return;
    }
    const deletedContact = data.contacts[index];
    data.contacts.splice(index, 1);
    writeData(data);
    console.log(`Contact '${deletedContact.name}' deleted successfully`);    
}

module.exports = { addContact, viewContacts, updateContact, deleteContact };