let contador = 0;

const valor = document.querySelector('#valor');
const buttons = document.querySelectorAll('.button')
const imgContainer = document.querySelector('.ballon');
let prevEnlargedImg;

buttons.forEach(button => {
    button.addEventListener('click', function(e) {

        const styles = e.currentTarget.classList;

        if(styles.contains('increase')) {
        contador ++;
        }
        else {
            contador = 0;
        }
        valor.textContent = contador;

        if(contador >= 5) {
            valor.style.color = '#ba215a';
        }
        if(contador < 5) {
            valor.style.color = 'lightseagreen';
    }
    })
});



document.querySelector('button').onclick = function(){
    let increase = document.getElementById('img1');
    increase.style.width = '280px';
    increase.style.height = '280px';

};

