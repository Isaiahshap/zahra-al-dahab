export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-6">Privacy Policy</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Our commitment to your privacy and data protection
          </p>
        </div>

        {/* Content with luxury styling */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At Zahra Al Dahab, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our 
              website and tell you about your privacy rights and how the law protects you.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">The Data We Collect About You</h2>
            <p className="text-gray-700 leading-relaxed">
              Personal data, or personal information, means any information about an individual from which that 
              person can be identified. We may collect, use, store and transfer different kinds of personal data 
              about you which we have grouped together as follows:
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span><strong className="text-gray-900">Identity Data</strong> includes first name, last name, username or similar identifier.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span><strong className="text-gray-900">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span><strong className="text-gray-900">Financial Data</strong> includes payment card details.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span><strong className="text-gray-900">Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span><strong className="text-gray-900">Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</span>
              </li>
            </ul>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">How We Use Your Personal Data</h2>
            <p className="text-gray-700 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your 
              personal data in the following circumstances:
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Where we need to perform the contract we are about to enter into or have entered into with you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Where we need to comply with a legal obligation.</span>
              </li>
            </ul>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being 
              accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, 
              we limit access to your personal data to those employees, agents, contractors and other third 
              parties who have a business need to know.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Your Legal Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>The right to request access to your personal data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>The right to request correction of your personal data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>The right to request erasure of your personal data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>The right to object to processing of your personal data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>The right to request restriction of processing your personal data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>The right to request transfer of your personal data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>The right to withdraw consent.</span>
              </li>
            </ul>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new privacy policy on this page and updating the &quot;Last Updated&quot; date at the top of this page.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="my-20 bg-gray-50 p-10 rounded-lg shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-900">Have Questions?</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For any questions regarding our privacy policy or how we handle your data, please don&apos;t hesitate to reach out to our privacy team.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a 
              href="mailto:yeshaya@elux.dev" 
              className="inline-flex items-center px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm"
            >
              Contact Privacy Team
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              Email: <span className="text-gold">yeshaya@elux.dev</span>
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500 italic">
            This is a demo site. Visit <a href="https://elux.dev" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black transition-colors duration-300">elux.dev</a> for UAE luxury sites.
          </p>
        </div>
      </div>
    </div>
  );
} 