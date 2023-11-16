const { Client, Pool } = require('pg');
const { log } = require('util');

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "ajmal",
  database: "usermanagement"
});

const registerUser = async (req, res) => {
  const client = await pool.connect();

  try {
    const { name, email, age } = req.body;
    const insertQuery = 'INSERT INTO users(name, email, age) VALUES($1, $2, $3)';

    const result = await client.query(insertQuery, [name, email, age]);

    console.log('user adding success');
    res.send({
      message: 'user register success',
      result: result.rows
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(400).send({
      message: 'error occurred in user adding'
    });
  } finally {
     client.release();
  }
}


const login =async(req,res)=>{

    const client= await pool.connect()

    try {


        const {name,email}= req.body
        const existdata= `select * from users where email='${email}' and name='${name}'`
       const exdata=await client.query(existdata)
        console.log(exdata);
        if (exdata.rows.length > 0) {
            console.log('successful login');
            res.send({
              message: 'successful login'
            });
          } else {
            console.error('Invalid credentials');
            res.status(400).send({
              message: 'Invalid credentials'
            });
          }


        
    } catch (error) {
        console.error('Error:', error.message);
    res.status(400).send({
      message: 'error occurred in user adding'
    });
    }finally{
        client.release()
    }

}

const userfind= async(req,res)=>{

    const client= await pool.connect()
    try {
        const userdata=`select * from users`
        const existdata= await client.query(userdata)
        if(existdata.rows.length>0){
            res.send({
                data:existdata.rows
            })
        }else{
            res.status(400).send({
                message:'connot find userdata'
            })
        }
    } catch (error) {
        console.error('Error:', error.message);
       res.status(400).send({
      message: 'error occurred in user adding'
    });
    }finally{
        client.release()
    }

}

module.exports = {
  registerUser,
  login,
  userfind
};
