const socket=io('http://localhost:3000');

const form=document.grtElementById('send-container')
const messageInput=document.getElementById('messageInput')
const messageContainer=document.querySelector('.container')


const name=prompt("enter your name my user");