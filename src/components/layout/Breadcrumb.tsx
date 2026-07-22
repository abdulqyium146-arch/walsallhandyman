import Link from 'next/link'
import SchemaScript from '../schema/SchemaScript'
import { buildBreadcrumbSchema } from '@/lib/schema'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: 'Home', href: '/' }, ...items]
  const schema = buildBreadcrumbSchema(allItems.map((item) => ({ name: item.name, url: item.href })))

  return (
    <>
      <SchemaScript schema={schema} />
      <nav aria-label="Breadcrumb" className="py-3 text-sm text-[#718096]">
        <ol className="flex flex-wrap items-center gap-1">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true" className="text-[#C9933A]/50">/</span>}
              {i === allItems.length - 1 ? (
                <span aria-current="page" className="text-[#4A5568] font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-[#C9933A] transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
