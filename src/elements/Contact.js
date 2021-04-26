import React, {useState} from 'react'

export default function Contact() {

    const [name, setName] = useState('')
    const [nameFocus, setNameFocus] = useState(false)
    const [email, setEmail] = useState('')
    const [emailFocus, setEmailFocus] = useState(false)
    const [message, setMessage] = useState('')
    const [messageFocus, setMessageFocus] = useState(false)

    const handleForm = (e) => {

        e.preventDefault()
    }


    return (
        <div className='container-lg contact-form'>

            <h2>{`<contact>`}</h2>

            <form onSubmit={ e => handleForm(e)}>
                <div className='input name'>
                    <label>Name</label>
                    <input
                        className='write'
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                        required 
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <span className={nameFocus ? 'focus' : ''}>{name}</span>
                </div>

                <div className='input email'>
                    <label>Email</label>
                    <input
                        className='write'
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        required 
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className={emailFocus ? 'focus' : ''}>{email}</span>
                </div>

                <div className='input email'>
                    <label>Message</label>
                    <textarea
                        className='write'
                        onFocus={() => setMessageFocus(true)}
                        onBlur={() => setMessageFocus(false)}
                        required 
                        type='text'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <span className={messageFocus ? 'focus' : ''}>{message}</span>
                </div>

                <div className='input email'>
                    <input type='submit' />
                </div>

            </form>

            <h2>{`</contact>`}</h2>

        </div>
    )
}
