import { getIconsFromFigma } from './lib/get-icons-from-figma';
import { buildReactPackage } from './lib/build-react-package';

const generateReactPackage = async () => {
  const bulbImages = await getIconsFromFigma();

  await buildReactPackage(bulbImages);

  console.log('Completed generating new package');
};

generateReactPackage();
