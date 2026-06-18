import 'dotenv/config'
import { connectDatabase, disconnectDatabase } from '../config/database.js'
import { Workshop } from '../models/Workshop.js'

const SEED_WORKSHOPS = [
  {
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
  },
  {
    title: 'AI & Robotics Summer Workshop',
    description:
      'An exciting online summer program where kids aged 8–14 learn AI fundamentals, build robots, and develop creative problem-solving skills through hands-on projects.',
    date: '15 July 2026',
    duration: '4 Weeks',
    location: 'Online',
    capacity: 100,
    registeredCount: 0,
    price: 2999,
    isActive: true,
  },
]

async function seed() {
  await connectDatabase()

  for (const workshop of SEED_WORKSHOPS) {
    const existing = await Workshop.findOne({ title: workshop.title })

    if (existing) {
      console.info(`Seed skipped — "${workshop.title}" already exists (id: ${existing._id.toString()})`)
      continue
    }

    const created = await Workshop.create(workshop)
    console.info(`Seed complete — created "${created.title}" (id: ${created._id.toString()})`)
  }

  await disconnectDatabase()
}

seed().catch(async (error) => {
  console.error('Seed failed:', error)
  await disconnectDatabase()
  process.exit(1)
})
