import { http } from "./http";
import logger from "./logger";
import "./websocket/client";
import "./websocket/admin";

http.listen(8080, () => logger.info("Funcionando na porta 8080"))