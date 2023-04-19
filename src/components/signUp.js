import styled from "styled-components"
import Modal from "react-modal"
import { useContext, useState } from "react"
import UserContext from "../redux/UserContext"
import { useNavigate } from "react-router-dom"

export default function SignUp() {
    const { setUserData } = useContext(UserContext)
    const [form, setForm] = useState('')
    const navigate = useNavigate()
    return (
        <>
            <Modal
                isOpen={true}
                style={{
                    overlay: {
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        backgroundColor: '#DDDDDD',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    content: {
                        position: 'relative',
                        width: '500px',
                        height: '190px',
                        background: 'white',
                        border: '1px solid #CCCCCC',
                        borderRadius: '16px',
                        fontFamily: 'Roboto',
                        top: '0',
                        left: '0'
                    }
                }}>
                <h1 style={{ 'font-size': '22px' }}>Welcome to the CodeLeap network!</h1>
                <Form onSubmit={() => {
                    setUserData(form)
                    navigate('/home')
                }}>
                    <label for='username'>Please enter your username:</label>
                    <input id='username' placeholder="John Doe" value={form} onChange={(e) => setForm(e.target.value)} />
                    <section>
                        <button disabled={!form} type='submit'>ENTER</button>
                    </section>
                </Form>
            </Modal>
        </>
    )
}

const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 24px;
section{
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
}
button{
    width: 111px;
height: 32px;
background: #7695EC;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #FFFFFF;
}
button:disabled{
    background-color: grey;
}
input{
width: 490px;
height: 32px;
border: 1px solid #777777;
border-radius: 8px;
margin-top: 8px;
}
`