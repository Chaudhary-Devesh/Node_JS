const express= require('express');
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { json } = require('stream/consumers');
const app = express();

const port=8000;

app.use(express.urlencoded({extended:false}));

app.get("/users",(req,res)=>{
    const html=`
    <ol>
    ${users.map(users=>{return `<li>${users.first_name}</li>`}).join("")}
    </ol>
    `;
    res.send(html);
});


// app.get('/api/users',(req,res)=>{
//     return res.send(users);

// });
app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user = users.find((user)=> user.id===id);
    return res.json(user);

});
// app.post('/api/users/id',(req,res)=>{
//     return res.json({"status":"pending"});
// })
// app.patch('/api/users/id',(req,res)=>{
//     return res.json({"status":"pending"});
// });
// app.delete('/api/users/id',(req,res)=>{
//     return res.json({"status":"pending"});
// })

app.get('/api/users',(req,res)=>{
    return res.send(users);

}).route('/api/users')
.post((req,res)=>{
    const body = req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length});
    });
}).patch((req,res)=>{
    return res.json({"status":"pending"});
}).delete((req,res)=>{
    return res.json({"status":"pending"});
});




app.listen(port,()=>{console.log(`server started at ${port}`)});