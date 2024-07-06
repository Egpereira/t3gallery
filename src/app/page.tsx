import { db } from '~/server/db'

export const dynamic = 'force-dynamic'

const mockURLS = [
  'https://utfs.io/f/19b821a3-d4a5-4299-8f14-67d3936168de-8fqh8n.jpeg',
  'https://utfs.io/f/bcf34f98-3d0b-4a57-88f9-e74d955e3aa4-g1tb1c.jpeg',
  'https://utfs.io/f/5cef7e6e-66fc-4b3c-8aef-5611c5f31463-5frbah.jpeg',
  'https://utfs.io/f/823532b6-cc06-46df-9f38-6f90bcb58bda-ufkqi2.webp'
]

const mockImages = mockURLS.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  return (
    <main className=''>
      <div className='flex flex-wrap gap-4'>
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className='w-48'>
            <img src={image.url} alt='' />
          </div>
        ))}
      </div>
    </main>
  )
}
