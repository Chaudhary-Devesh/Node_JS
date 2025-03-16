const express= require('express');
const users = require("./MOCK_DATA.json");
const app = express();

const port=8000;

app.get("/users",(req,res)=>{
    const html=`
    <ol>
    ${users.map(users=>{return `<li>${users.first_name}</li>`}).join("")}
    </ol>
    `;
    res.send(html);
});


app.get('/api/users',(req,res)=>{
    return res.send(users);

});
// app.get('/api/users/:id',(req,res)=>{
//     const id=Number(req.params.id);
//     const user = users.find((user)=> user.id===id);
//     return res.json(user);

// });
// app.post('/api/users/id',(req,res)=>{
//     return res.json({"status":"pending"});
// })
// app.patch('/api/users/id',(req,res)=>{
//     return res.json({"status":"pending"});
// });
// app.delete('/api/users/id',(req,res)=>{
//     return res.json({"status":"pending"});
// })

app.route('/api/users/:id')
.get((req,res)=>{
    const id=Number(req.params.id);
    const user = users.find((user)=> user.id===id);
    return res.json(user);

}).post((req,res)=>{
    return res.json({"status":"pending"});
}).patch((req,res)=>{
    return res.json({"status":"pending"});
}).delete((req,res)=>{
    return res.json({"status":"pending"});
});




app.listen(port,()=>{console.log(`server started at ${port}`)});