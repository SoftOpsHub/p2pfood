import { motion } from "framer-motion";

const TermsAndConditionsContent = () => {
  const sections = [
    {
      title: "📜 Terms & Conditions for P2PFood",
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
            Welcome to P2PFood ("we," "our," or "us"). These Terms & Conditions ("Terms") govern your access to and use of the P2PFood mobile application (the "App"), which enables users to order food and allows kitchens to list, sell, and manage dishes.
          </p>
          <p className="mb-4">
            By creating an account, accessing, or using the App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use the App.
          </p>
        </div>
      ),
    },
    {
      title: "2. Eligibility",
      content: (
        <div>
          <p className="mb-4">
           You must be at least 13 years old to use the App. By using the App, you represent that you meet this requirement and have the legal capacity to enter into these Terms.
          </p>
        </div>
      ),
    },
    {
      title: "3. Accounts & Responsibilities",
      content: (
        <div>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              You are responsible for maintaining the confidentiality of your login credentials.
            </li>
            <li>
              You agree to provide accurate and up-to-date information.
            </li>
            <li>
              You are responsible for all activities that occur under your account.
            </li> 
          </ul>
          <p className="mb-4">
           We reserve the right to suspend or terminate accounts that violate these Terms.
          </p>
        </div>
      ),
    },
    {
      title: "4. User Roles",
      content: (
        <div>
          <h4 className="text-lg font-semibold mt-6 mb-3 text-orange-600">
            A. Users:
          </h4>
          <p className="mb-4">
            Users may browse kitchens, place orders, leave reviews, and communicate through the App.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3 text-orange-600">
            B. Kitchens:
          </h4>
          <p className="mb-4">
            Kitchens may list dishes, upload photos, manage orders, and communicate with users. Kitchens are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Accuracy of dish descriptions and pricing
            </li>
            <li>
              Food quality, hygiene, and compliance with local laws
            </li>
            <li>
              Timely order fulfillment
            </li>
          </ul>
          <p className="mb-4">
            P2PFood does not prepare, cook, or deliver food.
          </p>
        </div>
      ),
    },
    {
      title: "5. Orders & Payments",
      content: (
        <div>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payments are processed through third-party payment providers.</li>
            <li>
              P2PFood does not store full payment details.
            </li>
            <li>
              Refunds, cancellations, and disputes are subject to kitchen policies and applicable laws.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. User-Generated Content (UGC)",
      content: (
        <div>
          <p className="mb-4">
            The App allows users and kitchens to post content, including dish photos, reviews, and messages.
          </p>
          <p className="mb-4">
            By posting content, you agree that:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              You own or have permission to share the content
            </li>
            <li>
              Your content does not violate laws or third-party rights
            </li>
          </ul>
          <p className="mb-2 mt-2">
            Prohibited Content
          </p>
          <p className="mb-4">
            You must not post content that is:
          </p>
          <ul className="list-disc pl-6 space-y-3"> 
            <li>
              Illegal, abusive, hateful, threatening, or defamatory
            </li>
            <li>
              Sexually explicit or violent
            </li>
            <li>
              Misleading, fraudulent, or spam
            </li>
            <li>
              In violation of any law or regulation
            </li>
          </ul>
          <p className="mt-4 font-semibold text-blue-600">
            Zero tolerance applies to objectionable content.
          </p>
        </div>
      ),
    },
    {
      title: "7. Reporting & Blocking",
      content: (
        <div>
          <p className="mb-4">
            To maintain a safe platform:
          </p>
          <p className="mb-2">
            Users can report dishes or content they find objectionable
          </p>
          <p className="mb-2">
            Users can block abusive users
          </p>
          <p className="mb-4">
            Reported content is immediately hidden from the reporting user
          </p>
          <ul className="list-disc pl-6 space-y-3"> 
            <li>
              We review reports and take appropriate action within 24 hours, including content removal or account suspension
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "8. Notifications",
      content: (
        <div>
          <p className="mb-2">
            Push notifications are optional.
          </p>
          <p className="mb-2">
            You may choose to allow or deny notifications
          </p>
          <ul className="list-disc pl-6 space-y-3"> 
            <li>
              Declining notifications does not block access to the App
            </li>
            <li>
              Notifications are used for order updates, messages, and important app-related alerts
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "9. Account Deletion & Data Deletion",
      content: (
        <div>
          <p className="mb-4">
            You have full control over your account:
          </p>
          <ul className="list-disc pl-6 space-y-3"> 
            <li>
              <strong>Delete Account Data:</strong> Deletes stored user data while keeping the account active
            </li>
            <li>
              <strong>Delete Account:</strong> Permanently deletes your account and all associated data
            </li>
          </ul>
          <p className="mt-4 mb-2">
            Both options are available in:
          </p>
          <p className="mb-2">
            Profile → App Settings
          </p>
          <p className="mt-4">
            Account deletion is irreversible.
          </p>
        </div>
      ),
    },
    {
      title: "10. Intellectual Property",
      content: (
        <div>
          <p className="mb-4">
            All App content, trademarks, logos, and software are owned by or licensed to P2PFood. You may not copy, modify, distribute, or exploit any part of the App without written permission.
          </p>
        </div>
      ),
    },
    {
      title: "11. Termination",
      content: (
        <div>
          <p className="mb-4">
            We may suspend or terminate your account if you:
          </p>
          <ul className="list-disc pl-6 space-y-3"> 
            <li>
              Violate these Terms
            </li>
            <li>
              Post prohibited or abusive content
            </li>
            <li>
              Engage in fraudulent or illegal activities
            </li>
          </ul>
          <p>
            You may stop using the App and delete your account at any time.
          </p>
        </div>
      ),
    },
    {
      title: "12. Disclaimer & Limitation of Liability",
      content: (
        <div>
          <p className="mb-2">
            The App is provided "as is" without warranties of any kind.
          </p>
          <p className="mb-4">
            P2PFood is not responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-3"> 
            <li>
              Food quality or safety
            </li>
            <li>
              User or kitchen behavior
            </li>
            <li>
              Delays, losses, or damages resulting from app usage
            </li>
          </ul>
          <p>
            To the maximum extent permitted by law, P2PFood shall not be liable for indirect or consequential damages.
          </p>
        </div>
      ),
    },
    {
      title: "13. Governing Law",
      content: (
        <div>
          <p>
            These Terms are governed by and construed in accordance with the laws of your operating jurisdiction, without regard to conflict-of-law principles.
          </p>
        </div>
      ),
    },
    {
      title: "14. Changes to These Terms",
      content: (
        <div>
          <p>
            We may update these Terms from time to time. Changes will be posted in the App, and continued use of the App constitutes acceptance of the updated Terms.
          </p>
        </div>
      ),
    },
    {
      title: "15. Contact Us",
      content: (
        <div>
          <p>
            If you have questions or concerns about these Terms, please contact us at:
          </p>
          <p className="mt-3">
            <span role="img" aria-label="email">✉️</span>{' '}
            <a href="mailto:support@p2pfood.com" className="text-blue-600 underline">support@p2pfood.com</a>
          </p>
          <p className="mt-2">
            <span role="img" aria-label="office">🏢</span>{' '}P2PFood Support Team
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
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
          <div className="text-gray-700 leading-relaxed">{section.content}</div>
        </motion.div>
      ))}
      
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
    </div>
  );
};

export default TermsAndConditionsContent;