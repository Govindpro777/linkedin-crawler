const firstNames = ['John', 'Sarah', 'Michael', 'Emma', 'David'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];
const titles = ['Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer', 'Marketing Manager'];
const locations = ['New York, NY', 'San Francisco, CA', 'London, UK', 'Toronto, CA', 'Sydney, AU'];
const companies = ['TechCorp', 'InnovateLabs', 'DataSystems', 'FutureWorks', 'GlobalTech'];
const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'E-commerce'];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateMockProfile() {
  const firstName = getRandomItem(firstNames);
  const lastName = getRandomItem(lastNames);
  
  return {
    name: `${firstName} ${lastName}`,
    title: getRandomItem(titles),
    location: getRandomItem(locations),
    summary: `Experienced professional with a passion for innovation and problem-solving. 
      Leading teams and delivering results in fast-paced environments.`
  };
}

export function generateMockCompany() {
  const companyName = getRandomItem(companies);
  
  return {
    name: companyName,
    industry: getRandomItem(industries),
    headquarters: getRandomItem(locations),
    overview: `${companyName} is a leading provider of innovative solutions in the ${getRandomItem(industries)} sector. 
      We focus on delivering value to our customers through cutting-edge technology and exceptional service.`
  };
}