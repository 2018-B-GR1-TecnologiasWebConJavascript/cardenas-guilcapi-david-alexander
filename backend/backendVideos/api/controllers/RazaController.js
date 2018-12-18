/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
holaMundo: (peticion, respuesta) => {
  return respuesta.send('ok')
}
};

