import { useContext, useState } from "react";
import styled from "styled-components";
import { createPost } from "../actions/postApi";
import UserContext from "../redux/UserContext";

export default function WritePost() {
    const { userData } = useContext(UserContext)
    const [form, setForm] = useState({ username: userData, content: "", title: "" })

    return (
        <Container>
            <h1>What's on your mind?</h1>
            <Form onSubmit={(e) => {
                e.preventDefault()
                createPost(form)
                setForm({content: "", title: ""})
            }}>
                <section>
                    <label for='title'>Title</label>
                    <input id='title' placeholder="Hello World" name="title" value={form.title} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </section>
                <section>
                    <label for='content'>Content</label>
                    <textarea rows="5" type="text" id='content' placeholder="Content here" name='content' value={form.content} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </section>
                <ButtonSection>
                    <button disabled={!form.content || !form.title} type='submit'>Create</button>
                </ButtonSection>
            </Form>
        </Container>
    )
}

const Container = styled.div`
width: 90%;
background: #FFFFFF;
border: 1px solid #999999;
border-radius: 16px;
margin-bottom: 24px;
padding: 15px 15px;
box-sizing: border-box;
margin-top: 20px;
h1{
font-style: normal;
font-weight: 700;
font-size: 22px;
color: #000000;
}
`


const Form = styled.form`
display: flex;
flex-direction: column;
section{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 16px;
}
button{
    width: 111px;
height: 32px;
background: #7695EC;
border-radius: 8px;
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #FFFFFF;
}
button:disabled{
    background-color: grey;
    cursor: default;
}
input{
width: 100%;
height: 32px;
border: 1px solid #777777;
border-radius: 8px;
margin-top: 8px;
}
textarea{
    border: 1px solid #777777;
border-radius: 8px;
}
`

const ButtonSection = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 16px;
`