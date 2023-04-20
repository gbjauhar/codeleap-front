import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../redux/UserContext";
import DeleteModal from "./modals/DeleteModal"
import UpdateModal from "./modals/UpdateModal"
import { RiDeleteBin2Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import moment from "moment"

export default function PostCard({ posts }) {
    const { userData } = useContext(UserContext)
    const [updateModal, setUpdateModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    return (
        <Container>
            <Title>
                <h1>{posts.title}</h1>
                {posts.username === userData ?
                    <Buttons>
                        <FiEdit size={20} color="white" cursor={"pointer"} onClick={() => setUpdateModal(true)}/>
                        <RiDeleteBin2Line size={20} cursor={"pointer"} color="white" onClick={() => setDeleteModal(true)}/>
                    </Buttons>
                    :
                    <></>
                }
            </Title>
            <Content>
                <Info>
                    <User>@{posts.username}</User>
                    <Paragraph>{moment(posts.created_datetime).fromNow()}</Paragraph>
                </Info>
                <Text>{posts.content}</Text>
            </Content>
            <UpdateModal updateModal={updateModal} setUpdateModal={setUpdateModal} id={posts.id} />
            <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} id={posts.id} />
        </Container>

    )
}

const Container = styled.div`
width: 90%;
background: #FFFFFF;
border: 1px solid #999999;
border-radius: 16px;
margin-bottom: 24px;
`

const Title = styled.div`
width: 100%;
background-color: #7695EC;
display: flex;
justify-content: space-between;
h1{
    padding-left: 15px;
    font-weight: 700;
font-size: 22px;
font-style: normal;
color: #FFFFFF;
}
`

const Info = styled.div`
display: flex;
justify-content: space-between;

`

const Buttons = styled.div`
display: flex;
width: 80px;
justify-content: space-evenly;
align-items: center;
padding-right: 10px;
`

const Content = styled.div`
    padding: 15px 15px;

`

const Paragraph = styled.p`
font-style: normal;
font-size: 18px;
line-height: 21px;
color: #777777;
`

const User = styled(Paragraph)`
font-weight: 700;
`

const Text = styled(Paragraph)`
color:black;
`