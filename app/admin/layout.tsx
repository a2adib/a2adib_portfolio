import Link from 'next/link'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-paper">
      {/* Sidebar */}
      <aside className="w-64 border-r border-rule bg-surface p-6">
        <div className="mb-8">
          <Link href="/" className="text-xl font-medium text-ink hover:text-accent transition-colors">
            Portfolio Admin
          </Link>
        </div>
        
        <nav className="space-y-2">
          <Link 
            href="/admin" 
            className="block rounded px-3 py-2 text-ink-soft hover:bg-rule-chip hover:text-ink transition-colors"
          >
            Dashboard
          </Link>
          <Link 
            href="/admin/personal-info" 
            className="block rounded px-3 py-2 text-ink-soft hover:bg-rule-chip hover:text-ink transition-colors"
          >
            Personal Info
          </Link>
          <Link 
            href="/admin/projects" 
            className="block rounded px-3 py-2 text-ink-soft hover:bg-rule-chip hover:text-ink transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/admin/blog" 
            className="block rounded px-3 py-2 text-ink-soft hover:bg-rule-chip hover:text-ink transition-colors"
          >
            Blog Posts
          </Link>
        </nav>

        <div className="absolute bottom-6 left-6">
          <form action="/auth/signout" method="post">
            <button className="text-sm text-ink-mute hover:text-red-500 transition-colors">
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
