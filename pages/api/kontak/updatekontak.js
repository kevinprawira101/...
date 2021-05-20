// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {

    try {
        const updateUser = await prisma.kontak.update({
            where: {
              
            },
            data:
            {
               
            }
        })
        res.status(201).json({ message: 'success!', data: updatekontak })
    } catch (error) {
        res.status(400).json({ data: 'error', error })
        console.log(error)
    }
}
