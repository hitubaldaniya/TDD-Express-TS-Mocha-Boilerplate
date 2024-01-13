import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyparser from 'body-parser';
import indexRouter from './routes/index';
import authRouter from './routes/auth';
import dashboardRouter from './routes/dashboard';

const PORT: number = parseInt(<string>process.env.PORT) || 3000;

const app: Application = express();

app.use(bodyparser.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function() { 
    console.log(`Express server is running on port number: ${PORT}`);
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);

export default app;