import MessageContainer from "../components/MessageContainer";
import SideBar from "../components/SideBar";

function ChatPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[80%] h-[80vh] flex rounded-xl shadow-lg overflow-auto">
        <SideBar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default ChatPage;
