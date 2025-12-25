import Conversations from "../components/Conversations";
import Message from "../components/Message";

function Home() {
    return (
        <>
            <div className="pageWrapper">
                <div className="chatSection">
                    <Conversations></Conversations>
                    <Message></Message>
                </div>
            </div>
        </>
    )
}

export default Home;