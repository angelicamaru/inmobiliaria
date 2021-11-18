const express = require('express')
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json())
app.listen('4000', (err, data) => {
    console.log('Server on port 4000');
});
app.get('/', (req, res) => {
    res.send('hi')
})
app.post('/mail', (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'prueba31079@gmail.com',
          pass: 'Prueba12345',
        },
      });
      
      
      transporter.sendMail({
        from: '"Inmobiliaria" <prueba31079@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Aviso inmoviliaria", // Subject line
        text: "Este mensaje es de confirmación señor: "+req.body.n + " Con telefono: "+req.body.telefono+ " Que su solicitud ha sido procesada exitosamente",
      }).then(info => {
        console.log({info});
        res.json({'msg':'Perfect'});
      }).catch(err=>{
        console.error();
        res.json({'msg':'Error'});
      });
});

