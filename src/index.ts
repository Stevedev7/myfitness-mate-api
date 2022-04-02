import config from 'config';
import App from './app';

const PORT = config.get("server.port") as number;
const HOST = config.get("server.host") as string;

const app = new App([], PORT, HOST);

app.listen()