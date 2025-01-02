require('dotenv').config()
const { execSync } = require('child_process')

const projectId = process.env.VITE_SUPABASE_PROJECT_ID
if (!projectId) {
	console.error('Error: VITE_SUPABASE_PROJECT_ID is not defined in .env file.')
	process.exit(1)
}

execSync(`supabase link --project-ref ${projectId}`, { stdio: 'inherit' })
