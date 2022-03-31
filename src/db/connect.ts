import mongose from "mongoose";
import config from "config";
import log from "../logger"
import { string } from "yup";

const connect = () => {
    const dbUri = config.get("dbUri") as string;

    return mongose
        .connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            log.info("Database connected.")
        })
        .catch(e => {
            log.error(`DB Error ${e}`);
            process.exit(1);
        })
}


export default connect;