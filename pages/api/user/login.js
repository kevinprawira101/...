// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        // const akuns = await prisma.user.findMany({
        //     orderBy: [
        //         {
        //             id: 'asc'
        //         }
        //     ]
        // });
        const findUser = await prisma.user.findFirst({
            where: {
                email: req.body.loginEmail,
                password: req.body.loginPassword
            }
        })


        res.status(200).json({ message: 'success!', data: findUser })
    } catch (error) {
        res.status(400).json({ data: 'error', error })
        console.log(error)
    }
}
