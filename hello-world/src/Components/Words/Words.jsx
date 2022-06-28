import './Words.css'

const Words = () =>{

    let name = 'Hello World';
    let date = new Date();

    return(
        <div className='words'>
            <p>{name.toUpperCase()} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
            <p>{name.toLowerCase()} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
            <p>{name[0].toLowerCase() + name.substring(1)} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
            <p>{name.split('').reverse().join('')} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
            <p>{name.replace('W', 'w')} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
            <p>{name.replace('Hello World', 'World Hello')} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
            <p>{name.replace('World', 'WORLD')} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
            <p>{name.replace('Hello', 'HELLO')} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
            <p>{name.replace('Hello World', 'hELLO wORLD')} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
            <p>{name.replace('Hello World', 'hElLo wOrLd')} <br/><span>{date.toLocaleDateString('pt-br')}</span></p>
        </div>
    );
}

export default Words