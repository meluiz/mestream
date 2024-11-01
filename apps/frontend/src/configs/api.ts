import ky from "ky";

import { env } from "server";

export default ky.create({
	prefixUrl: `${env.APP_URL}/api`,
});
