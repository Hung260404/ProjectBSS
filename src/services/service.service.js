const prisma = require("../common/prisma/init.prisma");

exports.create = async (providerId, payload) => {
  return prisma.services.create({
    data: {
      provider_id: providerId,
      category_id: payload.category_id,
      name: payload.name,
      price: payload.price,
      duration: payload.duration,
      description: payload.description,
    },
  });
};

exports.getByProvider = async (providerId) => {
  return prisma.services.findMany({
    where: { provider_id: providerId },
    include: {
      categories: true,
    },
  });
};

exports.getPublic = async (id) => {
  return prisma.services.findFirst({
    where: {
      id: Number(id),
      status: "ACTIVE",
    },
    include: {
      providers: {
        select: {
          business_name: true,
        },
      },
      service_images: true,
    },
  });
};

exports.update = async (providerId, serviceId, payload) => {
  const service = await prisma.services.findFirst({
    where: { id: Number(serviceId), provider_id: providerId },
  });

  if (!service) throw new Error("Service not found");

  return prisma.services.update({
    where: { id: Number(serviceId) },
    data: payload,
  });
};

exports.remove = async (providerId, serviceId) => {
  const service = await prisma.services.findFirst({
    where: { id: Number(serviceId), provider_id: providerId },
  });

  if (!service) throw new Error("Service not found");

  return prisma.services.update({
    where: { id: Number(serviceId) },
    data: { status: "INACTIVE" },
  });
};
