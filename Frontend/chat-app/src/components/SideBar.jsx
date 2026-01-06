import useConversation from "../Store/useConversation";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

function SideBar() {

  const {selectedConversation} = useConversation();

  return (
    <div
      className={`
        w-full md:w-[30%] border-r border-gray-700 flex flex-col
        ${selectedConversation ? "hidden md:flex" : "flex"}
      `}
    >
      <div className="p-2 text-xl font-bold">
        Chats
      </div>

      <div className="px-3">
        <SearchInput />
      </div>

      <div className="divider my-2"></div>

      <div className="flex-1 overflow-y-auto px-2">
        <Conversations />
      </div>
    </div>
  );
}

export default SideBar;
