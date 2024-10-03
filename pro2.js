
function isPalindrome(str){
    const cleanstr= str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanstr);
    const reversedstr=cleanstr.split('').reverse().join('');
    console.log(reversedstr);
    return cleanstr===reversedstr;
}
function palindromeChecker(){
    const iptext= document.getElementById("iptext");
    const result= document.getElementById("result");
    if(isPalindrome(iptext.value)){
        result.textContent=`"${iptext}" is a Palindrome`;
    }
    else{
        result.textContent=`"${iptext}" is not a Palindrome`;
    }
    result.classList.add('fadeIn');
    iptext.value='';
}
document.getElementById("but").addEventListener("click",palindromeChecker);