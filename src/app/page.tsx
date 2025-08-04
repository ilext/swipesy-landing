import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#7079BA' }}>Swipesy</div>
          <Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Can&apos;t decide? 
          <span className="block" style={{ color: '#7079BA' }}>
            Let Swipesy help.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          This is your fast, fun way to make decisions. Powered by AI. Swipe through smart, silly, or surprising ideas and topics.
        </p>
        <div className="flex justify-center items-center mb-12">
          <a 
            href="https://apps.apple.com/app/id6749251700" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all inline-block" 
            style={{ backgroundColor: '#7079BA' }}
          >
            Download on App Store
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🍕</div>
            <h3 className="text-xl font-semibold mb-3">What to eat tonight</h3>
            <p className="text-gray-600">Discover new restaurants and cuisines with AI-curated suggestions</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Weekend plans</h3>
            <p className="text-gray-600">Find exciting activities and adventures for your free time</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-3">Gift ideas</h3>
            <p className="text-gray-600">Perfect presents for any occasion and recipient</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-3">Products to try</h3>
            <p className="text-gray-600">Discover amazing products and services worth exploring</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-3">Group debates</h3>
            <p className="text-gray-600">Spark interesting conversations with friends and family</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Instant action</h3>
            <p className="text-gray-600">Jump straight to Google or Amazon with a tap</p>
          </div>
        </div>
      </section>

      {/* Why You'll Love It Section */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why you&apos;ll love it</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#7079BA' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Swipe to discover</h3>
            <p className="text-gray-600">AI-curated ideas tailored to your preferences</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#6C88B9' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tap to search or shop</h3>
            <p className="text-gray-600">Instant access to Google or Amazon</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#659C86' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Make shortlists</h3>
            <p className="text-gray-600">Save favorites to decide later</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#739E53' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Share with friends</h3>
            <p className="text-gray-600">Send topics to start group discussions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#CA7C47' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fun now—polling soon!</h3>
            <p className="text-gray-600">More interactive features coming</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D36969' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Skip the chaos</h3>
            <p className="text-gray-600">No more endless group chat debates</p>
          </div>
        </div>
      </section>

      {/* Screenshot Placeholder Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See Swipesy in Action</h2>
          <p className="text-xl text-gray-600">Here are 4 perfect places for your app screenshots</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-48 h-96 rounded-2xl mx-auto mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image 
                src="/1.jpg" 
                alt="Main Swipe Interface" 
                width={640} 
                height={1391} 
                className="rounded-2xl object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-48 h-96 rounded-2xl mx-auto mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image 
                src="/2.jpg" 
                alt="Shortlist & Favorites" 
                width={640} 
                height={1391} 
                className="rounded-2xl object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-48 h-96 rounded-2xl mx-auto mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image 
                src="/3.jpg" 
                alt="Search & Shop Integration" 
                width={640} 
                height={1391} 
                className="rounded-2xl object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-48 h-96 rounded-2xl mx-auto mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image 
                src="/4.jpg" 
                alt="Social Sharing" 
                width={640} 
                height={1391} 
                className="rounded-2xl object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 rounded-3xl mx-6 mb-16" style={{ backgroundColor: '#7079BA' }}>
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Swipe. Pick. Done.</h2>
          <p className="text-xl mb-8 opacity-90">Skip the group chat chaos and make decisions faster than ever.</p>
          <a 
            href="https://apps.apple.com/app/id6749251700" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all inline-block" 
            style={{ color: '#7079BA' }}
          >
            Download Swipesy Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0" style={{ color: '#7079BA' }}>Swipesy</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">
              Privacy Policy
            </Link>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-4">
          <p>&copy; 2025 Swipesy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
