console.log('hello world')
/*
let arr = JSON.parse(localStorage.getItem('objdata')) || [];
arr.push({ name: 'khalid' })

localStorage.setItem('objdata', JSON.stringify(arr));


console.log(arr)
*/
let userlogin = JSON.parse(localStorage.getItem('stddata')) || [];


let name = document.querySelector('.name');
let email = document.querySelector('.email');
let password = document.querySelector('.password');

function sendData() {

let sdtobj={
  name:name.value,
  email:email.value,
  password: password.value
}
userlogin.push(sdtobj)
localStorage.setItem('stddata',JSON.stringify(userlogin))

console.log(userlogin)
}

let useremail = document.querySelector('.useremail');
let userpassword = document.querySelector('.userpassword');

function loginData(){

for(let i=0;i<userlogin.length;i++){

if (userlogin[i].email==useremail.value&&userlogin[i].password==userpassword.value){
  document.querySelector('.database').innerHTML=`${userlogin[i].name} ${userlogin[i].email} ${userlogin[i].password}`
  break;
}else{
   document.querySelector('.database').innerHTML=`your password or email is incorrect`
}}
}



