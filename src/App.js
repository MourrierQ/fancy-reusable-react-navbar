import {DropdownMenu, DropdownMenuItem, Nav, NavItem} from './components/Nav';
import { AiOutlineLogin, AiOutlineShoppingCart, AiFillCaretDown } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Nav>
        <NavItem icon={<AiOutlineLogin/>}/>
        <NavItem icon={<AiOutlineShoppingCart/>}/>
        <NavItem icon={<AiFillCaretDown/>}>
          <DropdownMenu/>
        </NavItem>
      </Nav>
    </div>
  );
}

export default App;
