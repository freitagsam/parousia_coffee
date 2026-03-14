import { notFound } from 'next/navigation'
import { coffees, getCoffeeBySlug } from '@/lib/coffees'
import ProductDetail from './ProductDetail'

export function generateStaticParams() {
  return coffees.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const coffee = getCoffeeBySlug(slug)
  if (!coffee) return {}
  return {
    title: `${coffee.name} — Parousia Coffee`,
    description: coffee.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const coffee = getCoffeeBySlug(slug)
  if (!coffee) notFound()
  return <ProductDetail coffee={coffee} />
}
