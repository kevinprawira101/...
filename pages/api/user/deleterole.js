// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        const createMany = await prisma.role.delete({
            where: {
                id: req.body.deleteid,
            },

        })

        res.status(200).json({ message: 'success!', data: createMany })
    } catch (error) {
        res.status(error.statusCode).json({ data: 'error'})
        console.log(error)
    }
}
