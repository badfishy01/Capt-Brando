const Joi = require("@hapi/joi")

const schema = Joi.object({
	token_id: Joi.string().required(),
	receiver_id: Joi.string().required(),
	nft_pass_token_id: Joi.string().required(),
	serial_number: Joi.number().optional()
})

function claimNftRequest(candidate = {}) {
	const validation = schema.validate(candidate || {})

	if (validation.error) {
		return validation.error.details.map(error => error.message)
	}
}

export default claimNftRequest
