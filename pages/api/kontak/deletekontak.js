import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        const createMany = await prisma.kontak.delete({
            where: {
               id: req.body.deleteid
            },

        })

        res.status(200).json({ message: 'success!', data: createMany })
    } catch (error) {
        res.status(error.statusCode).json({ data: 'error'})
        console.log(error)
    }
}
