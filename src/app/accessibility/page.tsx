export default function AccessibilityPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-6">Accessibility</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Our commitment to making our website accessible to all users
          </p>
        </div>

        {/* Content with luxury styling */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              At Zahra Al Dahab, we are committed to ensuring digital accessibility for people of all abilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility 
              standards to ensure we provide equal access to all users.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Standards We Follow</h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to conform to the World Wide Web Consortium&apos;s Web Content Accessibility Guidelines 
              (WCAG) 2.1 at Level AA. These guidelines provide a wide range of recommendations for making web 
              content more accessible to a wider range of people with disabilities, including blindness and low 
              vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, 
              speech disabilities, photosensitivity, and combinations of these.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Key Features</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website includes the following accessibility features:
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Semantic HTML to ensure proper document structure</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Alt text for all images</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Descriptive labels for form elements</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Logical tab order for keyboard navigation</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Appropriate color contrast for text and interface elements</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Responsive design that adapts to different devices and screen sizes</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Clear and consistent navigation</span>
              </li>
            </ul>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Assistive Technologies Supported</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website aims to be compatible with the following assistive technologies:
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Screen readers (like NVDA, JAWS, VoiceOver)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Speech recognition software</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Screen magnification software</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Alternative keyboard and mouse input devices</span>
              </li>
            </ul>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Known Limitations</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to ensure that our website is accessible to all users, we recognize that there 
              may be limitations that we are continuously working to address. If you encounter any issues with 
              accessibility while using our website, please contact us so we can work on improving your experience.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Continuous Improvement</h2>
            <p className="text-gray-700 leading-relaxed">
              We are constantly evaluating new technologies and implementing improvements to make our website 
              more accessible. As part of our ongoing commitment, we perform periodic accessibility audits and 
              remediation to identify and fix any issues that may arise.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="my-20 bg-gray-50 p-10 rounded-lg shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-900">Accessibility Support</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We welcome your feedback on the accessibility of our website. If you encounter any barriers or have 
              suggestions for improving your browsing experience, please contact our accessibility team.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a 
              href="mailto:yeshaya@elux.dev" 
              className="inline-flex items-center px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm"
            >
              Contact Accessibility Team
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