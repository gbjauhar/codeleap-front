import styled from "styled-components"
import { useEffect, useState } from "react"
import PostCard from "../components/PostCard"
import { getPosts } from "../actions/postApi"
import WritePost from "../components/WritePost"

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getPosts()
                setPosts(res)
            } catch (err) {
                console.log(err)
            }
        } fetchData()
    }, [posts]);
    return (
        <Container>
            <Title>
                <h1>CodeLeap Network</h1>
            </Title>
            <WritePost />
            {posts.map((p) =>
                <PostCard posts={p} />
            )}
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
background-color: white;
`

const Title = styled.div`
width: 100%;
height: 80px;
background-color: #7695EC;
display: flex;
align-items: center;
padding-left: 15px;
box-sizing: border-box;

h1{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 22px;
color: #FFFFFF;
}

`