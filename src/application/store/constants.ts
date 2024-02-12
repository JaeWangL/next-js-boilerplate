import { z } from 'zod';

export const StoreEnumZod = z.enum(['file_upload']);
export type StoreEnum = z.infer<typeof StoreEnumZod>;
