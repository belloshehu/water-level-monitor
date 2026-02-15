import { pumpingMachines } from "@/data/settings";
import * as z from "zod";

export const pumpingMachineConfigValidationSchema = z.object({
	horsePower: z.coerce
		.number()
		.min(0.5, "Invalid machine horse power")
		.min(6, "Invalid machine horse power"),
	flowRate: z.coerce
		.number()
		.min(1, "Flow rate too small")
		.max(10, "Flow rate too large."),
});

export type PumpingMachineConfigValidationSchemaType = z.infer<
	typeof pumpingMachineConfigValidationSchema
>;
