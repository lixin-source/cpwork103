import express from 'express'
// provides utilities for working with file and directory paths
import path from 'path'
//converts a file URL to a file path. It takes a single argument, which is a file URL in the form of a string, and returns a file path in the form of a string. This function is useful when working with file URLs in Node.js, as many Node.js APIs expect file paths rather than file URLs
import { fileURLToPath } from 'url'
import giftData from '../data/gifts.js'


//Convert the import.meta.url property to a file path and store the result in a variable called __filename.
const __filename = fileURLToPath(import.meta.url)
// contain the directory name of the current module file
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(giftData)
  })

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
  })

export default router