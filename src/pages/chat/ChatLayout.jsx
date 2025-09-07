import React from 'react'
import ChatMainPage from './chat-interface-components/ChatMainPage'
import ChatSiderbar from './chat-interface-components/ChatSiderbar'
import { PageContent, PageLayout } from '../../components/PageLayout'

function ChatLayout() {
  const [selectedUser, setSelectedUser] = React.useState(null);
  return (
    <div>
      <PageLayout className="p-0">
        <PageContent>
          <div className='flex gap-1 h-full'>
            <ChatSiderbar setSelectedUser={setSelectedUser} />
            <ChatMainPage selectedUser={selectedUser} />
          </div>
        </PageContent>
      </PageLayout>
    </div>
  )
}

export default ChatLayout