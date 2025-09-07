import React, { useEffect, useState } from "react";
import { convertDate } from "../../../utils/optimizationFunction";
import cn from "../../../lib/cn";
import { FaMessage } from "react-icons/fa6";
function ChatMainPage() {
  const selectedUser = JSON.parse(localStorage.getItem("selectedUser"));
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (selectedUser) {
      fetch("/Chat.json")
        .then((res) => res.json())
        .then((data) => {
          if (selectedUser?.id) {
            const selectedConversation = data.find(
              (item) => item.conversationId === selectedUser.id
            );
            setMessages(selectedConversation ? selectedConversation.messages : []);
          }
        });
    }
  }, [selectedUser]);

  return (
    <div className="w-full flex flex-col bg-gray-50">
      {selectedUser && (
        <>

          <div className="h-[60px] border-b border-gray-300 bg-white px-3 flex items-center gap-3 shadow-sm">
            <img
              className="w-12 h-12 shadow rounded-full object-cover"
              src={selectedUser.avatar}
              alt={selectedUser.name}
            />
            <div>
              <p className="text-lg font-semibold">{selectedUser.name}</p>
              <span className="text-xs text-gray-500">Active now</span>
            </div>
          </div>


          <div className="flex-1 h-[calc(100vh-300px)] min-h-[calc(100vh-300px)] max-h-[calc(100vh-300px)] p-4 overflow-y-auto  hide-scrollbar flex flex-col gap-3 bg-gray-100">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <div
                  key={msg.messageId}
                  className={cn(
                    "flex items-end gap-2",
                    msg.senderId === "u1" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.senderId !== "u1" && (
                    <img
                      className="w-8 h-8 rounded-full object-cover shadow"
                      src={msg.avatar}
                      alt=""
                    />
                  )}
                  <div
                    className={cn(
                      "p-3 rounded-2xl text-sm max-w-[60%] shadow",
                      msg.senderId === "u1"
                        ? "bg-[#F57C00] text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none"
                    )}
                  >
                    <p>{msg.text}</p>
                    <div
                      className={cn(
                        "text-[10px] mt-1 opacity-70",
                        msg.senderId === "u1" ? "text-gray-200" : "text-gray-500"
                      )}
                    >
                      {convertDate(msg.timestamp)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center h-full justify-center text-center text-gray-500">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 mb-3">
                  <FaMessage className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-lg font-semibold">No messages yet</p>
                <p className="text-sm">Start a conversation with {selectedUser.name}</p>
              </div>
            )}
          </div>


          <div className="h-[60px] border-t border-gray-300 bg-white flex items-center px-3 gap-2">
            <form className="flex items-center gap-2 w-full" onSubmit={(e) => console.log(e)}>
              <input
                onKeyDown={(e) => {
                  console.log(e?.key)
                  if (e.key === "Enter") {
                    alert("Message function not implemented yet");
                  }
                }}
                type="text"
                name="message"
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F57C00] text-sm"
              />
              <button htmlType="submit" className="bg-[#F57C00] text-white px-4 py-2 rounded-full text-sm hover:bg-[#F57C00]">
                Send
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default ChatMainPage;
