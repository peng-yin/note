const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configuration
const owner = 'peng-yin';
const repo = 'note';
const outputFile = 'index.md';
// GitHub personal access token from .env file
console.log(process.env.GITHUB_TOKEN);

const token = process.env.GITHUB_TOKEN || '';

// Define custom categories with emojis
const categoryMap = {
  'React': ':coffee: React',
  'JS': ':microscope: JS',
  'Typescript': ':tophat: Typescript',
  'CSS': ':art: CSS',
  'Vue': ':custard: Vue',
  'default': ':jack_o_lantern: notes'
};

// Function to categorize an issue based on its labels or title
function categorizeIssue(issue) {
  // Extract labels if they exist
  const labelNames = issue.labels ? issue.labels.map(label => label.name) : [];
  
  // Check if any of our defined categories match the labels
  for (const category in categoryMap) {
    if (category !== 'default') {
      // Check if label contains the category name (case insensitive)
      if (labelNames.some(label => label.toLowerCase().includes(category.toLowerCase()))) {
        return category;
      }
      
      // Check if title contains the category name (case insensitive)
      if (issue.title.toLowerCase().includes(category.toLowerCase())) {
        return category;
      }
    }
  }
  
  // Default category
  return 'default';
}

// Function to generate markdown content
function generateMarkdown(issues) {
  // Add header with layout frontmatter
  let markdown = '---\nlayout: default\n---\n\n```js\nI am a web developer, Welcome to my blog\n```\n\n';
  
  // Group issues by category
  const categories = {};
  
  Object.keys(categoryMap).forEach(category => {
    categories[category] = [];
  });
  
  // Sort issues into categories
  issues.forEach(issue => {
    const category = categorizeIssue(issue);
    categories[category].push(issue);
  });
  
  // Define category order with 'default' (notes) first
  const categoryOrder = ['default', ...Object.keys(categoryMap).filter(cat => cat !== 'default')];
  
  // Generate markdown for each category in the specified order
  categoryOrder.forEach(category => {
    if (categories[category] && categories[category].length > 0) {
      const displayCategory = categoryMap[category];
      markdown += `### ${displayCategory}\n`;
      
      // Add issue links for this category
      categories[category].forEach(issue => {
        markdown += `*   [${issue.title}](${issue.html_url})\n`;
      });
      
      markdown += '\n';
    }
  });
  
  return markdown;
}

// Function to fetch all issues with pagination
async function fetchAllIssues() {
  let page = 1;
  let allIssues = [];
  let hasMorePages = true;
  
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Node.js GitHub Issues Fetcher'
  };
  
  // Add authorization header if token is provided
  if (token) {
    headers['Authorization'] = `token ${token}`;
    console.log('Using GitHub personal access token for authentication');
  } else {
    console.log('No GitHub token provided. You may hit rate limits.');
    console.log('To use a token, set the GITHUB_TOKEN environment variable.');
  }
  
  while (hasMorePages) {
    try {
      console.log(`Fetching page ${page}...`);
      
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
        params: {
          state: 'all',
          per_page: 100, // Increased to 100 to get more issues per request
          page: page
        },
        headers: headers
      });
      
      const issues = response.data;
      
      if (issues.length === 0) {
        hasMorePages = false;
      } else {
        // Filter out Pull Requests (they have a 'pull_request' property)
        const onlyIssues = issues.filter(issue => !issue.pull_request);
        allIssues = allIssues.concat(onlyIssues);
        page++;
        
        // Add a small delay to avoid hitting rate limits
        if (!token) {
          console.log('Waiting 1 second before next request...');
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      // Check if we're approaching rate limits
      const rateLimit = response.headers['x-ratelimit-remaining'];
      if (rateLimit && parseInt(rateLimit) < 5) {
        console.log(`Warning: Only ${rateLimit} API requests remaining.`);
        const resetTime = new Date(parseInt(response.headers['x-ratelimit-reset']) * 1000);
        console.log(`Rate limit resets at: ${resetTime.toLocaleString()}`);
      }
      
    } catch (error) {
      if (error.response && error.response.status === 403 && 
          error.response.data.message.includes('API rate limit exceeded')) {
        console.error('Rate limit exceeded!');
        
        if (error.response.headers['x-ratelimit-reset']) {
          const resetTime = new Date(parseInt(error.response.headers['x-ratelimit-reset']) * 1000);
          console.error(`Rate limit resets at: ${resetTime.toLocaleString()}`);
        }
        
        // If we have some issues already, we can continue with what we have
        if (allIssues.length > 0) {
          console.log(`Continuing with ${allIssues.length} issues fetched so far.`);
          hasMorePages = false;
        } else {
          throw new Error('Rate limit exceeded and no issues fetched. Try using a GitHub token.');
        }
      } else {
        throw error;
      }
    }
  }
  
  return allIssues;
}

// Main function
async function main() {
  try {
    console.log(`Fetching issues from ${owner}/${repo}...`);
    
    // Fetch all issues
    const issues = await fetchAllIssues();
    console.log(`Found ${issues.length} issues.`);
    
    // Generate markdown content
    const markdown = generateMarkdown(issues);
    
    // Write to file
    fs.writeFileSync(outputFile, markdown);
    console.log(`Successfully wrote ${issues.length} issues to ${outputFile}`);
    
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Status code:', error.response.status);
    }
  }
}

// Run the script
main(); 