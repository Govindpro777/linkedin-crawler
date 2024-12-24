import { delay } from './utils/helpers.js';
import { generateMockProfile, generateMockCompany } from './utils/mockDataGenerator.js';

export async function crawlProfiles(urls) {
  const results = [];
  
  for (const url of urls) {
    
    await delay(1000 + Math.random() * 2000);
    
    try {
      const isCompanyPage = url.includes('/company/');
      const data = isCompanyPage ? 
        await mockCrawlCompany(url) : 
        await mockCrawlProfile(url);
      
      results.push({
        url,
        type: isCompanyPage ? 'company' : 'profile',
        data,
        crawledAt: new Date().toISOString()
      });
    } catch (error) {
      console.error(`Failed to crawl ${url}:`, error.message);
    }
  }
  
  return results;
}

async function mockCrawlProfile(url) {
  
  await delay(500);
  return generateMockProfile();
}

async function mockCrawlCompany(url) {
 
  await delay(500);
  return generateMockCompany();
}