
//NUmber result
const button = document.getElementById('window-button')
.addEventListener('keypress', (Enter) => {

    /*--------------------Show result--------------------*/
    const ShowWindow = document.getElementById('window');
    ShowWindow.style.display = 'flex';
    /*-------------------------------------------------*/


    const number =  document.getElementById('number-input').value;
    
    
    const randomNumber = (number) => {
        return Math.floor(Math.random() * number) + 1;
    };

    
    //Result
    const result = document.getElementById('result');
    result.innerHTML = randomNumber(number);

    
    /*--------------------Clear result--------------------*/
    const CloseWindow = document.getElementById('close-window-button')
    .addEventListener('click', () => {
        
        //hide window
        ShowWindow.style.display = 'none';

        //Clear result
        result.innerHTML = '';
        
        //Clear input
        document.getElementById('number-input').value = '';

    });
    /*-------------------------------------------------*/
});
