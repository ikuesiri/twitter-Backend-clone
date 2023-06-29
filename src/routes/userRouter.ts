import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient()
// create user
router.post('/', async(req,res) =>{
    try {
       const { name, username, email, bio, isVerified} = req.body;
       const createdUser =  await prisma.user.create({
        data: {
            name,
            username,
            email,
            bio,
            isVerified
        }
       })
       res.status(201).json(createdUser)
   } catch (error) {
      res.status(400).json({error: 'usename and email should be unique'})
   }
             
    
});
//get list of users
router.get('/', async(req,res) =>{
   const allUsers = await prisma.user.findMany();
    res.json(allUsers)
})

// get one user
router.get('/:id', async(req,res) =>{
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: {id : Number(id)},
        include: {tweets: {
            select : {
                "id": true,
            "updatedAt": true,
            "content": true,
            "image": true,
            "video": true,
            }
        }}
    })
    res.status(200).json(user)
})

// update user
router.patch('/:id', async(req,res) =>{
    const { id } = req.params;
    const body = req.body;
     try {
        const updateUser = await prisma.user.update({
            where: { id: Number(id)},
            data : body
        })
        res.status(201).json(updateUser)
        
     } catch (error) {
         res.status(400).json({error : 'Update failed'})
        
     }
})

///delete User
router.delete('/:id', async(req,res) =>{
    const { id } = req.params;
    try {
        const deleteUser = await prisma.user.delete({
            where: { id: Number(id)}
        })
        res.status(200).json({message: "User successully deleted!"})
    } catch (error) {
        res.status(400).json({error : "Unable to delete User"})
        
    }
})

export default router;