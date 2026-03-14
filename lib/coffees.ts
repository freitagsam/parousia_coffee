export type Coffee = {
  slug:        string
  name:        string
  nick:        string
  roast:       string
  roastType:   'light' | 'medium' | 'dark'
  bg:          string
  pills:       string[]
  price:       number
  process:     string
  notes:       string
  category:    'blend' | 'single-origin'
  // detail page fields
  description: string
  origins:     string
  elevation?:  string
  varietal?:   string
  processFull: string
  brewTip?:    string
}

export const coffees: Coffee[] = [
  {
    slug:        'cornerstone-blend',
    name:        'Cornerstone Blend',
    nick:        '"The Foundation"',
    roast:       'Medium–Dark',
    roastType:   'dark',
    bg:          '#abdcdc',
    pills:       ['Cacao Nib', 'Date Syrup', 'Creamy'],
    price:       19,
    process:     '16oz · Natural & Washed',
    notes:       'Cacao nib · Date syrup · Creamy body',
    category:    'blend',
    description: 'A blend of coffees from Honduras and Brazil roasted to the dark end of medium. Clean and interesting enough to drink black but bold and chocolatey enough to pair well with milk. Also makes great espresso.',
    origins:     'Honduras & Brazil',
    processFull: 'Natural & Washed',
    brewTip:     'Excellent as espresso or drip. Pairs beautifully with milk.',
  },
  {
    slug:        'morningstar-blend',
    name:        'MorningStar Blend',
    nick:        '"The Swiss Army Knife"',
    roast:       'Medium–Light',
    roastType:   'medium',
    bg:          '#addae8',
    pills:       ['Walnut', 'Milk Choc', 'Passion Fruit'],
    price:       19,
    process:     '16oz · Washed',
    notes:       'Walnut · Milk chocolate · Passion fruit',
    category:    'blend',
    description: 'A blend of coffees from Honduras and Colombia, roasted to the light end of medium. It features the classic nutty foundation you\'d expect from Central American coffees with a bright citrus finish that makes it a delight to drink on its own. Plays well with milk but has plenty to offer for those who enjoy their coffee black.',
    origins:     'Honduras & Colombia',
    processFull: 'Washed',
    brewTip:     'Versatile — great black or with milk, pour over or drip.',
  },
  {
    slug:        'los-hermanos',
    name:        'Los Hermanos Blend',
    nick:        '"The Passport"',
    roast:       'Medium',
    roastType:   'medium',
    bg:          '#e3ce9d',
    pills:       ['Sweet', 'Nutty', 'Orange'],
    price:       19,
    process:     '16oz · Washed',
    notes:       'Sweet · Nutty · Orange juice finish',
    category:    'blend',
    description: 'A well-traveled blend that brings together coffees from across Central and South America. Expect a sweet, nutty cup with a bright orange juice finish — approachable enough for every morning, complex enough to keep you interested.',
    origins:     'Central & South America',
    processFull: 'Washed',
    brewTip:     'Great for everyday brewing. Works well as drip or French press.',
  },
  {
    slug:        'rwanda-shyira',
    name:        'Rwanda Shyira',
    nick:        '"The Bright One"',
    roast:       'Light',
    roastType:   'light',
    bg:          '#b9e4cb',
    pills:       ['Tangerine', 'Cranberry', 'Medium Body'],
    price:       22,
    process:     '12oz · Washed',
    notes:       'Tangerine · Cranberry · Medium body',
    category:    'single-origin',
    description: 'A bright, clean coffee that works well as a hot or iced pour over. The sweeter tangerine note emerges first, with bright cranberry acidity becoming increasingly noticeable as the coffee cools. This is Parousia\'s inaugural Rwandan coffee offering, and it also works well as espresso for those who prefer brighter profiles.',
    origins:     'Rwanda',
    elevation:   '2,000 m',
    processFull: 'Fully Washed, Raised Beds',
    brewTip:     'Best as pour over — hot or iced. Also shines as a bright espresso.',
  },
  {
    slug:        'bali-kintamani',
    name:        'Bali Kintamani',
    nick:        '"The Island"',
    roast:       'Medium–Light',
    roastType:   'medium',
    bg:          '#aee4e8',
    pills:       ['Watermelon', 'Grape', 'Medium Body'],
    price:       22,
    process:     '12oz · Natural',
    notes:       'Watermelon · Grape · Medium body',
    category:    'single-origin',
    description: 'An exciting offering from the Indonesian island of Bali. Expect a juicy, smooth cup with just the right amount of acidity on the finish — flavors you wouldn\'t normally expect from an Indonesian origin. The key is the natural processing: rather than the wet-hull method common across Indonesia (which produces bold, heavy coffees with notes of licorice, cedar, and dark chocolate), this coffee is naturally processed and patio-dried, resulting in the fruit-forward, clean cup in your hands.',
    origins:     'Bali, Indonesia',
    elevation:   '1,300–1,700 m',
    varietal:    'Typica & Bourbon',
    processFull: 'Natural, Patio Drying',
    brewTip:     'Excellent as pour over. The fruity notes pop beautifully over ice.',
  },
  {
    slug:        'symphony-blend',
    name:        'Symphony Blend',
    nick:        '"The Showstopper"',
    roast:       'Medium',
    roastType:   'medium',
    bg:          '#e9c2d2',
    pills:       ['Cacao', 'Dried Pineapple', 'Pistachio'],
    price:       21,
    process:     '16oz · Natural',
    notes:       'Cacao · Dried pineapple · Pistachio',
    category:    'blend',
    description: 'What happens when you combine the bassy notes of Brazil with the bright finish of Ethiopia? A medium-bodied coffee with sweetness but reduced brightness compared to lighter roasts — one that develops a nutty body (pistachio) that sweetens as it cools (dried pineapple). The pineapple note comes from dried fruit\'s softer sweetness; the enzyme bromelain present in fresh pineapple disappears during drying. Symphony sits between Parousia\'s brighter single origins and darker blends, and suits a range of brewing methods.',
    origins:     'Brazil & Ethiopia',
    processFull: 'Natural',
    brewTip:     'Suits pour over or drip. Try it black and again with cream — two different experiences.',
  },
  {
    slug:        'pillar-of-smoke',
    name:        'Pillar of Smoke',
    nick:        '"The Bold One"',
    roast:       'Dark',
    roastType:   'dark',
    bg:          '#ccc6e3',
    pills:       ['Dark Chocolate', 'Molasses', 'Campfire'],
    price:       19,
    process:     '16oz · Natural',
    notes:       'Dark chocolate · Molasses · Campfire',
    category:    'blend',
    description: 'Our darkest roast — period. We thought Cornerstone would be the darkest coffee we\'d ever offer, but here we are. Pillar of Smoke is for those who want their coffee bold, unapologetic, and full of dark, smoky character. Notes of dark chocolate and molasses give way to a long, campfire finish that lingers. We can\'t say for sure, but we hope the place you drink this is filled with good company.',
    origins:     'Blend',
    processFull: 'Natural',
    brewTip:     'Best as drip or French press. Absolutely built for cream and sugar if that\'s your thing.',
  },
]

export function getCoffeeBySlug(slug: string): Coffee | undefined {
  return coffees.find(c => c.slug === slug)
}
