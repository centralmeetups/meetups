import React from 'react';

const HomePage = () => { 
    return (
        <div>
            <form action='' method='get'>
                <label for='firstLocation'>First Location</label>
                <input type='text' name='firstLocation'></input>
                <label for='secondLocation'>Second Location</label>
                <input type='text' name='secondLocation'></input>
            </form>
        </div>
    )
}

export default HomePage;

