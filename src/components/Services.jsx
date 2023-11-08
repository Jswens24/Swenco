import React, { useState } from 'react'

const Services = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return (
        <div>
            <h1>Our Services</h1>
            <div>
                <button onClick={() => setIsCollapsed(false)}>{isCollapsed ? 'Expand' : 'Collapse'}</button>
                <p className={isCollapsed ? 'hidden' : ''}>Now you see me</p>
            </div>
        </div>
    )
}

export default Services