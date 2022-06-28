import './Button.css'

const Button = () => {

    const change = () =>{
        let word = document.querySelector('.words');

        if(word.style.display == 'flex'){
            word.style.display = 'none';
        } else{
            word.style.display = 'flex'
        }
    }

    return(
        <div className='button'>
            <button onClick={change}>Mostrar</button>
        </div>
    );
}

export default Button