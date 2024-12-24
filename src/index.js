import { crawlProfiles } from './crawler.js';
import { generateMockUrls } from './utils/urlGenerator.js';
import { displayResults } from './utils/display.js';

async function main() {
  try {
    // Generate mock URLs
    const mockUrls = generateMockUrls(5);
    
    // Crawl mock profiles
    console.log('Starting mock crawler...\n');
    const results = await crawlProfiles(mockUrls);
    
    // Display results
    displayResults(results);
  } catch (error) {
    console.error('Error during crawling:', error.message);
  }
}

main();