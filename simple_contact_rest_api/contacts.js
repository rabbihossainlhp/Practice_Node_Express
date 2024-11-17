class Contacts {
    constructor(){
        this.contacts = [];
    }

    //post/create method...
    GetContact(){
        return this.contacts 
    }


    GetSingleContact(id){
        return this.contacts.find(contact => contact.id === id);
    }

    
    CreateContact(contact){
        contact.id = this.contacts.length+1;
        this.contacts.push(contact);
        return contact;
    }


    UpdateContact(id,updateInfo){
        let index = this.contacts.findIndex(contact => contact.id === id);
        this.contacts[index].name = updateInfo.name || this.contacts[index].name;
        this.contacts[index].email = updateInfo.email || this.contacts[index].email;
        this.contacts[index].phone = updateInfo.phone || this.contacts[index].phone;
        return this.contacts[index];
    }

    DeleteContact(id){
        let index = this.contacts.findIndex(contact => contact.id === id);
        let store = this.contacts[index];
        this.contacts.filter(contact => contact.id != id);
        return store;
    }
}



module.exports = new Contacts();