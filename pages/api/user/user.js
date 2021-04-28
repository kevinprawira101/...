// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        const createMany = await prisma.user.createMany({
            data: [
                {
                    firstName: req.body.first_name,
                    lastName: req.body.last_name,
                    email: req.body.email,
                    password: req.body.password,
                    roleId: req.body.role_id
                }
            ],
            skipDuplicates: true,
        })

        res.status(200).json({ message: 'success!', data: createMany })
    } catch (error) {
        res.status(400).json({ firstName: 'error', error })
    }
}
