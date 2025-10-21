import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { DashboardPage } from './pages/DashboardPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { MemberPage } from './pages/MemberPage.tsx'
import Layout from './components/layout/layout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/homepage',
        element: <HomePage />
      },
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/members',
        element: <MemberPage/>
      }
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
