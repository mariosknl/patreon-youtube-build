"use client";

import { SchematicEmbed } from "@schematichq/schematic-components";

export default function SchematicEmbedComponent({
  accessToken,
  componentId,
}: {
  accessToken: string;
  componentId: string;
}) {
  return <SchematicEmbed accessToken={accessToken} id={componentId} />;
}
