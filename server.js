const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 1990;
var favicon = require('serve-favicon');

app.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.use(express.static(path.join(__dirname, 'client')));
app.use(favicon(__dirname + '/client/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post('/', (req, res) => {
  const csv = JSONToCSV(req.body, {
    fields: ["Name", "Country", "City", "Role", "Sales"]
  })
  res.attachment('customers.csv').send(csv)
});

const controller = {};

controller.download = async (req, res) => {
 const fields = [
   {
     label: 'Name',
     value: 'first_name'
   },
   {
     label: 'Country',
     value: 'county'
   },
   {
    label: 'City',
     value: 'city'
   },
   {
    label: 'Role',
     value: 'role'
   },
   {
    label: 'Sales',
     value: 'sales'
   }
 ];
 const data = await users.findAll();

 return download(res, 'users.csv', fields, data);
}
