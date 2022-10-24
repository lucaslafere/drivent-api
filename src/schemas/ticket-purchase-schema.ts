import Joi from 'joi';

export const purchaseInfo = Joi.object({
  ticketType: Joi.string().valid('Online', 'Presential').required(),
  accommodation: Joi.string().when('ticketType', {
    is: Joi.string().valid('Presential'),
    then: Joi.string().valid('Inn', 'WithoutInn').required(),
    otherwise: Joi.forbidden(),
  }),
  creditCardNumber: Joi.string()
    .pattern(/[0-9]{16}/)
    .required(),
  expiry: Joi.string()
    .pattern(/(^0[1-9]|^1[0-2])\/[0-9]{2}/)
    .required(),
  cvv: Joi.string()
    .pattern(/[0-9]{3}/)
    .required(),
  name: Joi.string()
    .pattern(/[A-Z]{2,16}\W[A-Z]+\W[A-Z]{2,16}/)
    .required(),
  price: Joi.number().required(),
});
