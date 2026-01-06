import MessageContainer from "../components/MessageContainer";
import SideBar from "../components/SideBar";

function ChatPage() {
  return (
    <div className="h-full flex justify-center items-center md:mt-10">
      <div className="w-full md:w-[80%] h-[80vh] md:h-[80vh] flex rounded-none md:rounded-xl shadow-lg overflow-hidden">
        <SideBar />
        <MessageContainer />
      </div>
    </div>
  );
}


export default ChatPage;
