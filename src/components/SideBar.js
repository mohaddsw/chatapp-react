import {Tab, Nav, Button, Modal} from 'react-bootstrap'
import {useState} from "react";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";


const CONVERSATION_KEY = 'conversations'
const CONTACT_KEY = 'contacts'
export default function SideBar({id}) {
    const [activeKey, setActiveKey] = useState(CONVERSATION_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationOpen = activeKey === CONVERSATION_KEY

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <div style={{width: '250px'}} className='d-flex flex-column'>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='tabs' className='justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACT_KEY}>Contents</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='border-1 overflow-auto flex-grow-1'>
                    <Tab.Pane eventKey={CONVERSATION_KEY}>
                        <Conversations/>
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACT_KEY}>
                        <Contacts/>
                    </Tab.Pane>
                </Tab.Content>
                <div className='p-2 border-top border- small'>
                    Your Id: <span className='text-muted'>{id}</span>
                </div>
                <Button onClick={()=>{setModalOpen(true)}} className='rounded-0'>New {conversationOpen ? 'Conversations' : 'Contacts'}</Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {conversationOpen ? <NewConversationModal closeModal={closeModal}/> :
                    <NewContactModal closeModal={closeModal}/>}
            </Modal>
        </div>
    )
}