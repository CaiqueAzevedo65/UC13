import { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Login(){
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        const response = await api.post('/session', { email });

        const { _id } = response.data;
        console.log(_id);
        localStorage.setItem('user', _id);

        navigate('/dashboard');

    }

    return(
        <>
        <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">*E-mail</label>
            <input 
                id="email"
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <button className='btn' type='submit'>Entrar</button>
        </form>
        </>
    )
}

