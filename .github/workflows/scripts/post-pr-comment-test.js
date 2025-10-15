const fs = require('fs');

module.exports = async ({ github, context }) => {
  // ---------- Coverage ----------
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

  // ---------- ESLint ----------
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

  // ---------- PR Comment ----------
  const body = `## 📊 Test Coverage
${coverageTable}

## ❌ ESLint Issues
${eslintTable}`;

  await github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body,
  });
};
