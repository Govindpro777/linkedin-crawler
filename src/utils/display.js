import chalk from 'chalk';

export function displayResults(results) {
  console.log(chalk.blue('\n=== Crawling Results ===\n'));
  
  results.forEach((result, index) => {
    console.log(chalk.yellow(`Result #${index + 1}`));
    console.log(chalk.gray('URL:'), result.url);
    console.log(chalk.gray('Type:'), result.type);
    console.log(chalk.gray('Data:'));
    console.log(JSON.stringify(result.data, null, 2));
    console.log(chalk.gray('Crawled at:'), result.crawledAt);
    console.log('\n');
  });
  
  console.log(chalk.green(`Successfully crawled ${results.length} pages`));
}