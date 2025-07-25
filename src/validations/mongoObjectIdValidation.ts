import { z } from "zod";
import { Types } from "mongoose";
export const objectIdSchema = z
  .string()
  .trim()
  .refine((val) => Types.ObjectId.isValid(val), {
    message: "Invalid ObjectId",
  });
