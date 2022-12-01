import onlyPost from "app/middleware/onlyPost"
import withAuthentication from "app/middleware/withAuthentication"
import useHashgraphContext from "app/context/useHashgraphContext"
import prepare from "app/utils/prepare"
import ensureEncryptionKey from "app/middleware/ensureEncryptionKey"
import transferNftHandler from "app/handler/transferNftHandler"
import ensureMirrornodeSet from "app/middleware/ensureMirrornodeSet"

export default prepare(
	onlyPost,
	ensureEncryptionKey,
	ensureMirrornodeSet,
	withAuthentication,
	useHashgraphContext
)(transferNftHandler)
