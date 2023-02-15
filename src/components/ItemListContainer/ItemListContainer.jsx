import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div style={{
            height: '400px',
            backgroundColor: 'grey',
            textAlign: 'center'
            
        }}>
            <p style={{
                fontSize: '60px',
                color: 'white'
                

            }}>{props.greeting}</p>
        </div>
        )
}

export default ItemListContainer