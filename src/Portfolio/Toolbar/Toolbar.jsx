import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
        return (
        <div className='Toolbar'>
            {filters.map(o => {
                return (
                    <button 
                        className={o === selected ? 'm5 btn btn-dark' : 'm5 btn btn-outline-dark'}
                        key={o}
                        onClick={() => onSelectFilter(o)} >{o}
                    </button>
                )
            })}

        </div>
    )
}

export default Toolbar;