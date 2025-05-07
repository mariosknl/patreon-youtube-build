import { type SchemaTypeDefinition } from "sanity";
import siteSettings from "./siteSettings";
import message from "./message";
import post from "./post";
import comment from "./comment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, message, post, comment],
};
