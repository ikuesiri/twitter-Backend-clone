import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const router = Router();
// create tweet
router.post('/', async(req,res) =>{
    const { content, userId, video, image } = req.body
    try {
         const newTweet = await prisma.tweet.create({
            data: {
                content,
                userId, //TODO ==> handle from auth
                video,
                image
            }, include: {
                user: { select : {
                    id: true,
                    username: true,
                    image: true,
                    isVerified: true
                }}
            }
        
         })

         res.status(201).json(newTweet);
    } catch (error) {
         res.status(400).json({ message: "Unable to post tweet"})
    }

})

//get all tweets
router.get('/', async(req,res) =>{
    try {
         const userList = await prisma.tweet.findMany({
            include: {
                user: { select : {
                    id: true,
                    username: true,
                    image: true,
                    isVerified: true
                }}
            }
         })
         res.status(200).json(userList)
    } catch (error) {
        
   res.status(500).json({error})
    }
})

// get one tweet
router.get('/:id', async(req,res) =>{
    const { id } = req.params;
    try {
        const findTweet = await prisma.tweet.findUnique({ where: {id : Number(id)},
        include: {
            user: { select : {
                id: true,
                username: true,
                image: true,
                isVerified: true
            }}
        }
    })
        res.status(200).json(findTweet);

    } catch (error) {
        
        res.status(400).json({error : 'cannot find tweet'})
    }
})

// update tweet
router.patch('/:id', async(req,res) =>{
    const { id } = req.params;
    const body = req.body
    try {
        const updateTweet = await prisma.tweet.update({
            where: { id : Number(id)},
            data: body,
            include: {
                user: { select : {
                    id: true,
                    username: true,
                    image: true,
                    isVerified: true
                }}
            }
        })
        res.status(200).json(updateTweet);
    
    } catch (error) {
        res.status(500).json({error : 'cannot update tweet'})
        
    }
})

///delete tweet
router.delete('/:id', async(req,res) =>{
    const { id } = req.params;
    try {
        const deleteTweet = await prisma.tweet.delete({
            where: { id : Number(id)}
        })
         res.status(200).json({ message: "Successfully deleted tweet!"})
    } catch (error) {
        res.status(500).json({error : 'cannot delete tweet'})
        
    }
})

export default router;