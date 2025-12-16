const prisma = require("../common/prisma/init.prisma");

exports.get = async (providerId) => {
  return prisma.schedules.findMany({
    where: { provider_id: providerId },
  });
};

exports.set = async (providerId, schedules) => {
  await prisma.schedules.deleteMany({
    where: { provider_id: providerId },
  });

  return prisma.schedules.createMany({
    data: schedules.map((s) => ({
      provider_id: providerId,
      day_of_week: s.day_of_week,
      start_time: s.start_time,
      end_time: s.end_time,
      is_day_off: s.is_day_off || false,
    })),
  });
};
exports.block = async (providerId, payload) => {
  return prisma.schedule_blocks.create({
    data: {
      provider_id: providerId,
      block_date: payload.block_date,
      reason: payload.reason,
    },
  });
};
