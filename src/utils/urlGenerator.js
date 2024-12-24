export function generateMockUrls(count) {
  const urls = [];
  
  for (let i = 0; i < count; i++) {
    // Alternate between profile and company URLs
    if (i % 2 === 0) {
      urls.push(`https://www.example.com/in/profile-${i}`);
    } else {
      urls.push(`https://www.example.com/company/company-${i}`);
    }
  }
  
  return urls;
}