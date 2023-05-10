// window.addEventListener('load', () => alert(`Welcome ${prompt('Your name please')}`));


const inputContent = document.getElementById('input')
const renderContent = document.getElementById('comment')
const submitButton = document.getElementById('submit-button')
const totalMoney = document.getElementById('render-money')
const inputMoney = document.getElementById ('money')

submitButton.addEventListener('click', () => {
    const inputValue = inputContent.value
    renderContent.innerHTML += `<li class='bg-transparent'> ${inputValue} </li>`
})



const buttons = document.querySelectorAll('button[data-value]');
const input = document.querySelector('#money');
const renderMoney = document.querySelector('#render-money');

let allMoney = 0;

function addDonation(value) {
  allMoney += value;
  renderMoney.textContent = allMoney;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = parseInt(button.dataset.value);
    addDonation(value);
  });
});

input.addEventListener('change', () => {
  const value = parseInt(input.value);
  if (!isNaN(value) && value > 0) {
    addDonation(value);
    input.value = '';
  } else {
    alert('Please enter a valid number');
  }
});
