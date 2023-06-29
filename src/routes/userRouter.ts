import { Router } from "express";

const router = Router();
// create user
router.post('/', (req,res) =>{
    res.status(501).json({error : 'Not implemented'})
})
//get list of users
router.get('/', (req,res) =>{
    res.status(501).json({error : 'Not implemented'})
})

// get one user
router.get('/:id', (req,res) =>{
    const { id } = req.params;
    res.status(501).json({error : 'Not implemented'+ id})
})

// update user
router.put('/:id', (req,res) =>{
    const { id } = req.params;
    res.status(501).json({error : 'Not implemented'+ id})
})

///delete User
router.delete('/:id', (req,res) =>{
    const { id } = req.params;
    res.status(501).json({error : 'Not implemented'+ id})
})

export default router;