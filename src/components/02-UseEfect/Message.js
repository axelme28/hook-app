import React from 'react'
import { useEffect, useState } from 'react';

export const Message = () => {
    const [coords, setcoords] = useState({
        x:0,
        y:0
    })
    const {x,y} = coords

    useEffect(() => {
        const mauseMove =(e) => {
            const coords = {x: e.x, y: e.y}
            setcoords(coords)
        }

        window.addEventListener('mousemove',mauseMove)
        return () => {
            window.removeEventListener('mousemove',mauseMove)
        }
    }, [])
    
    return (
        <>
         <h3>Cordenadas</h3>
         <p>
            x: {x} y: {y}
        </p>   
        </>
    )
}
