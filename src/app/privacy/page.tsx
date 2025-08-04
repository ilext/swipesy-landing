import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold" style={{ color: '#7079BA' }}>
              Swipesy
            </Link>
            <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy for Swipesy</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <p className="text-sm text-gray-500 mb-4">Effective Date: August 1, 2025</p>
              <p>
                Swipesy values your privacy. This Privacy Policy explains what data we collect, how we use it, and what choices you have. By using Swipesy, you agree to this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Collect</h2>
              <p>We collect only the minimal data necessary to provide Swipesy&apos;s features:</p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                <li><strong>Name or Nickname:</strong> Collected when you participate in a poll. Used to identify your responses.</li>
                <li><strong>Device ID & User ID:</strong> Used to support core app functionality like saving your polls and preferences.</li>
                <li><strong>Poll Topics and Responses:</strong> Stored in our secure online database and may be visible to others if shared.</li>
                <li><strong>Affiliate Tracking Data:</strong> We use Amazon affiliate tracking when you interact with product links. This helps us earn a small commission if you make a purchase—at no extra cost to you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies We Use</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">OpenAI GPT Models</h3>
                  <p>
                    We use OpenAI technology to help generate ideas and suggestions based on your input. Some of your text inputs may be shared with OpenAI&apos;s models to generate responses. This is done securely and only to serve your experience in the app.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Firebase Analytics</h3>
                  <p>
                    We use Firebase Analytics to understand how users interact with our app. This helps us improve the app experience by analyzing usage patterns, feature adoption, and app performance. Firebase Analytics collects anonymous usage data and does not personally identify you.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
              <p>We do not sell your data.</p>
              <p className="mt-2">
                We may share anonymized or aggregated information for analytics or product improvement. Polls you create or vote in may be visible to other users, depending on the settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p>
                We retain data for as long as needed to provide you with the service or until you request deletion. You can contact us to delete your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Choices</h2>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                <li>You can choose a nickname instead of your real name.</li>
                <li>You can avoid clicking on external affiliate links if you do not wish to be tracked.</li>
                <li>You can request deletion of your data at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
              <p>
                Swipesy is for entertainment and personal decision-making. It does not provide professional, legal, or medical advice. Swipesy may include AI-generated content or user-submitted content that is not verified for accuracy. Use your own judgment when acting on any information from the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p>
                If you have questions about this policy or want to request data deletion, please contact:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="flex items-center gap-2 mb-2">
                  <span>📧</span>
                  <span><strong>Email:</strong> support@swipesy.app</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>🌐</span>
                  <span><strong>Website:</strong> swipesy.app</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0" style={{ color: '#7079BA' }}>Swipesy</div>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                Home
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
        </div>
      </footer>
    </div>
  )
} 