const {PrismaClient} = require('@prisma/client');
const database = new PrismaClient();

async function main() {
    try {
     await database.category.createMany({
        data:[
            {name:"Computer Science"},
            {name:"Music"},{name:"Filming"},{name:"Art"},{name:"Photography"},{name:"Accounting"},{name:"Engineering"},{name:"Fitness"},
        ]
     })   
     console.log("success")
    } catch (error) {
        console.log(error)
    }
}
main();