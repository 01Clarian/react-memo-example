import React from 'react'

// To implement the HOC React.memo replace the folowing export code.
// export default React.memo(Weather) 
// Run the tests both times to measure the varying results. 

const Weather = ({weather}) => {
    return (
    <div>
    <p>{weather.city}</p>
<p>{weather.temperature}</p>
{console.log('Render')}
</div>
    )
}

export default Weather