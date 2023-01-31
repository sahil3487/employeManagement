import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <div style={{ textAlign:'center', Color:'skyblue' }}>
                
                <h1>Employee Management Software</h1>
            </div>
            
            <div>
                <button onClick={() => setIsAdding(true)}>Add Employee</button>
            </div>
        </header>
    )
}

export default Header