#!/usr/bin/env node
/**
 * One-time setup: generates the bcrypt hash for your admin password.
 * Run: npm run setup
 * Then copy the output into Vercel → Settings → Environment Variables as ADMIN_PASSWORD_HASH
 */
import bcrypt from 'bcryptjs'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter admin password (min 12 chars): ', async (pw) => {
  if (pw.length < 12) {
    console.error('Error: password must be at least 12 characters.')
    process.exit(1)
  }

  console.log('\nHashing… (this takes a moment)')
  const hash = await bcrypt.hash(pw, 12)

  console.log('\n' + '='.repeat(60))
  console.log('Add this to Vercel → Project → Settings → Environment Variables:')
  console.log('='.repeat(60))
  console.log(`\nADMIN_PASSWORD_HASH=${hash}\n`)
  console.log('='.repeat(60))
  console.log('\nAlso generate a JWT_SECRET with:')
  console.log('  node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'base64\'))"')
  console.log()

  rl.close()
})
