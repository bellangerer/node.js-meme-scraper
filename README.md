# Memegen Scraper CLI

## Overview

Welcome to the Memegen Scraper CLI, a command-line application created to scrape the current version of the [Memegen Link Examples](https://memegen-link-examples-upleveled.netlify.app) website and save the first 10 images into a folder named "memes."

## Features

- **Scraping Memes:**
  - The CLI fetches the current version of the Memegen Link Examples website.
  - It extracts the first 10 images from the website.

- **Saving Images:**
  - The extracted images are saved into a folder named "memes" within the project directory.
  - Each image file is named with a number and a leading zero (e.g., 01.jpg, 02.jpg, etc.).
  - Meme images are not being saved in the Git repository.

- **Fetch Website Content:**
   - Uses puppeteer to fetch the HTML content of the Memegen Link Examples website.

- **Download Images:**
   - Saves the first 10 images into the "memes" folder using the Node.js `fs` module.

## How to Run

1. **Clone the Repository:**
   - `git clone <repository-url>`

2. **Navigate to the Project Directory:**
   - `cd memegen-scraper-cli`

3. **Install Dependencies:**
   - `npm install`

4. **Run the CLI:**
   - `node index.js`

5. **Access the Meme Images:**
   - Open the "memes" folder within the project directory to find the downloaded meme images.

Feel free to explore the codebase, contribute improvements, or use it as a reference for your own projects. If you have suggestions or find ways to enhance the implementation, don't hesitate to open an issue or submit a pull request.

Happy coding!
