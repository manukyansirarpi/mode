import { PropsWithChildren } from 'react'
import { Suspense } from 'react'
import Navigation from '../../components/Navigation'
import DashboardSkeleton from '../../components/DashboardSkeleton'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pl-16 md:pl-64 pt-0 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          <Suspense fallback={<DashboardSkeleton />}>{children}</Suspense>
        </div>
      </main>
    </div>
  )
}

export default Layout
