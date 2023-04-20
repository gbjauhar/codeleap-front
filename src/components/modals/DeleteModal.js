import Modal from "react-modal"
import styled from "styled-components"
import { deletePost } from "../../actions/postApi"

export default function DeleteModal({ deleteModal, setDeleteModal, id }) {
    return (
        <Modal
            isOpen={deleteModal}
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
            <h1 style={{ 'font-size': '22px' }}>Are you sure you want to delete this post?</h1>
            <ButtonContainer>
                <NoButton onClick={() => setDeleteModal(false)}>Cancel</NoButton>
                <YesButton onClick={() => {
                    deletePost(id)
                    setDeleteModal(false)
                }}>Delete</YesButton>
            </ButtonContainer>
        </Modal>
    )
}

const ButtonContainer = styled.div`
display: flex;
margin-top: 40px;
justify-content: flex-end;

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
background: #FF5151;
color: #FFFFFF;
`