const submit = document.querySelector('.Submit');
const displayThank = document.querySelector('.thank');
const rating = document.querySelector('.rating');
const vote = document.querySelectorAll('.vote');
let number = document.querySelector('#number');

console.log(number.innerHTML)

function thank() {
    if (number.innerHTML===""){
        alert('Please select rating before submitting!')
    }
    else {
        displayThank.style.display='flex';
        rating.style.display='none';
    }
   

}
function result(e) {
    
    vote.forEach(a => {
        a.style.background = 'var(--Dark-Blue)';
        a.style.color = 'var(--Medium-Grey)';
    })
       
    console.log(e.target.closest('button'));
    NUMBERR = e.srcElement.innerText;
    number.innerHTML = NUMBERR;
    console.log(NUMBERR);
    e.target.closest('button').style.background = 'var(--Light-Grey)';
    e.target.closest('button').style.color = 'var(--white)';
}

vote.forEach(e => {
    e.addEventListener('click', result);
});
submit.addEventListener('click', thank);

