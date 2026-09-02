import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Refund & Cancellation Policy | Webnoia",
  description:
    "Webnoia's refund and cancellation policy for project services.",
};

export default function RefundPolicyPage() {
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
                Refund &amp; Cancellation Policy
              </h1>
              <p className="text-gray-500 text-sm">Last updated: 25 August 2026</p>
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-dark [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:mb-4 [&_ol]:space-y-2 [&_li]:text-gray-600 [&_li]:leading-relaxed [&_strong]:text-brand-dark [&_a]:text-brand-jade [&_a]:underline [&_a:hover]:text-jade-mid [&_table]:w-full [&_table]:my-6 [&_th]:text-left [&_th]:text-brand-dark [&_th]:font-semibold [&_th]:py-2 [&_th]:pr-4 [&_th]:border-b [&_th]:border-brand-border [&_td]:py-2 [&_td]:pr-4 [&_td]:text-gray-600 [&_td]:border-b [&_td]:border-brand-border/50">
              <p>
                This Refund &amp; Cancellation Policy explains how Webnoia
                handles project cancellations and refunds. It applies alongside
                the applicable Client Service Agreement.
              </p>

              <h2>1. Scope</h2>
              <p>
                This Policy applies to Webnoia projects and services unless a
                signed Client Service Agreement or written project-specific
                agreement expressly provides different terms.
              </p>

              <h2>2. Standard Project Payment Structure</h2>
              <p>Unless otherwise agreed:</p>
              <ul className="list-disc pl-6">
                <li><strong>50%</strong> is payable before work begins.</li>
                <li><strong>25%</strong> is payable after design approval.</li>
                <li><strong>25%</strong> is payable before final deployment, handover, or transfer.</li>
              </ul>
              <p>Invoices are generally due within <strong>7 calendar days</strong>.</p>

              <h2>3. Cancellation Before Work Begins</h2>
              <p>
                If the Client cancels before Webnoia has started work, the
                upfront amount may be refunded. Any unavoidable
                payment-processing charges or third-party costs already
                incurred may be deducted where applicable.
              </p>

              <h2>4. Cancellation After Work Has Begun</h2>
              <p>If the Client cancels after work has started:</p>
              <ol className="list-decimal pl-6">
                <li>
                  Webnoia will determine the value of work completed against
                  the agreed project scope and milestones.
                </li>
                <li>
                  Amounts already paid will be applied toward completed work.
                </li>
                <li>
                  If the Client has paid more than the value of completed work,
                  the eligible balance will be refunded.
                </li>
                <li>
                  If the value of completed work exceeds the amount already
                  paid, the remaining amount becomes payable.
                </li>
                <li>Third-party costs already incurred may be non-refundable.</li>
              </ol>

              <h2>5. Cancellation by Webnoia</h2>
              <p>
                If Webnoia is unable to complete a project for reasons within
                Webnoia&apos;s reasonable control, Webnoia will refund eligible
                amounts relating to agreed work or milestones that have not
                been delivered.
              </p>

              <h2>6. Client-Caused Delays</h2>
              <p>
                A project may be delayed when the Client does not provide
                required content, feedback, approvals, credentials, payments,
                or other dependencies. Such delays do not automatically create
                a right to a refund.
              </p>

              <h2>7. Revisions</h2>
              <p>
                Projects include <strong>2 rounds of revisions</strong> within
                the original scope unless otherwise agreed. Additional
                revisions and scope changes are treated as Change Requests
                and may be billed separately.
              </p>

              <h2>8. After Final Delivery</h2>
              <p>
                Once the project has been completed, accepted, and delivered or
                deployed:
              </p>
              <ul className="list-disc pl-6">
                <li>Refunds are generally not available for completed work.</li>
                <li>
                  The agreed <strong>2-month post-delivery bug-fix/support
                  period</strong> remains applicable.
                </li>
                <li>
                  New features, redesigns, content changes, integrations, or
                  other new requirements are billed separately or handled
                  under a maintenance plan.
                </li>
              </ul>

              <h2>9. Non-Refundable Third-Party Costs</h2>
              <p>The following may be non-refundable once incurred:</p>
              <ul className="list-disc pl-6">
                <li>Domain registration or renewal</li>
                <li>Hosting charges</li>
                <li>Vercel or other infrastructure charges</li>
                <li>Cloudflare or similar services</li>
                <li>Payment gateway fees</li>
                <li>Third-party software or licences</li>
                <li>Plugins and paid APIs</li>
                <li>Stock assets</li>
                <li>Other third-party purchases made for the project</li>
              </ul>

              <h2>10. Maintenance Plans</h2>
              <table>
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Starting price</th>
                    <th>General purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Essential</td>
                    <td>₹3,000/month</td>
                    <td>Small business and landing websites</td>
                  </tr>
                  <tr>
                    <td>Standard</td>
                    <td>₹6,000/month</td>
                    <td>Active business websites</td>
                  </tr>
                  <tr>
                    <td>Premium</td>
                    <td>₹10,000/month</td>
                    <td>E-commerce and higher-maintenance websites</td>
                  </tr>
                </tbody>
              </table>

              <h2>11. Refund Processing</h2>
              <p>
                Approved refunds will generally be processed within{" "}
                <strong>14 business days</strong> after the refund amount has
                been confirmed.
              </p>

              <h2>12. How to Request a Refund or Cancellation</h2>
              <p>
                Requests should be sent to:{" "}
                <strong>support@webnoia.com</strong>
              </p>
              <p>Please include:</p>
              <ul className="list-disc pl-6">
                <li>Client name</li>
                <li>Business name, if applicable</li>
                <li>Project name</li>
                <li>Invoice number, if available</li>
                <li>Reason for cancellation/refund</li>
                <li>Relevant payment details</li>
              </ul>

              <h2>13. Governing Law</h2>
              <p>
                This Policy is governed by the applicable laws of India.
                Disputes will be subject to the jurisdiction of the competent
                courts in <strong>Neral, Maharashtra, India</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
