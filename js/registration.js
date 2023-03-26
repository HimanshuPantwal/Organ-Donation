const signin = document.querySelector('.signin');
signin.addEventListener('click', () => {
  const fm1 = document.querySelector('.fm1');
  const fm2 = document.querySelector('.fm2');
  fm1.style.display = "none";
  fm2.style.display = "flex";
});
const button2 = document.querySelector('.button2');
button2.addEventListener('click', () => {
  const fm1 = document.querySelector('.fm1');
  const fm2 = document.querySelector('.fm2');

  fm2.style.display = "none";
  fm1.style.display = "flex";
})
if(screen.width<=750)
{
   const user=document.querySelector('#user');
   user.classList.remove('.fa-3x');
   user.classList.add('.fa-sm');
}
if(screen.width<=500)
{
  const user= document.querySelector('#user');
  user.classList.remove('.fa-sm');
  user.classList.add('.fa-xs');
}