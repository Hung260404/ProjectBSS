const prisma = require("../common/prisma/init.prisma");

exports.getAll = async () => {
  return prisma.categories.findMany({
    select: {
      id: true,
      name: true,
      icon_url: true,
    },
  });
};
