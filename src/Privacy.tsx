import './App.css';
import logo from './assets/logo.png';
import { motion } from "framer-motion";

function Privacy() {
  const sections = [
    {
      title: "📜 Privacy Policy for P2PFood",
      content: (
        <div className="mb-6">
          <p className="mb-2">
            <strong>Effective Date:</strong> [October 1, 2025]
          </p>
          <p className="mb-4">
            <strong>Last Updated:</strong> [October 1, 2025]
          </p>
        </div>
      ),
    },
    {
      title: "1. Introduction",
      content: (
        <div>
          <p className="mb-4">
            P2PFood (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
            is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our P2PFood mobile application (the
            &ldquo;App&rdquo;), which provides a platform for users to order
            food and for kitchens to list and sell dishes.
          </p>
          <p className="mb-4">
            Please read this Privacy Policy carefully. By creating an account,
            accessing, or using the App, you signify your agreement to the terms
            of this Privacy Policy. If you do not agree with the practices
            described in this policy, you must not use our App.
          </p>
        </div>
      ),
    },
    {
      title: "2. Information We Collect",
      content: (
        <div>
          <p className="mb-4">
            We collect information that you provide directly to us and
            information about your use of the App.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3 text-orange-600">
            A. Information You Provide Directly:
          </h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Account Information:</strong> When you register as a User
              or a Kitchen, we collect your name, phone number, and a password.
              For Kitchens, we may also collect a business name,
              address and location.
            </li>
            <li>
              <strong>Profile Information:</strong> You may choose to provide a
              profile picture for your account.
            </li>
            <li>
              <strong>User-Generated Content:</strong> This includes photos of
              dishes you post (as a Kitchen), orders you place, and reviews and
              ratings you submit for kitchens or specific dishes.
            </li>
            <li>
              <strong>Payment Information:</strong> We work with third-party
              payment processors (e.g., Stripe, PayPal). While we facilitate the
              transaction, we do not store your full credit card or bank account
              details on our servers.
            </li>
            <li>
              <strong>Communications:</strong> Records of your correspondence
              with us or with other users/kitchens through the App.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3 text-orange-600">
            B. Information Collected Automatically:
          </h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Device Information:</strong> We collect information about
              the device you use to access the App, including the hardware
              model, operating system and version, unique device identifiers,
              mobile network information, and IP address.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect data about your
              interaction with the App, such as the features you use, the time
              and duration of your activities, and the kitchens and dishes you
              view.
            </li>
            <li>
              <strong>Location Data:</strong> With your explicit permission, we
              collect precise (GPS-level) or approximate location data from your
              mobile device for showing nearby kitchens and enabling delivery
              services.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3 text-orange-600">
            C. Information from Device Permissions (with your consent):
          </h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Camera:</strong> Used to take pictures of dishes
              (Kitchens) or for profile pictures. We only access the camera when
              you actively choose to use it within the App.
            </li>
            <li>
              <strong>Photo Library (Gallery):</strong> Used to upload existing
              pictures of dishes (Kitchens) or for profile pictures. We only
              access the photos you specifically select.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <div>
          <p className="mb-4">
            We use the collected information for the following business
            purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To create, maintain, and secure your account</li>
            <li>
              To facilitate the core App functions: enabling kitchens to post
              dishes, users to browse and order, and kitchens to accept/reject
              orders
            </li>
            <li>
              To process transactions and send you transaction confirmations
            </li>
            <li>To display user reviews and ratings for kitchens and dishes</li>
            <li>To provide customer support and respond to your inquiries</li>
            <li>
              To personalize your experience, such as showing you relevant
              kitchens and dishes
            </li>
            <li>
              To send you administrative messages, alerts, and updates related
              to the App
            </li>
            <li>
              To send promotional communications (you can opt-out at any time)
            </li>
            <li>
              To monitor and analyze usage and trends to improve the App&apos;s
              functionality and user experience
            </li>
            <li>
              To detect, prevent, and address technical issues, fraud, or
              potentially illegal activities
            </li>
            <li>
              To comply with legal obligations and enforce our Terms of Service
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. How We Share Your Information",
      content: (
        <div>
          <p className="mb-4">
            We may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Between Users and Kitchens:</strong> To fulfill an order,
              we share your name, order details, and (for Users) your collection
              location or contact details with the Kitchen. Reviews you post
              will be publicly displayed under your profile name.
            </li>
            <li>
              <strong>With Service Providers:</strong> We engage trusted
              third-party companies to perform services on our behalf, such as
              Cloud Hosting, Payment Processing, Analytics, and Mapping
              Services. These providers are contractually obligated to handle
              your data securely.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose your
              information if required to do so by law, or in response to a valid
              legal request.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              sale of company assets, financing, or acquisition, your
              information may be transferred to the new owners.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may share your information
              for any other purpose disclosed to you at the time we collect it,
              with your consent.
            </li>
          </ul>
          <p className="mt-4 font-semibold text-blue-600">
            We do not sell or rent your personal information to third-party data
            brokers for their marketing purposes.
          </p>
        </div>
      ),
    },
    {
      title: "5. Data Retention",
      content: (
        <div>
          <p className="mb-4">
            We will retain your personal information only for as long as is
            necessary for the purposes set out in this Policy, or as needed to
            comply with our legal obligations, resolve disputes, and enforce our
            agreements.
          </p>
          <p>
            You can request the deletion of your account and associated data
            through the App settings or by contacting us. We will process such
            requests in accordance with applicable laws. Please note that we may
            retain certain information as necessary for legitimate business
            interests or legal recordkeeping requirements.
          </p>
        </div>
      ),
    },
    {
      title: "6. International Data Transfers",
      content: (
        <div>
          <p>
            Your information may be transferred to and processed in countries
            other than your own. We ensure that appropriate safeguards are in
            place to protect your data in accordance with this Privacy Policy,
            such as using standard contractual clauses approved by relevant
            authorities.
          </p>
        </div>
      ),
    },
    {
      title: "7. Security of Your Information",
      content: (
        <div>
          <p>
            We implement administrative, technical, and physical security
            measures designed to protect your personal data. These include
            encryption, secure socket layer (SSL) technology, and access
            controls. However, no method of transmission over the Internet or
            electronic storage is 100% secure. Therefore, while we strive to use
            commercially acceptable means to protect your information, we cannot
            guarantee its absolute security.
          </p>
        </div>
      ),
    },
    {
      title: "8. Your Privacy Rights",
      content: (
        <div>
          <p className="mb-4">
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access & Portability:</strong> The right to request a copy
              of the personal data we hold about you
            </li>
            <li>
              <strong>Correction:</strong> The right to correct inaccurate or
              incomplete data
            </li>
            <li>
              <strong>Deletion:</strong> The right to request that we delete
              your personal data
            </li>
            <li>
              <strong>Restriction of Processing:</strong> The right to request
              that we temporarily or permanently stop processing all or some of
              your personal data
            </li>
            <li>
              <strong>Objection to Processing:</strong> The right to object to
              our processing of your personal data
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Where we rely on your consent,
              you have the right to withdraw it at any time
            </li>
          </ul>
          <p className="mt-4">
            You can exercise many of these rights directly through your App
            account settings. To exercise other rights, please contact us using
            the details in Section 12.
          </p>
        </div>
      ),
    },
    {
      title: "9. Children's Privacy",
      content: (
        <div>
          <p>
            Our App is not intended for individuals under the age of 13. We do
            not knowingly collect personal information from children under 13.
            If we become aware that we have collected personal information from
            a child under 13, we will take steps to delete such information from
            our files.
          </p>
        </div>
      ),
    },
    {
      title: "10. Third-Party Links and Services",
      content: (
        <div>
          <p>
            Our App may contain links to third-party websites or services (e.g.,
            a Kitchen&apos;s own website, social media pages). This Privacy
            Policy does not apply to those third parties. We encourage you to
            review the privacy policies of every third-party service you
            interact with.
          </p>
        </div>
      ),
    },
    {
      title: "11. Changes to This Privacy Policy",
      content: (
        <div>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;Last
            Updated&rdquo; date at the top of this policy will indicate when
            changes were made. We will notify you of any material changes by
            posting the new policy in the App and/or by sending you a
            notification. Your continued use of the App after any modification
            constitutes your acceptance of the revised Privacy Policy.
          </p>
        </div>
      ),
    },
    {
      title: "12. Contact Us",
      content: (
        <div>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-6">
            <p className="text-gray-800 font-semibold mb-2">P2PFood Support</p>
            <p className="text-gray-700">Email: info@softopshub.com</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="P2PFood Logo" className="h-12 w-12 rounded-full" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                P2PFood
              </h1>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</a>
              <a href="/#features" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Features</a>
              <a href="/#download" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Download</a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: [October 1, 2025]</p>

          <div className="prose prose-lg max-w-none">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-orange-500 pb-2">
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-center">
                By using P2PFood, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-green-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2026 P2PFood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Privacy;