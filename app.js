const express = require('express');
const app = express();
const compression = require('compression')
const port = process.env.PORT || 3000;
app.use(compression({
    level:6,
    threshold:100*1000,
    filter:(req,res)=>{
        if(req.headers['x-no-xompression']){
            return false
        }
        return compression.filter(req,res)
    },
}))
// Define routes and middleware here
// For example:
app.get('/', (req, res) => {
    const payload ='welcome to vrnl'
  res.send(payload.repeat(1000));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});