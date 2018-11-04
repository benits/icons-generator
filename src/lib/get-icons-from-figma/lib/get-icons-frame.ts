import { FileResponse, Frame } from "./figma-types";

export const getIconsFrame = (fileResponse: FileResponse): Frame => {
  const libraryChildren = fileResponse.document.children;

  for (const libraryChild of libraryChildren) {
    if (libraryChild.name !== "1. Patterns") {
      continue;
    }

    if (libraryChild.type !== "CANVAS") {
      throw new Error("Unexpected response shape from Figma");
    }

    const patternsChildren = libraryChild.children;

    for (const patternsChild of patternsChildren) {
      if (patternsChild.name !== "Icons") {
        continue;
      }

      return patternsChild as Frame;
    }
  }

  throw new Error("Could not find Icons in Figma design kit");
};
