import createTokenRequest from "app/validators/createTokenRequest"
import Response from "app/response"
import Specification from "app/hashgraph/tokens/specifications"

async function CreateTokenHandler(req, res) {
	const validationErrors = createTokenRequest(req.body)

	if (validationErrors) {
		return Response.unprocessibleEntity(res, validationErrors)
	}

	const {
		symbol,
		name,
		supply,
		memo,
		requires_kyc = false,
		can_freeze = false,
		decimals
	} = req.body

	const { hashgraphClient } = req.context

	const token = await hashgraphClient.createToken({
		specification: Specification.DovuAssetFungible,
		memo,
		name,
		symbol,
		supply,
		requires_kyc,
		can_freeze,
		decimals
	})

	Response.json(res, token)
}

export default CreateTokenHandler
