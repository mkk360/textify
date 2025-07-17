import fs from 'fs';
import path from 'path';

const newVersion = process.argv[2];
if (!newVersion) {
    console.error('❌ Please provide a version number as argument');
    console.log('Usage: npm run update-version 3.0.0');
    process.exit(1);
}

// Define all files and their version patterns
const files = {
    // Root files
    'package.json': [{
        pattern: /"version":\s*"[^"]+"/,
        template: `"version": "${newVersion}"`
    }],
    'README.md': [
        {
            pattern: /version-[^-]+-blue\.svg/,
            template: `version-${newVersion}-blue.svg`
        },
        {
            pattern: /@[\d.]+\/dist\/textify\.min\.js/,
            template: `@${newVersion}/dist/textify.min.js`
        }
    ],
    
    // Source files
    'src/textify.js': [
        {
            pattern: /Textify v[\d.]+/,
            template: `Textify v${newVersion}`
        },
        {
            pattern: /version:\s*'[^']+'/,
            template: `version: '${newVersion}'`
        }
    ],
    
    // Documentation files
    'docs/package-summary.md': [{
        pattern: /Current Version:\s*[\d.]+/,
        template: `Current Version: ${newVersion}`
    }],
    'docs/textify.js.html': [
        {
            pattern: /Textify v[\d.]+\s*–/,
            template: `Textify v${newVersion} –`
        },
        {
            pattern: /version:\s*'[\d.]+'/,
            template: `version: '${newVersion}'`
        }
    ],
    
    // Demo/Example files
    'index.html': [{
        pattern: /<span class="version">v[\d.]+<\/span>/,
        template: `<span class="version">v${newVersion}</span>`
    }]
};

// Color console output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m'
};

async function updateFile(filepath, patterns) {
    try {
        if (!fs.existsSync(filepath)) {
            console.log(`${colors.yellow}⚠️ Skipping ${filepath} - File not found${colors.reset}`);
            return false;
        }

        let content = fs.readFileSync(filepath, 'utf8');
        let updated = false;

        for (const {pattern, template} of patterns) {
            const originalContent = content;
            content = content.replace(pattern, template);
            if (content !== originalContent) {
                updated = true;
            }
        }

        if (updated) {
            fs.writeFileSync(filepath, content);
            console.log(`${colors.green}✓ Updated ${filepath}${colors.reset}`);
            return true;
        } else {
            console.log(`${colors.yellow}⚠️ No version patterns found in ${filepath}${colors.reset}`);
            return false;
        }

    } catch (error) {
        console.error(`${colors.red}❌ Failed to update ${filepath}:${colors.reset}`, error.message);
        return false;
    }
}

async function updateVersions() {
    console.log(`\n${colors.blue}🚀 Updating version to ${newVersion}${colors.reset}\n`);
    
    const results = await Promise.all(
        Object.entries(files).map(([filepath, patterns]) => 
            updateFile(filepath, patterns)
        )
    );

    const updatedCount = results.filter(Boolean).length;
    const failedCount = results.filter(result => result === false).length;

    console.log(`\n${colors.blue}Summary:${colors.reset}`);
    console.log(`${colors.green}✓ ${updatedCount} files updated${colors.reset}`);
    if (failedCount > 0) {
        console.log(`${colors.yellow}⚠️ ${failedCount} files skipped or failed${colors.reset}`);
    }
    console.log('\n');
}

// Run the update
updateVersions().catch(console.error);