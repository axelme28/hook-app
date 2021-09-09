import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { UseCounter } from '../hooks/UseCounter';
import { useRef,useLayoutEffect,useState } from 'react';
import './layout.css'



export const LayoutEffect = () => {

    const { state, increment } =  UseCounter(1);
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ state }` );
    
    const {  quote } = !!data && data[0];

    const ref = useRef()
    const [boxSize, setboxSize] = useState({})

    useLayoutEffect(() => {
        setboxSize(ref.current.getBoundingClientRect());
    }, [quote])


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p 
                className=""
                ref = {ref}
                > { quote }
                 </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}
