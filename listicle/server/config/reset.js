import { pool } from './database.js'
import './dotenv.js'
import memberData from '../data/data.js'

const createMembersTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS members;

        CREATE TABLE IF NOT EXISTS members (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            position VARCHAR(255) NOT NULL,
            bounty VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 members table created successfully')
    } catch (err) {
        console.error('⚠️ error creating members table', err)
    }
}

const seedMembersTable = async () => {
    await createMembersTable()

    memberData.forEach((member) => {
        const insertQuery = {
            text: 'INSERT INTO members (name, position, bounty, image, description) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            member.name,
            member.position,
            member.bounty,
            member.image,
            member.description,
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting member', err)
                return
            }

            console.log(`✅ ${member.name} added successfully`)
        })
    })
}

seedMembersTable()