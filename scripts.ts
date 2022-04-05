import { PrismaClient as PrismaClientDataproxy } from './prisma/dataproxy'
import { PrismaClient as PrismaClientLibrary } from './prisma/library'

// const prismaLibrary = new PrismaClientLibrary({
//   log: ['query', 'info', 'warn', 'error']
// })
const prismaDataproxy = new PrismaClientDataproxy({
  log: ['query', 'info', 'warn', 'error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL_DATAPROXY
    }
  }
})

async function main() {

  
  // const foo2 = await prismaLibrary.foo.findMany({})
  // console.log('foo library', foo2)

  const foo = await prismaDataproxy.foo.findMany({})
  console.log('foo proxy', foo)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prismaDataproxy.$disconnect()
    // await prismaLibrary.$disconnect()
  })