const CloseMenu = ({ setMenu }) => {
    const buttonPress = () => {
        setMenu('')
    }

    return <div className='button close-menu-button' onClick={buttonPress}>CloseMenu</div>
}

export default CloseMenu;