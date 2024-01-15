import express from 'express';
import moviesRouter from './routes/movies';
import admin from 'firebase-admin';
const serviceAccount = require("../auth-test-skapple-firebase-adminsdk-rogb1-0188a28fd8");

const PORT = process.env.PORT || 4002;
const app = express();
app.use(express.json());

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

var dataBaseFire = admin.firestore();
declare global {
    namespace Express {
      interface Request {
        db: admin.firestore.Firestore;
        admin: typeof admin;
      }
    }
  }

app.use((req, _res, next) => {
  req.db = dataBaseFire; // Tu instancia de Firestore
  req.admin = admin; // Tu instancia de Firebase Admin
  next();
});
app.use('/movies',moviesRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
