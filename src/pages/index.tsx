import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Layout>
      <script src="//unpkg.com/alpinejs" defer></script>

        <div className="flex min-h-screen w-full flex-wrap content-center justify-center bg-gray-200">
          <div x-data="{open: false}">
            <button className="rounded-md bg-blue-600 px-2 py-1 text-white">Hello 🔊</button>
            <div></div>
          </div>
        </div>
        </Layout>
    </div>
  )
}
