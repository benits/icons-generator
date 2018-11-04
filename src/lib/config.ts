const designKitFileKey = process.env.DESIGN_KIT_FILE_KEY;
const figmaPersonalAccessToken = process.env.FIGMA_PERSONAL_ACCESS_TOKEN!;

if (designKitFileKey === undefined) {
  throw new Error('Environment variable DESIGN_KIT_FILE_KEY missing');
}

if (figmaPersonalAccessToken === undefined) {
  throw new Error('Environment variable FIGMGA_PERSONAL_ACCESS_TOKEN missing');
}

export const prettierConfig = {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all' as 'all',
  parser: 'babylon' as 'babylon',
};

export { designKitFileKey, figmaPersonalAccessToken };
