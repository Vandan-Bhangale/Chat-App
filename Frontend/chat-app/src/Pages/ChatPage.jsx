import MessageContainer from "../components/MessageContainer";
import SideBar from "../components/SideBar";

function ChatPage() {
  return (
    <div className="h-full flex justify-center items-center mt-10">
      <div className="w-[80%] h-[80vh] flex rounded-xl shadow-lg overflow-auto">
        <SideBar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default ChatPage;
