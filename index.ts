const express = require('express');
const bodyparser = require('body-parser');

// an async environment, because async is good.
(async() => {
    
    // change the port, or read it from environment variable.
    const app = express();
    const port = 8000;
    const router = express.Router();

    // clearly you want to leave this, it's very important.
    router.get('/', (req, res) => {
        res.json({ message: 'well, hello there.'});
    });

    app.use(bodyparser.json());
    app.use('/api', router);
    app.listen(port);
})();