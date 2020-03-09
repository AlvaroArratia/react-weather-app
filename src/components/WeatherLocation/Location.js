import React from "react";
import PropTypes from "prop-types";

const location = ({city}) => ( //Destructuring
    //console.log(props);
    //debugger;
    <div>
        <h1>
            {city}
        </h1>
    </div>
);
/*Mediante el Destructuring, se pudo simplificar la funcion*/

location.propTypes = {
    city: PropTypes.string.isRequired,
}

/*De forma comun
    const location = (props) => {
        const city = props.city;
        return (<div><h1>{city}</h1></div>)
    };
*/

/*Otra forma de destructuring
    const location = (props) => {
        const { city } = props;
        return (<div><h1>{city}</h1></div>)
    };
*/

export default location;