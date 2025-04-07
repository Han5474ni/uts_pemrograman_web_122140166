import type { NewsItem } from "@/types"

// This is a mock database for demonstration purposes
// In a real application, you would use a real database like MongoDB, PostgreSQL, etc.
const mockNewsData: NewsItem[] = [
  {
    id: 1,
    title: "New Study Shows Benefits of Regular Exercise",
    summary:
      "Researchers have found that regular exercise can significantly improve mental health and reduce the risk of chronic diseases.",
    content:
      "A groundbreaking study published in the Journal of Health Sciences has revealed that engaging in regular physical activity for just 30 minutes a day can have profound effects on both mental and physical health.\n\nThe research, which followed over 10,000 participants for a period of five years, found that those who exercised regularly had a 40% lower risk of developing heart disease and a 60% lower risk of experiencing depression or anxiety.\n\nDr. Sarah Johnson, the lead researcher, emphasized that the type of exercise doesn't matter as much as consistency. \"Whether it's walking, swimming, or yoga, the key is to find an activity you enjoy and can stick with long-term,\" she explained.\n\nThe study also noted that the benefits were observed across all age groups, suggesting it's never too late to start an exercise routine.",
    author: "Dr. Michael Chen",
    category: "health",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-15T08:30:00Z",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Giant Unveils Revolutionary AI Assistant",
    summary:
      "A leading technology company has announced a new AI assistant that can understand and respond to complex human emotions.",
    content:
      'In a highly anticipated product launch event yesterday, tech industry leader InnovateTech unveiled what they\'re calling "the most advanced AI assistant ever created."\n\nThe new assistant, named Empathia, uses a combination of facial recognition, voice analysis, and natural language processing to detect subtle emotional cues in human interaction.\n\n"What sets Empathia apart is its ability to not just understand what you\'re saying, but how you\'re feeling when you say it," explained InnovateTech CEO Lisa Park. "This allows for much more natural and helpful interactions."\n\nDemonstrations showed the AI responding differently to the same request based on whether the user appeared stressed, happy, or tired. The technology has been in development for over five years and was trained on millions of human interactions.\n\nPrivacy advocates have raised concerns about the emotional data being collected, but the company insists all processing happens on-device and no emotional data is stored or transmitted.',
    author: "James Wilson",
    category: "technology",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-14T14:45:00Z",
    featured: true,
  },
  {
    id: 3,
    title: "Local Team Wins Championship After 15-Year Drought",
    summary:
      "The city's beloved basketball team has finally claimed the national title after a nail-biting final game.",
    content:
      'The Westside Warriors have ended their 15-year championship drought in spectacular fashion, defeating the defending champions 104-102 in a game that came down to the final seconds.\n\nPoint guard Marcus Johnson led the scoring with 32 points, including the game-winning three-pointer with just 2.7 seconds left on the clock.\n\n"This is for everyone who stuck with us through the tough years," an emotional Johnson said in the post-game interview. "The fans in this city never gave up on us, and we never gave up on ourselves."\n\nThe victory sparked wild celebrations throughout the city, with thousands of fans flooding downtown streets well into the early hours of the morning.\n\nHead coach Sandra Williams, who took over the struggling team three years ago, credited the win to the team\'s defensive improvements and unselfish play. "Every single player on this roster contributed to this championship," she said. "This was truly a team effort."',
    author: "Carlos Rodriguez",
    category: "sports",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-13T23:15:00Z",
    featured: false,
  },
  {
    id: 4,
    title: "Award-Winning Film Director Announces Retirement",
    summary:
      "After a career spanning four decades and numerous accolades, the legendary filmmaker is stepping away from the director's chair.",
    content:
      'Oscar-winning director Robert Anderson has announced his retirement from filmmaking, bringing an end to one of the most celebrated careers in cinema history.\n\nIn a heartfelt letter shared on social media, the 76-year-old filmmaker expressed gratitude to the actors, crew members, and audiences who supported his work over the past 42 years.\n\n"Storytelling through film has been my life\'s passion and greatest joy," Anderson wrote. "While I\'m stepping away from directing, I will forever remain a student and champion of this magnificent art form."\n\nAnderson\'s filmography includes 17 feature films, with his 1998 historical drama "Eternal Echoes" widely regarded as his masterpiece. Throughout his career, he garnered five Academy Award nominations, winning twice for Best Director.\n\nIndustry colleagues have been quick to pay tribute, with actress Emma Lawrence calling him "a visionary who forever changed how stories are told on screen."',
    author: "Sophia Martinez",
    category: "entertainment",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-12T16:20:00Z",
    featured: false,
  },
  {
    id: 5,
    title: "Global Markets React to New Economic Policy",
    summary: "Stock markets worldwide show volatility as major economy announces significant shift in fiscal approach.",
    content:
      'Global financial markets experienced significant fluctuations today as the world\'s second-largest economy announced a major overhaul of its fiscal policy.\n\nThe new framework, which includes substantial tax reforms and increased infrastructure spending, aims to stimulate growth amid concerns of a potential economic slowdown.\n\nAsian markets were the first to react, with the Shanghai Composite Index closing up 3.2%, while European markets showed more caution with mixed results across major indices.\n\nEconomic analysts remain divided on the long-term implications. "This could be the stimulus package needed to avoid a recession," noted economist Dr. Priya Sharma. "However, the increased government spending raises legitimate concerns about inflation and public debt levels."\n\nThe policy shift comes after three consecutive quarters of declining growth rates and increasing pressure from international financial institutions for structural reforms.',
    author: "Jonathan Taylor",
    category: "business",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-11T09:45:00Z",
    featured: true,
  },
  {
    id: 6,
    title: "Breakthrough in Renewable Energy Storage Announced",
    summary:
      "Scientists develop new battery technology that could solve one of the biggest challenges in renewable energy adoption.",
    content:
      'A team of researchers from the National Energy Laboratory has unveiled a groundbreaking battery technology that could revolutionize how renewable energy is stored and distributed.\n\nThe new battery, which uses abundant and non-toxic materials, can store electricity for up to 15 days with minimal loss – a dramatic improvement over current storage solutions that typically lose efficiency after 24-48 hours.\n\n"This addresses one of the fundamental challenges of renewable energy – its intermittency," explained Dr. Elena Patel, who led the research team. "With this technology, solar energy collected on sunny days can power homes and businesses through extended cloudy periods."\n\nEarly estimates suggest the batteries could be manufactured at approximately one-third the cost of current lithium-ion alternatives, with a significantly lower environmental footprint.\n\nThe technology has already attracted substantial interest from investors, with several major energy companies announcing partnerships to scale up production within the next two years.',
    author: "David Kim",
    category: "technology",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-10T11:30:00Z",
    featured: true,
  },
  {
    id: 7,
    title: "Nutritionists Reveal Top Superfoods for Brain Health",
    summary:
      "New research identifies the foods that can help improve cognitive function and potentially reduce the risk of neurodegenerative diseases.",
    content:
      'A comprehensive review published in the Journal of Nutritional Neuroscience has identified the top foods that may support brain health and cognitive function throughout life.\n\nThe research, which analyzed data from over 100 studies conducted in the past decade, found consistent evidence that certain nutrients and food groups have neuroprotective effects.\n\nBlueberries topped the list, with their high levels of antioxidants and anti-inflammatory compounds shown to improve memory and delay brain aging in multiple studies. Fatty fish rich in omega-3s, such as salmon and sardines, came in second.\n\n"What we eat has a profound effect on brain structure and function," said nutritionist Dr. Maria Gonzalez, who was not involved in the research. "This review provides strong evidence that dietary choices can be a powerful tool in maintaining cognitive health."\n\nOther foods with strong evidence behind them included leafy greens, nuts (particularly walnuts), and fermented foods that support gut health, which is increasingly linked to brain function.',
    author: "Dr. Sarah Johnson",
    category: "health",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-09T13:15:00Z",
    featured: false,
  },
  {
    id: 8,
    title: "Historic Peace Agreement Signed After Decades of Conflict",
    summary:
      "Two nations formally end hostilities in a landmark treaty that promises to transform regional politics and economics.",
    content:
      'In a ceremony described by observers as "historic" and "momentous," the leaders of two nations with a long history of conflict signed a comprehensive peace agreement today, formally ending decades of hostilities.\n\nThe treaty, which was negotiated over a period of three years with international mediation, addresses territorial disputes, security arrangements, and economic cooperation between the former adversaries.\n\n"Today marks not the end of a process, but the beginning of a new chapter in our shared history," said President Aliyev during the signing ceremony. "Future generations will look back on this day as the moment when peace became possible."\n\nThe agreement includes provisions for demilitarized zones, joint economic development projects, and cultural exchange programs designed to build trust between the populations.\n\nInternational reaction has been overwhelmingly positive, with the United Nations Secretary-General calling it "a triumph of diplomacy and human resilience" and major powers pledging financial support for reconstruction efforts in the affected regions.',
    author: "Elena Petrova",
    category: "politics",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-08T17:40:00Z",
    featured: true,
  },
  {
    id: 9,
    title: "Major Sporting Event Announces Sustainability Initiative",
    summary:
      "Organizers commit to making the upcoming international competition the first carbon-negative sporting event of its size.",
    content:
      'The organizing committee for next year\'s Global Games has unveiled an ambitious sustainability plan that aims to make the event the first carbon-negative sporting competition of its scale.\n\nThe comprehensive strategy includes powering all venues with renewable energy, implementing a zero-waste policy, and investing in carbon offset projects that will remove more greenhouse gases than the event produces.\n\n"Sports has the power to inspire and unite people around important causes," said committee chairperson Thomas Ndlovu. "We\'re setting a new standard for how major events can be organized responsibly in the face of climate change."\n\nThe plan also features innovative approaches to transportation, with athletes and spectators encouraged to use an expanded public transit system and a fleet of electric vehicles.\n\nEnvironmental organizations have cautiously welcomed the announcement, though some have expressed concerns about the reliance on carbon offsets rather than focusing exclusively on direct emissions reductions.',
    author: "Marcus Johnson",
    category: "sports",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-07T14:10:00Z",
    featured: false,
  },
  {
    id: 10,
    title: "New Regulations Proposed for Social Media Platforms",
    summary:
      "Lawmakers introduce bill that would significantly change how social media companies moderate content and protect user data.",
    content:
      'A bipartisan group of lawmakers has introduced legislation that would create new regulations for social media platforms, potentially transforming how these companies operate and interact with their users.\n\nThe proposed Digital Accountability Act would require greater transparency in content moderation decisions, establish stronger protections for user data, and potentially make platforms legally liable for certain types of harmful content.\n\n"For too long, these companies have operated with minimal oversight despite their enormous influence on public discourse and personal privacy," said Senator Rebecca Chen, one of the bill\'s co-sponsors.\n\nThe legislation would establish an independent regulatory body with the authority to audit algorithms and enforce compliance with the new standards.\n\nTech industry representatives have expressed concerns about the bill\'s scope, arguing that some provisions could limit innovation and free expression. "We share the goal of creating a safer online environment, but this approach could have serious unintended consequences," said the head of a major tech industry association.\n\nPublic interest groups, meanwhile, have generally praised the proposal while suggesting amendments to strengthen privacy protections further.',
    author: "Thomas Wright",
    category: "technology",
    imageUrl: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-06T10:25:00Z",
    featured: false,
  },
]

export const db = {
  getNews: async (): Promise<NewsItem[]> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockNewsData
  },
}

