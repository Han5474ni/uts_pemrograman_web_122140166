import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>

        <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="BeritaKita Team"
            fill={true}
            className="object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <h2>Our Mission</h2>
          <p>
            At BeritaKita, our mission is to deliver accurate, timely, and relevant news to our readers. We believe in
            the power of information to educate, inspire, and empower people to make informed decisions about the world
            around them.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded in 2023, BeritaKita began as a small project with a big vision: to create a news platform that
            prioritizes quality journalism and user experience. What started as a passion project has grown into a
            trusted source of news for thousands of readers.
          </p>

          <p>
            Our team consists of experienced journalists, tech enthusiasts, and design experts who work together to
            bring you the best news experience possible. We're constantly evolving and improving our platform based on
            reader feedback and emerging technologies.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Accuracy:</strong> We verify all information before publishing and promptly correct any errors.
            </li>
            <li>
              <strong>Independence:</strong> We maintain editorial independence and are not influenced by political or
              commercial interests.
            </li>
            <li>
              <strong>Fairness:</strong> We present multiple perspectives on complex issues and avoid bias.
            </li>
            <li>
              <strong>Transparency:</strong> We are open about our sources, methods, and any limitations in our
              reporting.
            </li>
            <li>
              <strong>Respect:</strong> We respect the privacy and dignity of the people we report on and our readers.
            </li>
          </ul>

          <h2>Our Coverage</h2>
          <p>
            BeritaKita covers a wide range of topics including politics, business, technology, health, sports,
            entertainment, and more. We focus particularly on news related to Indonesia and Southeast Asia, but also
            cover important global events that impact our readers.
          </p>

          <h2>Our Technology</h2>
          <p>
            We use cutting-edge web technologies to deliver a fast, responsive, and accessible news experience. Our
            platform is built with Next.js and React, ensuring optimal performance across all devices. We source our
            news through the NewsAPI, which gives us access to thousands of reliable news sources worldwide.
          </p>

          <p>
            Thank you for choosing BeritaKita as your source for news and information. We're committed to serving you
            with excellence and integrity.
          </p>
        </div>
      </div>
    </main>
  );
}
