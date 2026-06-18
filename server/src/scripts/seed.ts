import 'dotenv/config'
import { connectDatabase, disconnectDatabase } from '../config/database.js'
import { Workshop } from '../models/Workshop.js'

const SEED_WORKSHOP = {
  title: 'Master Modern Teaching Strategies',
  description:
    'A hands-on workshop for educators ready to transform their classrooms with evidence-based pedagogy, digital tools, and student-centered design.',
  date: 'Saturday, July 18, 2026 — 9:00 AM – 5:00 PM',
  duration: '8 Hours',
  location: 'Gema Learning Hub, Kathmandu, Nepal',
  capacity: 40,
  registeredCount: 28,
  price: 0,
  isActive: true,
}

async function seed() {
  await connectDatabase()

  const existing = await Workshop.findOne({ title: SEED_WORKSHOP.title })

  if (existing) {
    console.info(`Seed skipped — workshop already exists (id: ${existing._id.toString()})`)
    await disconnectDatabase()
    return
  }

  const workshop = await Workshop.create(SEED_WORKSHOP)
  console.info(`Seed complete — created workshop (id: ${workshop._id.toString()})`)

  await disconnectDatabase()
}

seed().catch(async (error) => {
  console.error('Seed failed:', error)
  await disconnectDatabase()
  process.exit(1)
})
