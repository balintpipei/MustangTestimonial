//consts
const body = document.querySelector("body");
const profile = document.getElementById("pics");
const customerName = document.getElementById("name");
const costumerDetails = document.getElementById("details");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;
const persons = [];
//functions
function Persons(img,bground, name, text) {
        this.bground = bground;
        this.img = img;
        this.name = name;
        this.text = text;
    };
function createCustomer(img, bground, name, text) {

        let fullImgBody = `url(${bground})`;
        let customer = new Persons(img, fullImgBody, name, text)
        persons.push(customer)
    };

createCustomer("https://tse2.mm.bing.net/th?id=OIP.n7pw8X3XxZGl9uw_z9OI3QHaHa&pid=Api&P=0&w=300&h=300","https://getwallpapers.com/wallpaper/full/e/8/8/298814.jpg","Bob","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Turpis cursus in hac habitasse platea dictumst quisque.");
createCustomer("https://tse1.mm.bing.net/th?id=OIP.MXYD9n1S0PS6KSlP401QaQHaHa&pid=Api&P=0&w=300&h=300","https://getwallpapers.com/wallpaper/full/6/6/6/298655.jpg","Tom","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Turpis cursus in hac habitasse platea dictumst quisque.");
createCustomer("https://tse3.mm.bing.net/th?id=OIP.IIzyt4xRu3jPzy-CeAM46gHaHa&pid=Api&P=0&w=300&h=300","https://getwallpapers.com/wallpaper/full/9/0/8/299379.jpg","Clara","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Turpis cursus in hac habitasse platea dictumst quisque.");
createCustomer("https://tse4.mm.bing.net/th?id=OIP.kiB1YtiAAQySK6iOVQdtVgHaHa&pid=Api&P=0&w=300&h=300","https://getwallpapers.com/wallpaper/full/a/7/2/298200.jpg","Steve","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Turpis cursus in hac habitasse platea dictumst quisque.");

next.addEventListener("click", () => {
  if(index == persons.length-1){
    index = -1;
  }
  index ++;
  
  body.style.backgroundImage = persons[index].bground;
  profile.src = persons[index].img;
  customerName.textContent = persons[index].name;
  costumerDetails.textContent = persons[index].text;
  
});
prev.addEventListener("click", () => {
  if(index == 0){
    index = persons.length;
  }
  index --;
  
  body.style.backgroundColor = persons[index].bground;
  profile.src = persons[index].img;
  customerName.textContent = persons[index].name;
  costumerDetails.textContent = persons[index].text;
  
});