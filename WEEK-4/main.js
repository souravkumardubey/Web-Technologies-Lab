// Q1 Code
const input = document.querySelector('.input');
const result = document.querySelector('.result');
const btn = document.querySelector('.isPalin');

function isPalindrome(number) {

    const values = number.split('');
    const rev = values.reverse();
    const ans = values.join('');
    
    if ( ans == number ) return true;
    return false;

}

function calc(){
    const inputValue = (input.value);
    // document.write(typeof inputValue);
    if ( isPalindrome(inputValue) === true ) {

        alert(`${inputValue} is palindrome`);

    } else {

        alert  (`${inputValue} is not palindrome`);
    }
}

