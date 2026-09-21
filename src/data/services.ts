import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'kitchen-renovations',
    slug: 'kitchen-renovations',
    title: 'Kitchen Renovations',
    shortDesc: 'Modernize your culinary space with stylish and functional upgrades.',
    fullDesc: 'Upgrade your kitchen with our tailored renovation services, including cabinetry, countertops, and lighting. Enjoy a functional, stylish space that enhances home value and energy efficiency, with projects typically completed in 4–8 weeks.',
    iconName: 'UtensilsCrossed',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Tailored cabinetry, countertops & architectural lighting',
      'Boosts home valuation & daily culinary ergonomics',
      'High-grade moisture-resistant materials & smart storage',
      'Typically completed in 4–8 weeks'
    ],
    deliverables: [
      'Custom kitchen layout & 3D render',
      'Cabinetry fabrication & precision installation',
      'Countertop stone templating & fitting',
      'Integrated lighting, sink & appliance testing'
    ],
    idealFor: 'Homeowners looking to transform dated kitchens into modern, energy-efficient culinary hubs.'
  },
  {
    id: 'interior-redesigns',
    slug: 'interior-redesigns',
    title: 'Interior Redesigns',
    shortDesc: 'Revamp your home’s interior for better flow and functionality',
    fullDesc: 'Refresh your space with our interior redesign services, offering personalized layouts, stylish furniture, and decor upgrades. Transform any room for improved functionality and aesthetics, with most projects completed in 2–6 weeks.',
    iconName: 'LayoutGrid',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Personalized layouts, stylish furniture & decor upgrades',
      'Optimized spatial flow & room-by-room harmony',
      'Ambient lighting schemes & premium finish selections',
      'Most projects completed in 2–6 weeks'
    ],
    deliverables: [
      'Spatial reconfiguration & moodboard curation',
      'Bespoke wall treatments & false ceiling design',
      'Custom furniture placement & lighting schematics',
      'Turnkey handover with zero disruption'
    ],
    idealFor: 'Families desiring an elevated living environment with better circulation and contemporary charm.'
  },
  {
    id: 'exterior-upgrades',
    slug: 'exterior-upgrades',
    title: 'Exterior Upgrades',
    shortDesc: 'Enhance your home’s curb appeal and exterior features',
    fullDesc: 'Revitalize your outdoor spaces with our exterior upgrade services. From custom landscaping to fresh painting and patio designs, we create functional and beautiful exteriors tailored to your style, most projects are completed in 2–5 weeks.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Custom landscaping, weather-tested painting & patio designs',
      'Dramatically elevates facade presence and curb appeal',
      'Weather-resistant materials built for climate durability',
      'Most projects completed in 2–5 weeks'
    ],
    deliverables: [
      '3D exterior elevation study & color simulations',
      'Surface waterproofing, patch repairs & premium coatings',
      'Patio paving, architectural pergolas & louvers',
      'Facade illumination & landscape boundary accents'
    ],
    idealFor: 'Property owners ready to refresh outdated exteriors into striking architectural statements.'
  },
  {
    id: 'custom-carpentry',
    slug: 'custom-carpentry',
    title: 'Custom Carpentry',
    shortDesc: 'Add unique character with tailored woodwork solutions',
    fullDesc: 'Elevate your space with bespoke carpentry solutions designed just for you. Whether it’s custom furniture, cabinetry, or unique woodwork, we combine craftsmanship and style to create pieces that perfectly fit your needs.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Custom furniture, bespoke cabinetry & unique woodwork',
      'Master artisanal joinery with hand-selected veneers & hardwoods',
      'Precision CNC grooving, fluted details & soft-close hardware',
      'Tailored to the exact millimeter of your home'
    ],
    deliverables: [
      'Detailed carpentry cut-lists & joinery blueprints',
      'On-site custom framing and off-site laser-cut fabrication',
      'Multi-coat dust-free PU lacquer / natural oil finishes',
      'Lifetime hardware alignment warranty'
    ],
    idealFor: 'Discerning clients wanting bespoke, heirloom-grade wooden accents and tailored storage.'
  },
  {
    id: 'bathroom-remodels',
    slug: 'bathroom-remodels',
    title: 'Bathroom Remodels',
    shortDesc: 'Create a luxurious and practical oasis in your home',
    fullDesc: 'Transform your bathroom into a modern, relaxing retreat with our remodeling services, featuring new fixtures, tiles, and storage solutions. Enjoy improved functionality and style, with projects typically completed in 2–4 weeks.',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'New designer fixtures, premium tiles & concealed storage solutions',
      'Modern spa-like relaxation with optimal daily practicality',
      'Multi-layer polymer waterproofing membranes & anti-skid surfaces',
      'Projects typically completed in 2–4 weeks'
    ],
    deliverables: [
      'Complete strip-out & safe debris disposal',
      'Plumbing re-route with CPVC pressure testing',
      'Waterproofing certification with 72-hr pond testing',
      'Fixture installation, vanity fitting & pressure calibration'
    ],
    idealFor: 'Transforming everyday bath spaces into private, functional spa sanctuaries.'
  },
  {
    id: 'home-additions',
    slug: 'home-additions',
    title: 'Home Additions',
    shortDesc: 'Expand your living space seamlessly',
    fullDesc: 'Create more room for your family with our expert home addition services. Whether it’s a new bedroom, home office, or entertainment space, we design and build additions that blend seamlessly with your home. Expand your home, your way!',
    iconName: 'Maximize',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'New bedrooms, home offices or dedicated entertainment spaces',
      'Seamless structural and aesthetic integration with existing building',
      'Lightweight structural engineering to safeguard foundation integrity',
      'Expands usable square footage tailored to your family growth'
    ],
    deliverables: [
      'Structural load audit & foundation safety certificate',
      'Sanction drawing preparation & engineering specs',
      'Complete civil framework, roofing & waterproofing',
      'Utility tie-ins to main plumbing & electrical networks'
    ],
    idealFor: 'Growing families seeking more spacious living without relocating.'
  },
  {
    id: 'energy-efficient-upgrades',
    slug: 'energy-efficient-upgrades',
    title: 'Energy-Efficient Upgrades',
    shortDesc: 'Improve your home’s energy efficiency with modern solutions',
    fullDesc: 'Reduce utility costs and boost sustainability with our energy-efficient upgrade services. Enjoy a comfortable, eco-friendly home. Let’s make your home greener and more efficient!',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Reduces electricity tariffs and boosts long-term sustainability',
      'Rooftop solar, smart climate control & thermal glazing solutions',
      'Rainwater harvesting and groundwater recharge integration',
      'Healthier indoor living environments with eco-friendly finishes'
    ],
    deliverables: [
      'Energy consumption baseline assessment',
      'Solar system planning, installation & net-metering',
      'Thermal break UPVC window replacement',
      'Rainwater filtration & storage commissioning'
    ],
    idealFor: 'Eco-conscious homeowners seeking lower utility costs and climate-resilient living.'
  },
  {
    id: 'basement-finishing',
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    shortDesc: 'Transform your basement into a comfortable living area',
    fullDesc: 'Turn your basement into a functional, inviting space with our finishing services, from flooring and lighting to custom layouts. Perfect for additional living areas or entertainment rooms, with projects typically completed in 3–6 weeks.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Flooring, ambient lighting & custom functional layouts',
      'Ideal for home theaters, guest suites or private entertainment lounges',
      'Specialized moisture-barrier injection waterproofing',
      'Projects typically completed in 3–6 weeks'
    ],
    deliverables: [
      'Subterranean crystalline waterproofing & humidity control',
      'Dedicated ventilation & fresh air circulation system',
      'Acoustic sound insulation & wall panelling',
      'Turnkey electrical fit-out & ambient recessed lighting'
    ],
    idealFor: 'Unlocking high-value subterranean spaces into warm, dry, and livable recreation zones.'
  }
];
