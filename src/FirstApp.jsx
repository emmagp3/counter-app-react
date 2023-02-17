import PropTypes, { string } from 'prop-types'
// import { Fragment } from "react";

/**
 * Cualquier variable/constante/expresión que no esté involucrada directamente con el componente
 * o algún hook, es conveniente que sea declarada afuera del componente para que React no tenga
 * que reprocesarlo.
 */
const newMessage = {
  title: 'Mensaje de saludo',
  message: 'Hola Emmanuel',
};

export const FirstApp = ({ 
  title, 
  subtitle, 
}) => {
  return (
    // <Fragment>
    <> { /* Misma forma de agrupar */}
      <h1 data-testid="test-title">{ title }</h1>  
      <h2>{ subtitle }</h2>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{ subtitle }</p>
      <p>{ subtitle }</p>
      <p>{ subtitle }</p>
      <p>{ subtitle }</p>
    </>
    // </Fragment>
  );
};

FirstApp.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  subtitle: "No hay subtítulo",
  // title: 'No hay título',
}