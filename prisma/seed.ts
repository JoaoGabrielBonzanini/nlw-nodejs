import { prisma } from '../src/lib/prisma'

async function seed(){
 await prisma.event.create({
    data: {
        id: 'fa7ad61f-69fb-4820-8074-85197e88f968',
        title: 'Teste teste',
        slug: 'teste-do-teste',
        details: ' teste teste teste teste',
        maximumAttendees: 120,
    }

 })
}


seed().then(() => {
    console.log("Database seeded.")
    prisma.$disconnect()
})