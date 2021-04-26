// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        const createMany = await prisma.user.createMany({
            data: [
                {
                    firstName: "Admin",
                    lastName: "HBM",
                    email: "admin@hbm.com",
                    password: "adminhbm1234",
                    roleId: 1,
                },
                {
                    firstName: "Roseanne",
                    lastName: "Park",
                    email: "rosie@hbm.com",
                    password: "rose1234",
                    roleId: 2,
                },
                {
                    firstName: "Jiso",
                    lastName: "Jiso",
                    email: "jiso@hbm.com",
                    password: "jiso1234",
                    roleId: 3,
                }
            ],
            skipDuplicates: true,
        })

        res.status(200).json({ message: 'success!', data: createMany })
    } catch (error) {
        res.status(400).json({ firstName: 'error', error })
    }
}
