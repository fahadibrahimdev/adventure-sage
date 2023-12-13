import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Outdoor Adventure Awaits',
    subHeading: 'ADVENTURE. DISCOVER. EXPLORE',
    text: 'OUTDOOR ENTHUSIASTS LOVE AdventureSage! Its a fun, easy, and informative outdoor adventure App. Our 1% For the Planet app will let you discover and explore adventure guides nation-wide, whether you’re a pro looking for new challenges or a novice seeking guidance in the right direction. The opportunity to be adventurous and fully informed on conservation and how we can all contribute to keeping these shared spaces managed lies here at AdventureSage. Together We Can Save Mountains.',
}


export const brandFeaturesContent = {
    heading: 'THE BEST PLACE TO BE IS OUTDOORS',
    subHeading: 'Take the next trail via AdventureSage',
    text: 'Explore the passion for paddling or camping, Discover new places to fish or hunt, find the endless Adventures in being AdventureSage in the outdoors!',
    features: [
        {
            title: 'Find Guides',
            description: 'Fast track to getting into the best spots by getting in touch with local guides who share your interest. From outdoor adventures, wilderness retreats, or discovering how to do your part with non for profit groups, AdventureSage will lead the way.',
            image: '/images/images-icons/compass.png'
        },
        {
            title: 'Secure Activities',
            description: 'Not sure what to bring or how to pack? Keep track of your upcoming excursion with update notifications or DM chats with your outfitter to ensure quality time with mother nature.',
            image: '/images/images-icons/mountains.png'
        },
        {
            title: 'Stay Connected',
            description: 'Find single or group packages by location, date or preferred activity type. Not sure what’s available in your area? AdventureSage will let you explore your local possibilities.',
            image: '/images/images-icons/group.png'
        },
        {
            title: 'Read Reviews',
            description: 'Narrow down your choices by browsing through Featured Guides and guide ratings. Tell others on the AdventureSage app how awesome your excursion was to boost your guides credentials!',
            image: '/images/images-icons/reviews.png'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Love the outdoors but don’t know where to start?  Want to make the most of what mother nature has to offer? Whether you’re a seasoned enthusiast or a beginner to a new passion, AdventureSage will point you in the right directions – literally! The innovative mobile app is designed to connect adventure seekers with credible guides and service providers. AdventureSage has done the research for you. A step up on information booths a word of mouth.',
        'Being dependant on outdoor spaces is what we all have in common. What sets AdventureSage apart from the competition is it’s commitment of making a difference through ecological conservation. AdventureSage is a part of the 1% for the Planet organization and with each booking, YOU TOO will contribute a small portion to conservation. This will help ensure  these shared spaces remain conserved for the next generation. ',
        'Whether its eco tours, camping, hiking, rock climbing, birdwatching, fishing or hunting, endless adventures await at AdventureSage.',
    ],
}

export const benefitsContent = {
    heading: 'Get AdventureSage to Stay AdventureSage! ',
    text: 'With the AdventureSage app in your phone consider yourself in good hands. We share a passion for the outdoors and understand what it means to get the most out of it. Therefore, we believe that a conclusive app that gives authentic guides an opportunity and users a list of competitive and new choices can make a difference in the adventure and travel community.',
    benefits: [
        {
            title: 'Uplifting Communities',
            description: 'Use your experience to empower local tourism communities and support small business nation wide.',
            image: '/images/images-icons/sunset.png'
        },
        {
            title: 'Creating Opportunities',
            description: 'Self employed guides can promote their business and maintain their rating on the app. ',
            image: '/images/images-icons/hiking.png'
        },
        {
            title: 'Ecological Conservation',
            description: '1% for the Planet organization and will seek to provide educational sessions and teach conservation ideologies through strong partnerships with Not-For Profit organizations and Conservation authorities. ',
            image: '/images/images-icons/guide.png'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Can this app be used on more than one platform?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Is this app compatible with Android os IOS?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'Who is this app for?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Headed Out? Stay AdventureSage!',
    text: 'Download the app today and take advantage of the best services available near your destination.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}?`,
    accent: 'Become a founding guide'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
