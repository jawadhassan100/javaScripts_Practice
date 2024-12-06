function createContacts() {

    let contacts = []

    const addContact = (name , number) => {
        if(!name || !number){
            console.log("Name and Number are required");
            return
        }
        contacts.push({name , number})
        console.log(`Contact Added: ${name} - ${number}`)
    }

    const getAllContacts = () => {
        if (contacts.length === 0 ) {
            console.log("No contacts found");
            return
        }
        console.log("Your Contacts")
        contacts.forEach((contact , index)=>{
            console.log(`${index + 1}.  ${contact.name} - ${contact.number}`);
            
        })
    }

    const searchContact = (name) => {
        const result = contacts.filter((contact)=>
            contact.name.toLowerCase().includes(name.toLowerCase())
        )
        if (result.length === 0) {
            console.log(`No contacts found with the name: ${name}`);
            return;
          }
          console.log(`Search Results for "${name}":`);
          result.forEach((contact ) => console.log(`${contact.name} - ${contact.number}`))
    }
    
    const deleteContact = (name) => {
        const initialLength = contacts.length;
        contacts = contacts.filter(
          (contact) => contact.name.toLowerCase() !== name.toLowerCase()
        );
        if (contacts.length < initialLength) {
          console.log(`Contact "${name}" deleted.`);
        } else {
          console.log(`No contact found with the name: ${name}`);
        }
      };

      return{
        addContact,
        getAllContacts,
        searchContact,
        deleteContact
      }
}

// Create a contact book instance
const myContacts = createContacts();

myContacts.addContact("jawad" , "03425645900")
myContacts.addContact("sunny" , "03145919787")
myContacts.addContact("ffff" , "12456789")
myContacts.getAllContacts()
myContacts.searchContact("sunny")
myContacts.deleteContact("ffff")
myContacts.getAllContacts()
