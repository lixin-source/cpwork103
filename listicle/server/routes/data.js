import express from 'express'
import path from 'path'
import GiftsController from '../controllers/members.js'
import { fileURLToPath } from 'url'

// import onePieceData from '../data/data.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', GiftsController.getMembers)

router.get('/:memberId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/member.html'))
})

export default router