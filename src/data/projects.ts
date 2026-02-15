export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    role: string;
    videoUrl: string;
    thumbnailUrl: string;
    metadata?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "alboe",
        title: "ALBOE IS COMING - ARE YOU READY?",
        category: "Direction",
        description: "A high-energy visual exploration for the ALBOE project.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: "",
        featured: true
    },
    {
        id: "tinkerhub",
        title: "OPEN KNOWLEDGE, OPEN HEARTS · THE TINKERHUB STORY",
        category: "Direction",
        description: "An evocative brand story documenting the journey of the TinkerHub community.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: "",
        featured: true
    },
    {
        id: "instruo",
        title: "INSTRUO - E-LEARNING VIDEOS",
        category: "Instructional",
        description: "Series of high-quality educational videos produced for the Instruo platform.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: "",
        featured: true
    },
    {
        id: "rani-pink",
        title: "RANI PINK X KIRTHI DIAMOND JEWELLERY",
        category: "Commercial",
        description: "Elegant commercial work blending fashion and luxury jewellery aesthetics.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: "",
        featured: true
    },
    {
        id: "jerryland",
        title: "JERRYLAND",
        category: "Creative Direction",
        description: "Conceptual visual project focusing on artistic story-telling.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: ""
    },
    {
        id: "vivo-v50",
        title: "VIVO V50 FT DIVYA PRABHA",
        category: "Commercial",
        description: "Dynamic commercial featuring Divya Prabha, focusing on the cinematic capabilities of the Vivo V50.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: "",
        featured: true
    },
    {
        id: "prince-of-noodles",
        title: "THE PRINCE OF NOODLES",
        category: "Film",
        description: "A narrative film directed for Frank Dukes, exploring unique visual themes.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: ""
    },
    {
        id: "cyber-safety",
        title: "CYBER SAFETY FOR PRE TEENS | BODHINI NGO",
        category: "Educational",
        description: "Impactful educational content developed for Bodhini NGO to promote cyber safety.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: ""
    },
    {
        id: "body-safety",
        title: "BODY SAFETY RULES FOR SMALLER CHILDREN",
        category: "Educational",
        description: "Sensitive and informative content focusing on body safety for children.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: ""
    },
    {
        id: "healing",
        title: "HEALING FT - ANNA BEN",
        category: "Direction",
        description: "Conceptual film project featuring Anna Ben, exploring themes of restoration and growth.",
        role: "Director",
        videoUrl: "",
        thumbnailUrl: ""
    }
];

export const assistantDirectorCredits = [
    {
        title: "Three and a Half",
        role: "Art Assistant Director",
        production: "Jugaad Motion Pictures",
        type: "Feature Film"
    },
    {
        title: "Blindspot",
        role: "2nd Assistant Director",
        production: "Candid Creation",
        type: "Short Film"
    },
    {
        title: "Rukmini",
        role: "3rd Assistant Director",
        production: "Malayalam Feature Film",
        type: "Feature Film"
    },
    {
        title: "Facebook 'Roar'",
        role: "2nd Assistant Director",
        production: "1st December Films",
        type: "TVC"
    },
    {
        title: "Munch",
        role: "2nd Assistant Director",
        production: "Think Pot Productions",
        type: "TVC"
    },
    {
        title: "Amazon",
        role: "2nd Assistant Director",
        production: "Entourage Productions",
        type: "TVC"
    }
];

export const btsCredits = [
    {
        production: "Freshly Ground Entertainment Pvt. Ltd.",
        role: "Head BTS Camera Person",
        projects: ["Student of the Year 2", "Total Dhamaal", "Zero", "Jabariya Jodi", "Prasthanam"]
    }
];
