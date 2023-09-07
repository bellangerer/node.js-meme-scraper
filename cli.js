// Import the scraper module

const scraper = require('./scraper.js');

const args = process.argv.slice(2);

if (args[0] === 'scrape') {
  scraper.scrapeWebsite();
} else {
  console.log('Usage: ./cli.js scrape');
}
