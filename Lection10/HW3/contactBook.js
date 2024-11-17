const contactBook = {
  contacts: [
    {
      name: "Alex",
      phone: "+14253453454",
      email: "alex@gmail.com",
    },
    {
      name: "Jack",
      phone: "+14253467677",
      email: "jack@gmail.com",
    },
    {
      name: "Mary",
      phone: "+14254567656",
      email: "mary@gmail.com",
    },
  ],

  findContactByName(name) {
    return this.contacts.find((contact) => contact.name === name);
  },

  addContact(name, phone, email) {
    const existingContact = this.contacts.find(
      (contact) => contact.phone === phone
    );
    if (!existingContact) {
      const newContact = { name, phone, email };
      this.contacts.push(newContact);
      return this.contacts;
    } else {
      return "Contact already exists!";
    }
  },
};
console.log(contactBook.findContactByName("Mary"));
console.log(contactBook.addContact("Bob", "+14253453458", "bob@gmail.com"));
console.log(contactBook.addContact("Alex", "+14253453454", "alex@gmail.com"));
