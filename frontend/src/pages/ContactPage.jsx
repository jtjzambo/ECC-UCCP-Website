import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, MessageCircle, Send, Church, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-700 to-sky-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/30">
            <MessageCircle size={18} />
            <span className="text-sm font-semibold">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-emerald-100">
            We'd love to hear from you. Reach out anytime!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address Card */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-emerald-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="text-emerald-700" size={24} />
                </div>
                <CardTitle className="text-lg text-slate-800">Visit Us</CardTitle>
                <CardDescription className="text-slate-600">
                  #27 Castillo Rd., Baliwasan<br />
                  Zamboanga City, 7000<br />
                  Philippines
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Phone Card */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-sky-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="text-sky-700" size={24} />
                </div>
                <CardTitle className="text-lg text-slate-800">Call Us</CardTitle>
                <CardDescription>
                  <a 
                    href="tel:+63629916685" 
                    className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
                  >
                    +63 62 991 6685
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Email Card */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="text-purple-700" size={24} />
                </div>
                <CardTitle className="text-lg text-slate-800">Email Us</CardTitle>
                <CardDescription>
                  <a 
                    href="mailto:eccuccpzamboangacity@gmail.com" 
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors break-all"
                  >
                    eccuccpzamboangacity@gmail.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Office Hours Card */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-amber-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="text-amber-700" size={24} />
                </div>
                <CardTitle className="text-lg text-slate-800">Office Hours</CardTitle>
                <CardDescription className="text-slate-600">
                  Monday - Friday<br />
                  8:00 AM - 5:00 PM<br />
                  <span className="text-amber-600 font-medium">Closed on weekends</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Send size={16} />
                  Send a Message
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  We're Here to Help
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Whether you have questions about our services, want to learn more about our community, 
                  or simply need someone to pray with you — we're just a message away. 
                  Don't hesitate to reach out; we'd be honored to connect with you.
                </p>
              </div>

              {submitted ? (
                <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-4">
                      Your message has been received. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-slate-200">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-slate-700">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                            data-testid="contact-name-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-700">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                            data-testid="contact-email-input"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-slate-700">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+63 XXX XXX XXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                            data-testid="contact-phone-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-slate-700">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="How can we help?"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                            data-testid="contact-subject-input"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-700">Your Message *</Label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell us what's on your heart..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                          data-testid="contact-message-input"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold"
                        disabled={isSubmitting}
                        data-testid="contact-submit-btn"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send size={20} />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map & Social Links */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <MapPin size={16} />
                  Find Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Our Location
                </h2>
                <p className="text-lg text-slate-600">
                  We're located in the heart of Baliwasan, Zamboanga City. Come visit us for worship!
                </p>
              </div>

              {/* Interactive Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d122.0697!3d6.9214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041e2e3c1c1c1%3A0x1234567890abcdef!2sCastillo%20Rd%2C%20Baliwasan%2C%20Zamboanga%20City%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ecumenical Center Church Location"
                  className="w-full"
                ></iframe>
              </div>

              {/* Social Media Links */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Connect With Us Online</CardTitle>
                  <CardDescription className="text-slate-300">
                    Follow us on social media for updates, inspirational messages, and community news.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <a
                      href="https://www.facebook.com/uccpzambo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors duration-200"
                      data-testid="social-facebook-link"
                    >
                      <Facebook size={28} />
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@uccpzambo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-red-600 hover:bg-red-700 rounded-xl transition-colors duration-200"
                      data-testid="social-youtube-link"
                    >
                      <Youtube size={28} />
                      <span className="text-sm font-medium">YouTube</span>
                    </a>
                    <a
                      href="https://m.me/uccpzambo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl transition-colors duration-200"
                      data-testid="social-messenger-link"
                    >
                      <MessageCircle size={28} />
                      <span className="text-sm font-medium">Messenger</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Church size={48} className="mx-auto mb-6 text-emerald-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            You're Always Welcome Here
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you're seeking spiritual guidance, looking for a church family, 
            or just want to visit, our doors are always open. We look forward to meeting you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="inline-block px-8 py-4 bg-white text-emerald-700 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors duration-200 shadow-lg"
            >
              View Service Times
            </a>
            <a
              href="/events"
              className="inline-block px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white border-2 border-emerald-400 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
