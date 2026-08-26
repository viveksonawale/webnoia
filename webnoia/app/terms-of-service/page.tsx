import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Service | Webnoia",
  description:
    "Terms of Service for Webnoia — web design & development services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        <section className="w-full py-20 md:py-32 bg-brand-white">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-jade" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-3">
                Terms of Service
              </h1>
              <p className="text-gray-500 text-sm">Last updated: 25 August 2026</p>
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-dark [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:space-y-2 [&_li]:text-gray-600 [&_li]:leading-relaxed [&_strong]:text-brand-dark [&_a]:text-brand-jade [&_a]:underline [&_a:hover]:text-jade-mid [&_table]:w-full [&_table]:my-6 [&_th]:text-left [&_th]:text-brand-dark [&_th]:font-semibold [&_th]:py-2 [&_th]:pr-4 [&_th]:border-b [&_th]:border-brand-border [&_td]:py-2 [&_td]:pr-4 [&_td]:text-gray-600 [&_td]:border-b [&_td]:border-brand-border/50">
              <p>
                These Terms of Service (&quot;Terms&quot;) govern use of the Webnoia
                website and provide the general terms applicable to services
                offered by Webnoia.
              </p>
              <p>
                <strong>Webnoia</strong> is a sole proprietorship owned and
                operated by <strong>Vivek Ramesh Sonawale</strong>.
              </p>

              <h2>1. Business Information</h2>
              <p>
                <strong>Business:</strong> Webnoia<br />
                <strong>Owner:</strong> Vivek Ramesh Sonawale<br />
                <strong>Business type:</strong> Sole Proprietorship<br />
                <strong>Udyam Registration:</strong> UDYAM-MH-27-0276185<br />
                <strong>Registered address:</strong> 201, Shri Sai Apartment,
                Ganga Nagar, Neral, Maharashtra, India<br />
                <strong>Email:</strong> hello@webnoia.com<br />
                <strong>Support:</strong> support@webnoia.com<br />
                <strong>Phone:</strong> +91 9975558544<br />
                <strong>Website:</strong> webnoia.com
              </p>

              <h2>2. Services</h2>
              <p>
                Webnoia provides digital services that may include:
              </p>
              <ul className="list-disc pl-6">
                <li>Website design</li>
                <li>Website development</li>
                <li>Landing pages</li>
                <li>Business websites</li>
                <li>E-commerce websites</li>
                <li>Web applications</li>
                <li>Website maintenance</li>
                <li>Hosting and deployment assistance</li>
                <li>Domain setup</li>
                <li>Related digital and technology services</li>
              </ul>

              <h2>3. Project Agreements</h2>
              <p>
                A signed or otherwise accepted Client Service Agreement and
                approved project proposal/quotation govern project-specific
                matters. If there is a conflict between these Terms and a signed
                Client Service Agreement, the project agreement controls.
              </p>

              <h2>4. Website Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6">
                <li>Use the website for unlawful purposes.</li>
                <li>Attempt unauthorized access to the website or its systems.</li>
                <li>Interfere with website operation or security.</li>
                <li>Copy, reproduce, redistribute, or exploit Webnoia content without permission.</li>
                <li>Introduce malicious code, malware, or other harmful material.</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                Unless otherwise stated, the Webnoia website, including its
                branding, logo, text, graphics, design, and original content,
                belongs to Webnoia or its respective licensors.
              </p>
              <p>
                Client project ownership is governed by the applicable Client
                Service Agreement. Webnoia retains rights in its pre-existing
                and reusable code, components, libraries, templates,
                frameworks, tools, techniques, and know-how.
              </p>

              <h2>6. Payments</h2>
              <p>Webnoia&apos;s standard project payment structure is:</p>
              <ul className="list-disc pl-6">
                <li>50% before work begins</li>
                <li>25% after design approval</li>
                <li>25% before final deployment or handover</li>
              </ul>
              <p>
                Invoices are generally due within 7 calendar days unless
                otherwise stated. Webnoia is currently not GST registered.
              </p>

              <h2>7. Refunds and Cancellations</h2>
              <p>
                Refunds and cancellations are governed by Webnoia&apos;s{" "}
                <a href="/refund-policy">Refund &amp; Cancellation Policy</a>{" "}
                and the applicable Client Service Agreement.
              </p>

              <h2>8. Third-Party Services</h2>
              <p>
                Webnoia may use or integrate third-party services such as
                hosting providers, domain registrars, Vercel, Cloudflare,
                Cal.com, Resend, payment gateways, APIs, and others. These
                are subject to their own terms and policies.
              </p>

              <h2>9. Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul className="list-disc pl-6">
                <li>Providing accurate information.</li>
                <li>Providing required content and assets.</li>
                <li>Having necessary rights and permissions for Client-provided content.</li>
                <li>Reviewing and approving project deliverables.</li>
                <li>Providing timely feedback and access.</li>
                <li>Complying with applicable laws.</li>
              </ul>

              <h2>10. Maintenance and Support</h2>
              <p>Starting maintenance plans are:</p>
              <table>
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Starting price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Essential</td>
                    <td>₹3,000/month</td>
                  </tr>
                  <tr>
                    <td>Standard</td>
                    <td>₹6,000/month</td>
                  </tr>
                  <tr>
                    <td>Premium</td>
                    <td>₹10,000/month</td>
                  </tr>
                </tbody>
              </table>

              <h2>11. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Webnoia&apos;s
                total liability relating to a specific project will not exceed
                the total amount actually paid to Webnoia for that project.
              </p>

              <h2>12. Portfolio</h2>
              <p>
                Unless a Client requests otherwise in writing, Webnoia may
                showcase completed projects in its portfolio, website, case
                studies, proposals, and marketing materials.
              </p>

              <h2>13. Privacy</h2>
              <p>
                Use of the Webnoia website is also subject to the{" "}
                <a href="/privacy-policy">Webnoia Privacy Policy</a>.
              </p>

              <h2>14. Governing Law and Jurisdiction</h2>
              <p>
                These Terms are governed by the applicable laws of India.
                Disputes will be subject to the jurisdiction of the competent
                courts in <strong>Neral, Maharashtra, India</strong>.
              </p>

              <h2>15. Contact</h2>
              <p>
                For general enquiries: <strong>hello@webnoia.com</strong><br />
                For support: <strong>support@webnoia.com</strong>
              </p>
              <p>
                <strong>Webnoia</strong><br />
                Owned and operated by <strong>Vivek Ramesh Sonawale</strong><br />
                201, Shri Sai Apartment, Ganga Nagar, Neral, Maharashtra, India<br />
                +91 9975558544
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
