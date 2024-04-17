const expressRequire = require('express');
const expressApp = expressRequire();
const mongoose = require('mongoose');
const dotenvApp = require('dotenv').config();
const cors = require('cors');

expressApp.use(cors());
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
const port = normalizePort(process.env.MY_PORT_BACK || 4000)

expressApp.listen(
    port,() =>{
        console.log(`Server is running on port ${port}`);
    }
);

mongoose.connect(process.env.BDD_FULL_NAME,

  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  expressApp.get((req,res) =>{res.send( 'Votre requête a bien été reçue !'
);});

expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



expressApp.get('/', function(req, res) {
    res.send('Hello World from the backend side. Dont forget that on this side, every console log is only visible on the IDE terminal.');
})

  //LES ROUTERS
  const carrerRouter = require('./routes/CarrerRoute')
  const workRouter = require('./routes/WorkRoute')
  //MIDDLEWARE
  expressApp.use("/", carrerRouter);
  expressApp.use("/carrer", carrerRouter);
  expressApp.use("/", workRouter);
  expressApp.use("/work", workRouter);

  
module.exports = expressApp;