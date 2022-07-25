const Grassland = () => {
    const min =  170;
    const max = 220;
    const shadeOfGreen = Math.floor(Math.random() * (max-min + 1) + min);

    const hoverOverBorder = (e) => {
        e.target.style.border = 'solid 2px white';
    }

    const removeHoverBorder = (e) => {
        e.target.style.border = 'none';
    }

    return <div className='grassland' style={{backgroundColor: `rgb(0, ${shadeOfGreen}, 0)`}} onMouseOver={hoverOverBorder} onMouseLeave={removeHoverBorder}></div>
}

export default Grassland;