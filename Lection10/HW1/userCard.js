const user = {
  name: "Alex",
  age: 30,
  country: "USA",
  email: "alex@gmail.com",
  phone: "+14254354546",
  getUserInfo: function () {
    return `Name: ${this.name},\nAge: ${this.age},\nCountry: ${this.country},\nEmail: ${this.email},\nPhone: ${this.phone}`;
  },
};

console.log(user.getUserInfo());
