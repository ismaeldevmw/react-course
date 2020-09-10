import React, { useState } from 'react'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai', 'Dragón'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai', 'Dragón']);

    const handleAdd = () => {
        // setCategories([...categories, 'HunterXHunter']);
        setCategories( cats => [...cats, 'HunterXHunter']);
    }

    return (
        <>

            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Add</button>

            <ol>
                {
                    categories.map( (category,  i) => {
                        return <li key={ i }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp
