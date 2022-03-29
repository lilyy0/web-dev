import TuitList from '../tuit-list/tuit-list';
import WhatsHappening
       from "./whats-happening";

const HomeScreen = () => {
    return(
      <div>
        <h2>Home</h2>
        <WhatsHappening/>
        <TuitList/>
      </div>
    )
  }
  export default HomeScreen;