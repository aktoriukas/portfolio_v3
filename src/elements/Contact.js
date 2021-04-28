import React, {useState} from 'react'
import emailjs from 'emailjs-com';

import SendBtn from './SendBtn'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleForm = (e) => {

        e.preventDefault()

        emailjs.sendForm('service_82yh3tk', 'template_qwlctxl', e.target, 'user_hU0p2lOtw3He3c1DIwRBa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('')
        setEmail('')
        setMessage('')
    }


    return (
        <div className='container-lg contact-form'>

            <h2>{`<contact>`}</h2>

            <form 
                onSubmit={ e => handleForm(e)}
            >
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        <div className={`input name`}>
                            <label>Name</label>
                            <input
                                className='write'
                                required  
                                name='name'
                                autoComplete="off"
                                type='text'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className={`input email`}>
                            <label>Email</label>
                            <input
                                className='write'
                                required 
                                name='email'
                                autoComplete="off"
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={`input message`}>
                            <label>Message</label>
                            <textarea
                                className='write'
                                required 
                                name='message'
                                autoComplete="off"
                                type='text'
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <div className='input submit'>
                            <SendBtn />
                        </div>

                    </div>
                </div>


            </form>
            

            <h2>{`</contact>`}</h2>

        </div>
    )
}
