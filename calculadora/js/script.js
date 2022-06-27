const insert = num => {
    let result = document.querySelector('.result');
    result.innerHTML += num;
}

const clean = () => {
    let result = document.querySelector('.result');
    result.innerHTML = '';
}

const del = () => {
    let result = document.querySelector('.result').innerHTML;
    document.querySelector('.result').innerHTML = result.substring(0, result.length - 1);
}

const calc = () => {
    let result = document.querySelector('.result').innerHTML;

    if(result){
        document.querySelector('.result').innerHTML = eval(result);
    } else{
        alert('Digite os numeros corretos!');
    }
}