// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        const akuns = await prisma.user.findMany({
            orderBy: [
                {
                    id: 'asc'
                }
            ]
        });


        res.status(201).json({ message: 'success!', data: akuns })
    } catch (error) {
        res.status(400).json({ data: 'error', error })
        console.log(error)
    }
}
