/* Cloud Nine form delivery
 *
 * Contact, bride-story, and newsletter submissions stay in an error state
 * until the values below are real endpoints. Do not paste a placeholder id.
 *
 * Setup (Formspree):
 * 1. Create a form at https://formspree.io for appointment requests, general
 *    contact, and bride stories. One form is enough. Each submission includes
 *    a hidden "form-name" field:
 *      appointment-request | general-contact | bride-story
 * 2. Create a second form for the footer newsletter, or reuse the first.
 * 3. Paste the full endpoint, including the form id:
 *      contactFormEndpoint: "https://formspree.io/f/xxxxxxxx",
 *      newsletterFormEndpoint: "https://formspree.io/f/yyyyyyyy"
 * 4. Redeploy. vercel.json already allows fetch and form posts to
 *    https://formspree.io. A different host is blocked until connect-src
 *    and form-action in vercel.json list that host.
 *
 * Leave a value as "" and that form tells the visitor to call or email
 * instead of showing a success message.
 */
window.SITE_CONFIG = {
  contactFormEndpoint: "",
  newsletterFormEndpoint: ""
};
