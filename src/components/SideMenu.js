import CloseMenu from './buttons/CloseMenu';
import { CampMenu, FarmMenu, QuarryMenu, LakeMenu, WoodCutterMenu } from './menuScreens'

const SideMenu = ({menu, setMenu}) => {
    const MenuName = menu + 'Menu';

    if(menu) {
        return <div className='side-menu'>
        <MenuName setMenu={setMenu}/>
        <CloseMenu setMenu={setMenu}/>
    </div>
    } else {
        return <div className='side-menu'>No Building Selected</div>
    }
}

export default SideMenu;