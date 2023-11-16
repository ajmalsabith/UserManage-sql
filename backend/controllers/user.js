const {Client} = require('pg')

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"ajmal",
    database:"usermanagement"
})
// client.query(`select * from users`,(err,res)=>{
//     if(!err){
//         console.log(res.rows);
//     }else{
//         console.log(err.message);
//     }

//     client.end()
    
// })

const registeruser= async(req,res)=>{

    try {
        const {name,email,age} = req.body
        const insertquery=`insert into users(name,email,age) values($1,$2)`;
        client.connect()
        await client.query(insertquery,[name,email,age],(err,res)=>{
            if(res){
                console.log('user adding sucess');
                res.send({
                    message:'user register success'
                })
                client.end()
            }else{
                console.log('error is =='+err);
                res.status(400).send({
                    message:'error occur in user adding'
                })
            }
        })
       
        
        
    } catch (error) {
        console.log(error.message);
    }

}



module.exports={
    registeruser

}