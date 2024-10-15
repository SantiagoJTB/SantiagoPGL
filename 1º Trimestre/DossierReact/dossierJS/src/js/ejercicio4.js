import React from "react";
import PropTypes from 'prop-types'
const ComponenteApp = (props) => {
  const {num1, num2} = props;
return (
<>
<h1>Suma</h1>
<h4>{num1} + {num2} = {num1+num2}</h4>
</>
);
};

ComponenteApp.propTypes = {
num1: PropTypes.number.isRequired,
num2: PropTypes.number.isRequired,

};
export default ComponenteApp;