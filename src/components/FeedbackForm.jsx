import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useState } from 'react';

const Feedback = () => {
    
    const [nome, setNome] = useState("");
    const [email,setEmail] = useState("");
    const [comentario,setComentario] = useState("");
    
    function mostrarNome(){
        alert(`Nome: ${ nome} \nEmail: ${ email}\nComentario: ${ comentario} `)
        console.log({nome});
        console.log({email});
        console.log({comentario});


        setNome("");
        setEmail("");
        setComentario("");

    }

    return(
        <div className='flex align-items-center justify-content-center
        bg-primary-500 h-screen flex-column'>
            <form className='surface-0 p-3 border-round-md w-4'>

                <label htmlFor="Nome" className='block uppercase font-bold text-sm mb-1'>Nome Completo</label>
                <InputText 
                className='w-full mb-2'       
                placeholder='Digite seu nome'
                value={nome}
                onChange={(e) => setNome(e.target.value)}/>
            
                <label htmlFor="Email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                <InputText
                className='w-full mb-2'
                placeholder='email@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            

                <label htmlFor="Comentario" className='block uppercase font-bold text-sm mb-2'>Digite sua opinião</label>
                <InputTextarea 
                className='w-full h-7rem mb-2'
                autoResize
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}/>

                <Button className='block uppercase font-bold text-sm mb-2 w-full'
                label="Enviar"
                type='Submit'
                onClick={(e) => {e.preventDefault()
                mostrarNome()
                }}/>
            </form>
        </div>
    );
}
export default Feedback;