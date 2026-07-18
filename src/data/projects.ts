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
    duration?: string;
}

export const projects: Project[] = [
    {
        id: "alboe",
        title: "ALBOE IS COMING - ARE YOU READY?",
        category: "Direction & Writing",
        description: "A campaign film for ALBOE by the Beach, a music festival in Varkala, Kerala. Created as the festival’s official promotional film, the ad introduces the world of ALBOE and its upcoming edition.",
        role: "Direction & Writing",
        videoUrl: "https://www.youtube.com/watch?v=whLpaJS3ggM",
        thumbnailUrl: "/assets/videos/aloe264.mp4",
        featured: true,
        duration: "0:34"
    },
    {
        id: "tinkerhub",
        title: "OPEN KNOWLEDGE, OPEN HEARTS · THE TINKERHUB STORY",
        category: "Direction & Writing",
        description: "An evocative brand story documenting the journey of the TinkerHub community.",
        role: "Direction & Writing",
        videoUrl: "https://www.youtube.com/watch?v=xyyKzKckbxE",
        thumbnailUrl: "/assets/videos/tinkerhub264.mp4",
        featured: true,
        duration: "10:38"
    },
    {
        id: "instruo",
        title: "INSTRUO - E-LEARNING VIDEOS",
        category: "Direction & Writing",
        description: "Series of high-quality educational videos produced for the Instruo platform.",
        role: "Direction & Writing",
        videoUrl: "https://vimeo.com/1083095326",
        thumbnailUrl: "/assets/videos/instruo264.mp4",
        featured: true,
        duration: "1:21"
    },
    {
        id: "rani-pink",
        title: "RANI PINK X KIRTHI DIAMOND JEWELLERY",
        category: "Direction",
        description: "Elegant commercial work blending fashion and luxury jewellery aesthetics.",
        role: "Direction",
        videoUrl: "https://vimeo.com/818729167",
        thumbnailUrl: "/assets/videos/rani264.mp4",
        featured: true,
        duration: "1:25"
    },
    {
        id: "jerryland",
        title: "JERRYLAND",
        category: "Direction & Writing",
        description: "Conceptual visual project focusing on artistic story-telling.",
        role: "Direction & Writing",
        videoUrl: "https://www.epicon.in/movies/jerryland",
        thumbnailUrl: "",
        duration: "14:00"
    },
    {
        id: "vivo-v50",
        title: "VIVO V50 FT DIVYA PRABHA",
        category: "Direction & Writing",
        description: "Dynamic commercial featuring Divya Prabha, focusing on the cinematic capabilities of the Vivo V50.",
        role: "Direction & Writing",
        videoUrl: "https://www.instagram.com/reels/DGK0awjKIKU/",
        thumbnailUrl: "",
        duration: "1:00"
    },
    {
        id: "prince-of-noodles",
        title: "THE PRINCE OF NOODLES",
        category: "Direction",
        description: "A narrative film directed for Frank Dukes, exploring unique visual themes.",
        role: "Direction",
        videoUrl: "https://www.youtube.com/watch?v=lE82EH7bsfo",
        thumbnailUrl: "/assets/videos/noodles264.mp4",
        featured: true,
        duration: "1:48"
    },
    {
        id: "cyber-safety",
        title: "CYBER SAFETY FOR PRE TEENS | BODHINI NGO",
        category: "Direction & Writing",
        description: "Impactful educational content developed for Bodhini NGO to promote cyber safety.",
        role: "Direction & Writing",
        videoUrl: "https://www.youtube.com/watch?v=E3LHVkrcOzc",
        thumbnailUrl: "",
        duration: "5:32"
    },
    {
        id: "body-safety",
        title: "BODY SAFETY RULES FOR SMALLER CHILDREN",
        category: "Direction & Writing",
        description: "Sensitive and informative content focusing on body safety for children.",
        role: "Direction & Writing",
        videoUrl: "https://www.youtube.com/watch?si=JbhRSeSv4OGjmkMz&v=-mAM4FS9cAY&feature=youtu.be",
        thumbnailUrl: "",
        duration: "3:34"
    },
    {
        id: "healing",
        title: "HEALING FT - ANNA BEN",
        category: "Direction & Writing",
        description: "Conceptual film project featuring Anna Ben, exploring themes of restoration and growth.",
        role: "Direction & Writing",
        videoUrl: "https://www.youtube.com/watch?v=RQKuwY6LgPU",
        thumbnailUrl: "",
        duration: "2:54"
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
