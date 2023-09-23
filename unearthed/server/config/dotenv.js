// used to load environment variables from a .env file into process.env
// store sensitive information, such as database credentials, API keys, and other configuration options

import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })