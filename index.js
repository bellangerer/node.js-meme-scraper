const fs = require('fs');
const folderName = 'memes from code';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

// Defining the URL of the website to scrape
const mainUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

axios
    .get(mainUrl)
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    });

// Function to scrape the current version
async function scrapeWebsite('https://memegen-link-examples-upleveled.netlify.app/') {
  try {

// Created a HTTP GET request to the website
const response = await axios.get(websiteUrl);

// Loading the HTML content into cheerio
const $ = cheerio.load(response.data);

// Finding and extracting the current version to the console
const currentVersion = $('.version').text();

// Output the current version to the console
console.log(`Current Version: ${currentVersion.trim()}`);

  } catch (error) {
    console.error('Error scraping the website:', error.message):
  }
}

// Calling the scarape Website function
scrapeWebsite('https://memegen-link-examples-upleveled.netlify.app/');


const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs.promises');
const path = require('path');

const websiteUrl = 'https://memegen-link-examples-upleveled.netlify.app/';
const downloadFolder = 'memes';


    const response = await axios.get(websiteUrl);
    const $ = cheerio.load(response.data);

    // Create the download folder if it doesn't exist
    await fs.mkdir(downloadFolder, { recursive: true });

    // Find and extract image URLs
    const imageUrls = [];
    $('.meme-img img').each((index, element) => {
      const imageUrl = $(element).attr('src');
      if (imageUrl) {
        imageUrls.push(imageUrl);
      }
    });

    // Download the first 10 images
    const downloadPromises = [];
    for (let i = 0; i < 10 && i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];
      const imageName = path.basename(imageUrl);
      const imagePath = path.join(downloadFolder, imageName);

      downloadPromises.push(axios.get(imageUrl, { responseType: 'stream' }).then((response) => {
        response.data.pipe(fs.createWriteStream(imagePath));
        return new Promise((resolve, reject) => {
          response.data.on('end', resolve);
          response.data.on('error', reject);
        });
      }));
    }

    await Promise.all(downloadPromises);
    console.log('Downloaded the first 10 images into the "memes" folder.');
  } catch (error) {
    console.error('Error scraping and downloading images:', error.message);
  }
}
module.exports = { scrapeWebsite };
