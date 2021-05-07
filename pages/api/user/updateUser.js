// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        const createMany = await prisma.user.update({
            where: {
                id: parseInt(req.body.id),
            },
            data:
            {
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                roleId: parseInt(req.body.role_id)
            }
        })

        res.status(201).json({ message: 'success!', data: createMany })
    } catch (error) {
        res.status(400).json({ data: 'error', error })
        console.log(error)
    }
}
