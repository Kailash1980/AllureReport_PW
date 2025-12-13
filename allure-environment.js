// Generate Allure environment file
import fs from 'fs';
import path from 'path';

const allureResultsPath = path.join(process.cwd(), 'allure-results');

// Create allure-results directory if it doesn't exist
if (!fs.existsSync(allureResultsPath)) {
  fs.mkdirSync(allureResultsPath, { recursive: true });
}

// Create environment.properties file
const environmentProperties = `
Browser=Chromium
OS=${process.platform}
NodeVersion=${process.version}
Environment=CI/CD
`;

fs.writeFileSync(
  path.join(allureResultsPath, 'environment.properties'),
  environmentProperties.trim()
);

console.log('Allure environment file created');
