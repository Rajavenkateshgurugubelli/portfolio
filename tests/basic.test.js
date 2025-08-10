const fs = require('fs');
const path = require('path');
const assert = require('assert');

const homeHtml = fs.readFileSync(path.join(__dirname, '../src/app/home/home.component.html'), 'utf-8');
assert(homeHtml.includes('Raja Venkatesh Gurugubelli'), 'Hero title should exist');
assert(homeHtml.includes('QA Automation Engineer'), 'Subtitle should exist');

const appHtml = fs.readFileSync(path.join(__dirname, '../src/app/app.component.html'), 'utf-8');
['top', 'skills', 'experience', 'education', 'certs', 'contact'].forEach(anchor => {
  assert(appHtml.includes(`href="#${anchor}"`), `Nav should link to #${anchor}`);
});

console.log('All basic tests passed');
