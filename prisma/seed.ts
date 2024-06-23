/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy creatures
  const post1 = await prisma.golem.create({
    data: {
        name: 'Golemprime',
        description: 'Criatura de arcilla de la mitología judía, creada para proteger pero potencialmente peligrosa.',
        lastSee: 'Sinincay',
        countLastSee: 10,
        extinct: false,
    },
  });
  const post2 = await prisma.golem.upsert({
    where: { name: 'Golemcito' },
    update: {},
    create: {
      name: 'Golemcito',
      description: 'Entidad de arcilla de la mitología judía, creada para defensa pero peligrosa si se descontrola.',
      lastSee: 'Uncovia',
      countLastSee: 5,
      extinct: false,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
