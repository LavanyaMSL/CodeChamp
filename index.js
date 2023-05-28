const express = require('express')
const app = express()
const port = 3000
const USERS=[]
const QUESTIONS=[
{
    title:"Highest value among integers",
    descriptions:"Given an array of integers, find the highest",
    testCases:[{
        input:"[1,2,3,4,5]",
        output:"5"
    }]
},
{
    title:"Lowest value among integers",
    descriptions:"Given an array of integers, find the Lowest",
    testCases:[{
        input:"[1,2,3,4,5]",
        output:"1"
    }]
}
]
const SUBMISSION = [

]
app.post('/signup', (req, res) => {
        // Extract user data from the request body
        const { username, email, password } = req.body;
      
        // Perform any necessary validation on the user data
        if (!username || !email || !password) {
          return res.status(400).json({ error: 'Please provide username, email, and password' });
        }
      
        // TODO: Add your logic for user registration (e.g., save to database, perform hashing)
        else
        {
            if(!USERS.includes(s=>s.email))
            {
                USERS.push({email:email,
                    password:password})
                    // Return a success message if registration is successful
        res.status(400).json({ message: 'User registered successfully' });
            }
        }
        
      });

app.post('/login', (req, res) => {
    const {email, password } = req.body;
    if(USERS.find(s=>s.email===email && s.password===password))
    {
        res.status(200).json({message:'logged in Successfully'});
    }
    else
    res.status(401).json({error:'error logging in'});
    
  });

app.get('/questions', (req, res) => {
    res.json(QUESTIONS)
  });

app.get('/submissions', (req, res) => {
    res.json(SUBMISSION)
  });

  app.post('/submissions', (req, res) => {
    const { username, title, inputs,code } = req.body;
    SUBMISSION.push({
        username:username,
        title:title,
        inputs:inputs,
        code:code
    })
    res.status(200)
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})