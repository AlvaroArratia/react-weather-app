import React from "react";
import PropTypes from "prop-types";

const weatherExtraInfo = ({humidity,wind}) => (
    //ECMAScript6 -> Template string
    <div>
        <span>{`${humidity} % | `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

weatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default weatherExtraInfo;