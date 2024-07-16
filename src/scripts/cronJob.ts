import cron from "node-cron";
import { updateBlocks } from "@/utils/updateBlocks";

export const startCronJob = () => {
  cron.schedule("*/30 * * * * *", updateBlocks);
};
