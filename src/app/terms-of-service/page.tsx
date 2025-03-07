export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-6">Terms of Service</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Please read these terms carefully before using our services
          </p>
        </div>

        {/* Content with luxury styling */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of Zahra Al Dahab&apos;s 
              website. By accessing this website, we assume you accept these terms and conditions in full. 
              Do not continue to use Zahra Al Dahab&apos;s website if you do not accept all of the terms and 
              conditions stated on this page.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              Unless otherwise stated, Zahra Al Dahab and/or its licensors own the intellectual property rights 
              for all material on Zahra Al Dahab. All intellectual property rights are reserved. You may view 
              and/or print pages from the website for your own personal use subject to restrictions set in these 
              terms and conditions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">You must not:</p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Republish material from this website</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Sell, rent or sub-license material from this website</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Reproduce, duplicate or copy material from this website</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Redistribute content from Zahra Al Dahab (unless content is specifically made for redistribution)</span>
              </li>
            </ul>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">User Content</h2>
            <p className="text-gray-700 leading-relaxed">
              In these terms and conditions, &quot;User Content&quot; shall mean any audio, video, text, images or other 
              material you choose to display on this website. By displaying your User Content, you grant Zahra Al Dahab 
              a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, 
              publish, translate and distribute it in any and all media.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Your User Content must be your own and must not be infringing on any third party&apos;s rights. 
              Zahra Al Dahab reserves the right to remove any of your content from this website at any time without notice.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Zahra Al Dahab, nor any of its officers, directors and employees, be liable to you 
              for anything arising out of or in any way connected with your use of this website, whether such liability 
              is under contract, tort or otherwise, and Zahra Al Dahab, including its officers, directors and employees 
              shall not be liable for any indirect, consequential or special liability arising out of or in any way 
              related to your use of this website.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You hereby indemnify to the fullest extent Zahra Al Dahab from and against any and all liabilities, costs, 
              demands, causes of action, damages and expenses (including reasonable attorney&apos;s fees) arising out of 
              or in any way related to your breach of any of the provisions of these Terms.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such 
              unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such 
              provisions shall be deleted without affecting the remaining provisions herein.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Variation of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Zahra Al Dahab is permitted to revise these Terms at any time as it sees fit, and by using this website 
              you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions 
              governing use of this website.
            </p>
          </div>

          <div className="mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Governing Law & Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms will be governed by and construed in accordance with the laws of the United Arab Emirates, 
              and you submit to the non-exclusive jurisdiction of the state and federal courts located in UAE for the 
              resolution of any disputes.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="my-20 bg-gray-50 p-10 rounded-lg shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-900">Legal Inquiries</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For any questions about our terms of service, legal concerns, or clarification requests, please contact our legal team.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a 
              href="mailto:yeshaya@elux.dev" 
              className="inline-flex items-center px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm"
            >
              Contact Legal Team
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