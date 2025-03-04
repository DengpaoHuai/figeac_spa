import { z } from "zod";

const randoSchema = z.object({
  name: z.string().min(2, "Minimum 2").max(40, "Maximum 40"),
  age: z.coerce.number().min(10).max(77),
  email: z.string().email(),
});

export default randoSchema;

export type Rando = z.infer<typeof randoSchema> & { _id: string };
