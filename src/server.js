import express from 'express';

import mainRoutes from './main.routes.js';
import userRoutes from './user.routes.js';
import helmet from 'helmet';

const app = express();
const port = 3000;


app.use(express.json());
app.use(helmet());

app.use('/v1', mainRoutes)
app.use('/v1/user', userRoutes);


// tell express what port to listen
app.listen(port, ()=> {
    console.log(`Eugene, go to http://localhost:${port}`)
})