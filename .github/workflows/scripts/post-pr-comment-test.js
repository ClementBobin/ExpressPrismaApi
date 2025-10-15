#!/usr/bin/env node

const fs = require('fs');
const { Octokit } = require('@octokit/rest');

const token = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

const [owner, repo] = process.env.GITHUB_REPOSITORY.split(':')[0].split('/'); 
const prNumber = process.env.PR_NUMBER; // pass via env

// Coverage
const coverageFile = 'coverage/coverage-summary.json';
let coverageTable = 'No coverage data found.';
if (fs.existsSync(coverageFile)) {
  const coverage = JSON.parse(fs.readFileSync(coverageFile, 'utf8'));
  coverageTable = `| Metric | Percentage |
| ------ | ---------- |
| Lines | ${coverage.total.lines.pct}% |
| Statements | ${coverage.total.statements.pct}% |
| Functions | ${coverage.total.functions.pct}% |
| Branches | ${coverage.total.branches.pct}% |`;
}

// ESLint
const eslintFile = 'eslint-report.json';
let eslintTable = 'No lint issues 🎉';
if (fs.existsSync(eslintFile)) {
  const eslint = JSON.parse(fs.readFileSync(eslintFile, 'utf8'));
  if (eslint.length > 0) {
    eslintTable = '| File | Line | Message | Rule |\n| ---- | ---- | ------- | ---- |\n';
    eslint.forEach(file => {
      file.messages.forEach(msg => {
        eslintTable += `| ${file.filePath} | ${msg.line} | ${msg.message} | ${msg.ruleId} |\n`;
      });
    });
  }
}

const body = `## 📊 Test Coverage
${coverageTable}

## ❌ ESLint Issues
${eslintTable}`;

(async () => {
  await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body,
  });
})();
