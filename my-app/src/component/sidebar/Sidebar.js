import React from 'react';
import NavPage from '../navPage/NavePage'
import FilterElement from '../sideberFilterElement/FilterElement';

const Sidebar = () => {
    return (
        <div className="flex z-0  mt-16">
            <FilterElement />
            <div className="h-screen flex-1 flex-col p-7 ml-20">
                <NavPage />
            </div>
        </div>
    )
}

export default Sidebar