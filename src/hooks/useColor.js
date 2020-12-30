import { useState, useEffect } from 'react'

function useColor() {
    const [colors, setColors] = useState([]);
    const [hadiths, setHadiths] = useState([]);

    const fetchData = (content, setter) => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setter(data[content])
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


  

    
    useEffect(() => {
        fetchData('colors', setColors);
        fetchData('Hadiths', setHadiths);
    }, [])


    return [hadiths, colors]
}

export default useColor
