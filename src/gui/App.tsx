import Header from './components/Header'
import Content from './components/Content'
import Chat from './components/chat/Chat'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className='flex h-screen bg-app text-app'>
      {/* Main content area */}
      <div className='flex flex-col flex-1'>
        <div>
          <Header/>
        </div>
        
        <div className='flex-1 px-7 py-3'>
          <Content/>
          
          {/* Chat toggle button - positioned to avoid overlap with chat input */}
          <div className={`fixed transition-all duration-300 ${
            showChat ? 'bottom-6 right-[41rem]' : 'bottom-6 right-6'
          }`}>
            <button
              onClick={() => setShowChat(!showChat)}
              className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-200 hover:scale-105 z-10 ${
                showChat 
                  ? 'btn-bw-outline' 
                  : 'btn-bw'
              }`}
            >
              {showChat ? (
                <span className="text-xl">✕</span>
              ) : (
                <span className="text-2xl">🤖</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Chat sidebar */}
      <div className={`transition-all duration-300 ease-in-out ${
        showChat ? 'w-[40rem]' : 'w-0'
      } border-l border-app bg-panel shadow-lg overflow-hidden relative z-0`}>
        {showChat && (
          <div className="h-full w-[40rem]">
            <Chat 
              userId="default-user"
              className="h-full"
              options={{
                model: 'llama-3.1-8b-instant',
                temperature: 0.7,
                systemPrompt: 'You are a helpful AI assistant built into this application to provide user support. Answer questions about the application features directly and professionally.'
              }}
            />
          </div>
        )}
      </div>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}
