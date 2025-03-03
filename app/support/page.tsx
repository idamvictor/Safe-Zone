import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-[#1a2035] text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Support</h1>
          <p className="text-blue-400 mb-8">
            We&apos;re here to help you stay safe
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              How Can We Assist You?
            </h2>
            <p className="text-gray-300 mb-4">
              At SafeZone, we&apos;re committed to providing you with the best
              possible support. Whether you have questions about using our app,
              need help with a feature, or want to report an issue, we&apos;re
              here to assist you 24/7.
            </p>
            <p className="text-gray-300 mb-4">
              Before contacting our support team, please check our Frequently
              Asked Questions below. You might find a quick answer to your
              question!
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-blue-400 mb-2">
                  How do I activate the SOS feature?
                </h3>
                <p className="text-gray-300">
                  To activate the SOS feature, press and hold the large red SOS
                  button on the main screen of the app for 3 seconds. This will
                  alert our Protect Agents and your emergency contacts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-400 mb-2">
                  Can I use SafeZone without an internet connection?
                </h3>
                <p className="text-gray-300">
                  While some basic features may work offline, SafeZone requires
                  an internet connection for full functionality, including
                  real-time alerts and emergency assistance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-400 mb-2">
                  How do I add or remove emergency contacts?
                </h3>
                <p className="text-gray-300">
                  Go to the &quot;Settings&quot; menu in the app, then select
                  &quot;Emergency Contacts.&quot; Here you can add new contacts
                  or remove existing ones.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-400 mb-2">
                  Is my location data always being tracked?
                </h3>
                <p className="text-gray-300">
                  SafeZone only tracks your location when necessary for
                  providing safety alerts or during an active emergency. You can
                  control location permissions in your device settings or the
                  app&apos;s privacy settings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-400 mb-2">
                  How do I report a safety issue or incident?
                </h3>
                <p className="text-gray-300">
                  Tap the &quot;Report Incident&quot; button on the main screen.
                  You can then select the type of incident and provide details.
                  Include photos or videos if it&apos;s safe to do so.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you couldn&apos;t find the answer you were looking for, our
              support team is ready to help you. You can reach us through the
              following channels:
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-400 mr-3" />
                <p className="text-gray-300">
                  Email:{" "}
                  <a
                    href="mailto:support@safezone.ng"
                    className="text-blue-400 hover:underline"
                  >
                    support@safezone.ng
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-400 mr-3" />
                <p className="text-gray-300">
                  Phone: +234 800 SAFE ZONE (Available 24/7)
                </p>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-blue-400 mr-3" />
                <p className="text-gray-300">
                  In-App Chat: Open the SafeZone app and tap on the
                  &quot;Support Chat&quot; option
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Additional Resources
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                <Link
                  href="/user-guide"
                  className="text-blue-400 hover:underline"
                >
                  User Guide: Detailed instructions on using SafeZone
                </Link>
              </li>
              <li>
                <Link
                  href="/video-tutorials"
                  className="text-blue-400 hover:underline"
                >
                  Video Tutorials: Step-by-step visual guides for key features
                </Link>
              </li>
              <li>
                <Link
                  href="/safety-tips"
                  className="text-blue-400 hover:underline"
                >
                  Safety Tips: Best practices for personal and community safety
                </Link>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Emergency Services</h2>
            <p className="text-gray-300 mb-4">
              Remember, SafeZone is not a replacement for emergency services. In
              case of immediate danger or life-threatening situations, always
              call your local emergency number first.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Police Emergency: 112 or 199</li>
              <li>Fire Service: 112 or 199</li>
              <li>Ambulance: 112 or 199</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
            <p className="text-gray-300 mb-4">
              Your feedback helps us improve SafeZone. If you have suggestions
              or want to report a bug, please email us at{" "}
              <a
                href="mailto:feedback@safezone.ng"
                className="text-blue-400 hover:underline"
              >
                feedback@safezone.ng
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
