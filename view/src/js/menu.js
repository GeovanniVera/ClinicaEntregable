const toggle = document.querySelector('.to');
const nav = document.querySelector('.sidebar');

console.log(toggle);
console.log(nav);

toggle.addEventListener('click',()=>{
    nav.classList.toggle('close');
});
