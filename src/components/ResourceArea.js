const ResourceArea = ({resources}) => {
    
    return (<div className='resource-area'>
        {Object.keys(resources).map((key, index) => {
            return (
                <div className='resource-box' key={key}>
                    <h3>{key}: {resources[key]}</h3>
                </div>
            )
        })}
    </div>)
}

export default ResourceArea;