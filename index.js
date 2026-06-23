const { addContact, viewContacts, updateContact, deleteContact } = require('./contacts/contact-manager');

const operation = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];
const arg3 = process.argv[5]; 
const arg4 = process.argv[6]; 

if(operation === 'add') {
    addContact(arg1, arg2, arg3);
} else if(operation === 'view') {
    viewContacts();
} else if(operation === 'update') {
    updateContact(Number(arg1), arg2, arg3, arg4);
} else if(operation === 'delete') {
    deleteContact(Number(arg1));
} else {
    console.log('Invalid operation. Write add, view, update, or delete');
}