import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <div style={{ textAlign:'center', Color:'skyblue' }}>
                
                <h1>Employee Management Software</h1>
            </div>
            
            <div style={{ marginTop: '30px', marginBottom: '18px'}}>
                <button onClick={() => setIsAdding(true)} className='round-button'> New Employee</button>
            </div>
        </header>
    )
}

export default Header