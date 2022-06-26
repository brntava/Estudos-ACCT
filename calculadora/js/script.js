let result = document.querySelector('.result');

const insert = num => {
    result.innerHTML += num
}

const clean = () => {
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
        alert('Dados incorretos!');
    }
}