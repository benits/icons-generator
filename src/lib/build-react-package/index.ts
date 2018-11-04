import { readdirSync, unlinkSync, writeFileSync } from 'fs';
import { join } from 'path';

import { Icon } from '../get-icons-from-figma';

import { convertToReactDom } from './lib/convert-to-react-dom';
import { writeReadMe } from './lib/generate-read-me';
import { generatePackageJson } from './lib/generate-package-json';

const cleanReactPackage = () => {
  const reactPackageDirectory = './packages/icons';

  const files = readdirSync(reactPackageDirectory);

  for (const file of files) {
    unlinkSync(join(reactPackageDirectory, file));
  }

  return;
};

export const buildReactPackage = async (icons: Icon) => {
  cleanReactPackage();

  for (const icon of icons) {
    const reactSvgFileContents = await convertToReactDom(icon.name, icon.svg);

    await writeFileSync(
      `./packages/icons/${icon.name}.tsx`,
      reactSvgFileContents,
      'utf-8',
    );

    await writeFileSync(`./packages/icons/${icon.name}.svg`, icon.svg, 'utf-8');
  }

  const readMeContents = await writeReadMe(icons);

  await writeFileSync(`./packages/icons/README.md`, readMeContents, 'utf-8');

  const packageJsonContents = await generatePackageJson();

  await writeFileSync(
    `./packages/icons/package.json`,
    packageJsonContents,
    'utf-8',
  );
};
