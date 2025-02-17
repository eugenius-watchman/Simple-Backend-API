import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
//import pino from 'pino';



import mainRoutes from './main.routes.js';
import userRoutes from './user.routes.js';
import rateLimit from 'express-rate-limit';
import compression from "compression";

const app = express();
const port = 3000;

// Apply the rate limiting middleware to all requests.
const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})


app.use(compression())

// Apply the rate limiting middleware to all requests.
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/v1', mainRoutes)
app.use('/v1/user', userRoutes);


// tell express what port to listen
app.listen(port, ()=> {
    console.log(`Eugene, go to http://localhost:${port}`)
})