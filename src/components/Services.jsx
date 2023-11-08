import React, { useState } from 'react'

const Services = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function handleClick() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div>
            <h1>Our Services</h1>
            <button onClick={handleClick}>
                {isCollapsed ? '▼ Residential Remodeling' : '► Residential Remodeling'}
            </button>
            {isCollapsed && <p>Transform your existing home into your dream space with our residential remodeling services. We specialize in kitchen and bathroom renovations, basement finishing, and more, ensuring that your living environment suits your evolving needs and style.</p>}

        </div>
    );
}

export default Services