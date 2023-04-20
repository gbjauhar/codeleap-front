import { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import { updatePost } from "../../actions/postApi"

export default function UpdateModal({ updateModal, setUpdateModal, id }) {
    const [form, setForm] = useState({content: "", title: ""})
    return (
        <Modal
            isOpen={updateModal}
            ariaHideApp={false}
            style={{
                overlay: {
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(119, 119, 119, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 5,
                },
                content: {
                    position: 'relative',
                    width: '500px',
                    background: 'white',
                    border: '1px solid #CCCCCC',
                    borderRadius: '16px',
                    top: '0',
                    left: '0'
                }
            }}>
            <h1 style={{ 'font-size': '22px' }}>Edit item</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                updatePost(id, form)
                setForm({content: "", title: ""})
                setUpdateModal(false)
            }}>
                <InputContainer>
                    <section>
                        <label for='title'>Title</label>
                        <input id='title' name="title" placeholder="Hello World" value={form.title} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                    </section>
                    <section>
                        <label for='content'>Content</label>
                        <textarea rows="4" id='content' placeholder="Content here" name="content" value={form.content} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                    </section>
                </InputContainer>
                <ButtonContainer>
                    <NoButton onClick={() => setUpdateModal(false)}>Cancel</NoButton>
                    <YesButton disabled={!form.title || !form.content} type="submit">Save</YesButton>
                </ButtonContainer>
            </form>
        </Modal>
    )
}

const InputContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
justify-content: flex-end;
section{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
input{
    border: 1px solid #777777;
border-radius: 8px;
height: 25px;
}
textarea{
    border: 1px solid #777777;
border-radius: 8px;
}

`
const ButtonContainer = styled.div`
display: flex;
margin-top: 20px;
justify-content: flex-end;
button:disabled{
    background-color: grey;
    cursor: default;
}

`
const Button = styled.button`
font-style: normal;
font-weight: 700;
font-size: 14px;
box-shadow: none;
width: 120px;
height: 32px;
border: 1px solid #999999;
border-radius: 8px;
text-align: center;
`
const NoButton = styled(Button)`
background: #FFFFFF;
color: #000000;
margin-right: 16px;
`

const YesButton = styled(Button)`
background: #47B960;
color: #FFFFFF;
`