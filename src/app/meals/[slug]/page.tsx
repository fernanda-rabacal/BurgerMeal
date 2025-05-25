type MealPageProps = {
  params: Promise<{ slug: string }>
}

export default async function Meal ({ params }: MealPageProps) {
  const { slug } = await params

  return (
    <h1>{slug} Meal</h1>
  )
}