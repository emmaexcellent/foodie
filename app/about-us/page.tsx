import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/kitchen-bg.jpg"
            alt="Kitchen background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Busy Professionals to Eat Well
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We&apos;re on a mission to solve the challenge of healthy eating
              for busy tech professionals and developers who struggle to find
              time for proper meals.
            </p>
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Recipes <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/cooking.jpg"
                alt="Chef preparing a meal"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                At Foodies, we understand the unique challenges faced by busy
                professionals, especially in the tech industry. Long hours of
                coding and back-to-back meetings often lead to poor eating
                habits and reliance on unhealthy convenience foods.
              </p>
              <p className="text-gray-600 text-lg">
                We&apos;re here to change that by providing easy-to-follow
                recipes, time-saving cooking techniques, and a supportive
                community that makes healthy eating accessible and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#E7FAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&apos;re making a difference in how busy professionals approach
              their daily meals and nutrition.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 text-3xl">
                &#128101;
              </div>
              <h3 className="text-3xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-3xl">
                &#127860;
              </div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Healthy Recipes</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-3xl">
                &#128336;
              </div>
              <h3 className="text-3xl font-bold mb-2">30 mins</h3>
              <p className="text-gray-600">Average Cooking Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Foodies?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&apos;ve designed our platform specifically for busy
              professionals who want to maintain a healthy lifestyle without
              sacrificing their valuable time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Cooking Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of busy professionals who have already discovered the
            joy of easy, healthy cooking with Foodies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipes"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Recipes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 rounded-lg font-medium border border-white hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Quick & Easy Recipes",
    description:
      "All our recipes are designed to be completed in 30 minutes or less, perfect for busy schedules.",
  },
  {
    title: "Nutrition-Focused",
    description:
      "Each recipe is crafted to provide balanced nutrition, helping you maintain a healthy lifestyle.",
  },
  {
    title: "Time-Saving Tips",
    description:
      "Learn meal prep strategies and cooking techniques that help you save time in the kitchen.",
  },
  {
    title: "Developer-Friendly",
    description:
      "Clear, step-by-step instructions that appeal to the logical mindset of tech professionals.",
  },
  {
    title: "Community Support",
    description:
      "Connect with other busy professionals and share your cooking experiences and tips.",
  },
  {
    title: "Flexible Options",
    description:
      "Find recipes that fit your schedule, dietary preferences, and cooking skill level.",
  },
];
