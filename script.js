document.addEventListener("DOMContentLoaded", () => {

/* Languages: English/German */

const translations = {
    en: {
        nav: {
            portfolio: "portfolio",
            personal: "personal"
        },

        landing: {
            portfolio: "portfolio",
            personal: "personal",
            germany: "Germany"
        },

        portfolio: {
            portfolio: "portfolio",
            heroDescription: "I'm Ryan Geiler, a Business Information Systems graduate interested in data, technology, software and artificial intelligence.",
            scroll: "scroll to explore ↓",
            about: "about",
            aboutHeading: "I like building things that are actually useful.",
            aboutText1: "My background combines business, information systems, programming and data analysis.",
            aboutText2: "I enjoy working on projects where technology can turn an idea, problem or collection of data into something useful.",
            experience: "experience",
            current: "CURRENT",
            experienceLabel: "EXPERIENCE",
            experience1Title: "Working Student / Data Analyst",
            experience2Title: "Internship / Data Analyst",
            experience1Description: "Supported the further development & digitalization of reports and dashboards, helping lead the migration from manual Logistics & Warehouse departments to automated Power BI reports, while supporting IT & Production in data initiatives.",
            experience2Description: "Assisted with the creation and digitalization of reports and dashboards with SQL in the ERP system for the Lean Management and Logistics departments.",
            education: "education",
            masters: "MASTER'S DEGREE",
            bachelors: "BACHELOR'S DEGREE",
            selectedProjects: "selected projects",
            toolbox: "toolbox",
            skillsHeading: "Things I work with.",
            contactSmall: "have a project?",
            contactHeading: "Let's talk.",
            contactLink: "get in touch →",
            downloadCV: "download CV ↓"
        },

        projects: {
            bundesliga: {
                category: "data / football",
                short: "Football data analysis, visualization and statistics.",
                title: "SC Freiburg Analytics",
                date: "2026",
                description: "A football analytics application currently under development, focused on exploring SC Freiburg data through interactive statistics, visualizations and analytical tools, including player comparisons, visual player mapping and more.",
                purpose: "The project is designed to make SC Freiburg data easier to explore while combining programming, data analysis and visualization into an interactive analytical platform. The application is currently under development and is not yet publicly available.",
                technologies: ["Python", "Streamlit", "Pandas", "Data Analysis", "Visualization"],
                link: null
            },

            deathtunes: {
                category: "software / game modding",
                short: "Lethal Company modding project.",
                title: "DeathTunes",
                date: "2026",
                description: "A Lethal Company mod that allows custom sound effects to be played when a player dies in-game.",
                purpose: "The project was created as an experiment in game modding, C# development, Unity integration and multiplayer networking. My friends also wanted me to try making a mod like this - so here it is.",
                technologies: ["C#", "Unity", ".NET Framework"],
                link: {
                    url: "https://github.com/ryanag17/DeathTunes",
                    label: "view on GitHub ↗"
                }
            },

            ai: {
                category: "research / artificial intelligence",
                short: "Bachelor's thesis on AI implementation in small and medium-sized enterprises.",
                title: "Thesis: AI & SMEs",
                date: "2025 - 2026",
                description: "A Bachelor's thesis investigating the implementation of artificial intelligence and digitalization processes in small and medium-sized enterprises, with a focus on their similarities and differences compared to larger corporations.",
                purpose: "The thesis examined how SMEs approach AI implementation and digitalization, exploring the opportunities, challenges and practical considerations involved while comparing these processes with those of larger corporations.",
                technologies: ["Bachelor's Thesis", "Artificial Intelligence", "Research", "SMEs", "Literature Review"],
                link: {
                    url: "images/documents/BachelorThesis_RyanGeiler_Excerpt.pdf",
                    label: "view Excerpt ↗"
                }
            }
        },

        modal: {
            project: "project",
            purposeLabel: "purpose",
            technologiesLabel: "technologies",
            github: "view on GitHub ↗",
            closeProject: "Close project",
            closePost: "Close post",
            previous: "← previous",
            next: "next →"
        },

        personal: {
            heroLabel: "personal / blog",
            heroLine1: "Let's talk",
            heroLine2: "about stuff.",
            heroDescription: "Music, games, football, random thoughts, projects and whatever else happens to interest me.",
            latestPost: "latest post",
            latest: "latest",
            allPosts: "all posts",
            readArticle: "read article →",
            read: "read →",
            loadMore: "load more ↓",
            endHeading: "That's all for now."
        },

        postCategories: {
            thoughts: "thoughts",
            music: "music",
            football: "football",
            projects: "projects"
        },

        posts: {
            post1: {
                category: "thoughts",
                title: "Welcome to my corner of the internet.",
                short: "Why I decided to build this website from scratch and what I will do with it.",
                card: "Why I decided to build this website from scratch.",
                text: [
                    "I wanted a place that felt more personal than a traditional portfolio and more flexible than a standard social media profile.",
                    "So I decided to build my own website from scratch. The idea is to have one side that represents my professional work, education and projects, while another side is simply a place for everything else.",
                    "Music, football, random thoughts, projects I am working on, and whatever else I feel like writing about can live here.",
                    "So welcome. I'm happy that you are here. Enjoy your stay."
                ]
            },

            post2: {
                category: "music",
                title: "Songs I've been listening to lately",
                short: "A collection of songs that have been on repeat recently.",
                card: "A collection of songs that have been on repeat recently.",
                text: [
                    "Music is probably one of the easiest ways for me to associate memories with a particular period of time.",
                    "This post will eventually become a place where I can share songs, albums and playlists that I've been listening to recently."
                ]
            },

            post3: {
                category: "football",
                title: "Football, statistics & obsession",
                short: "Thoughts about football, data and everything in between.",
                card: "Thoughts about football, data and everything in between.",
                text: [
                    "I've always enjoyed football, but the more I work with data, the more interesting the statistical side of the sport becomes.",
                    "This is where I'll write about football, statistics, data projects and whatever catches my attention."
                ]
            },

            post4: {
                category: "thoughts",
                title: "Whatever is on my mind",
                short: "Opinions, observations and random thoughts that don't fit anywhere else.",
                card: "Opinions, observations and random thoughts that don't fit anywhere else.",
                text: [
                    "Not everything needs its own category.",
                    "This section is basically a place for thoughts, observations, opinions and random things that don't really belong anywhere else."
                ]
            },

            post5: {
                category: "projects",
                title: "Making weird things for fun",
                short: "Random projects, experiments and things I built simply because I could.",
                card: "Random projects, experiments and things I built simply because I could.",
                text: [
                    "Sometimes the best projects are the ones that don't have a particularly useful purpose.",
                    "This post will be about experiments, small programming projects and things I decided to build simply because they sounded interesting."
                ]
            },

            post6: {
                category: "music",
                title: "An unnecessarily long music playlist",
                short: "Some songs that somehow ended up becoming a very large playlist.",
                card: "Some songs that somehow ended up becoming a very large playlist.",
                text: [
                    "At some point a playlist stops being a playlist and becomes a small personal archive.",
                    "This one is probably somewhere around that point."
                ]
            }
        },

        postCard: {
            post1: "01 / thoughts",
            post2: "02 / music",
            post3: "03 / football",
            post4: "04 / thoughts",
            post5: "05 / projects",
            post6: "06 / music"
        },

        footer: {
            backHome: "back home ↑",
            backHomeArrow: "back home →"
        }
    },

    de: {
        nav: {
            portfolio: "portfolio",
            personal: "persönlich"
        },

        landing: {
            portfolio: "portfolio",
            personal: "persönlich",
            germany: "Deutschland"
        },

        portfolio: {
            portfolio: "portfolio",
            heroDescription: "Ich bin Ryan Geiler, Absolvent der Wirtschaftsinformatik mit Interesse an Daten, Technologie, Software und künstlicher Intelligenz.",
            scroll: "zum Entdecken scrollen ↓",
            about: "über mich",
            aboutHeading: "Ich entwickle gerne Dinge, die tatsächlich nützlich sind.",
            aboutText1: "Mein Hintergrund verbindet Wirtschaft, Informationssysteme, Programmierung und Datenanalyse.",
            aboutText2: "Ich arbeite gerne an Projekten, bei denen Technologie aus einer Idee, einem Problem oder einer Datensammlung etwas Nützliches macht.",
            experience: "berufserfahrung",
            current: "AKTUELL",
            experienceLabel: "ERFAHRUNG",
            experience1Title: "Werkstudent / Datenanalyst",
            experience2Title: "Praktikum / Datenanalyst",
            experience1Description: "Unterstützung bei der Weiterentwicklung & Digitalisierung von Reports und Dashboards, Mitwirkung bei der Umstellung von manuellen Prozessen in den Bereichen Logistik & Lager auf automatisierte Power-BI-Reports sowie Unterstützung von IT & Produktion bei datenbezogenen Initiativen.",
            experience2Description: "Unterstützung bei der Erstellung und Digitalisierung von Reports und Dashboards mit SQL im ERP-System für die Bereiche Lean Management und Logistik.",
            education: "ausbildung",
            masters: "MASTERABSCHLUSS",
            bachelors: "BACHELORABSCHLUSS",
            selectedProjects: "ausgewählte projekte",
            toolbox: "werkzeugkasten",
            skillsHeading: "Womit ich arbeite.",
            contactSmall: "ein projekt?",
            contactHeading: "Lass uns reden.",
            contactLink: "kontakt aufnehmen →",
            downloadCV: "Lebenslauf herunterladen ↓"
        },

        projects: {
            bundesliga: {
                category: "daten / fußball",
                short: "Fußballdatenanalyse, Visualisierung und Statistiken.",
                title: "Bundesliga Analytics",
                date: "2026",
                description: "Eine derzeit in Entwicklung befindliche Fußballanalyse-Anwendung zur Erkundung von Daten des SC Freiburg durch interaktive Statistiken, Visualisierungen und analytische Werkzeuge, darunter Spielervergleiche, visuelle Spielerkarten und weitere Analysefunktionen.",
                purpose: "Das Projekt soll die Erkundung von SC-Freiburg-Daten erleichtern und dabei Programmierung, Datenanalyse und Visualisierung in einer interaktiven Analyseplattform verbinden. Die Anwendung befindet sich derzeit in Entwicklung und ist noch nicht öffentlich verfügbar.",
                technologies: ["Python", "Streamlit", "Pandas", "Datenanalyse", "Visualisierung"],
                link: null
            },

            deathtunes: {
                category: "software / game modding",
                short: "Modding-Projekt für Lethal Company.",
                title: "DeathTunes",
                date: "2026",
                description: "Eine Lethal-Company-Mod, mit der benutzerdefinierte Soundeffekte beim Tod eines Spielers abgespielt werden können.",
                purpose: "Das Projekt wurde als Experiment im Bereich Game-Modding, C#-Entwicklung, Unity-Integration und Multiplayer-Networking erstellt. Meine Freunde wollten außerdem, dass ich versuche, einen Mod wie diesen zu entwickeln - also, hier ist er.",
                technologies: ["C#", "Unity", ".NET Framework"],
                link: {
                    url: "https://github.com/ryanag17/DeathTunes",
                    label: "auf GitHub ansehen ↗"
                }
            },

            ai: {
                category: "forschung / künstliche intelligenz",
                short: "Bachelorarbeit zur Implementierung von KI in kleinen und mittleren Unternehmen.",
                title: "Arbeit: KI & KMU",
                date: "2025 - 2026",
                description: "Eine Bachelorarbeit zur Untersuchung der Implementierung von Künstlicher Intelligenz und Digitalisierungsprozessen in kleinen und mittleren Unternehmen mit Fokus auf deren Gemeinsamkeiten und Unterschieden im Vergleich zu größeren Unternehmen.",
                purpose: "Die Bachelorarbeit untersuchte, wie KMU die Implementierung von KI und die Digitalisierung angehen, und beleuchtete dabei die damit verbundenen Chancen, Herausforderungen und praktischen Aspekte im Vergleich zu größeren Unternehmen.",
                technologies: ["Bachelorarbeit","Künstliche Intelligenz", "Forschung", "Datenanalyse", "Literaturrecherche"],
                link: {
                    url: "images/documents/BachelorThesis_RyanGeiler_Excerpt.pdf",
                    label: "Auszug ansehen ↗"
                }
            }
        },

        modal: {
            project: "projekt",
            purposeLabel: "zweck",
            technologiesLabel: "technologien",
            github: "auf GitHub ansehen ↗",
            closeProject: "Projekt schließen",
            closePost: "Beitrag schließen",
            previous: "← zurück",
            next: "weiter →"
        },

        personal: {
            heroLabel: "persönlich / blog",
            heroLine1: "Lass uns",
            heroLine2: "über Dinge reden.",
            heroDescription: "Musik, Spiele, Fußball, zufällige Gedanken, Projekte und alles andere, was mich gerade interessiert.",
            latestPost: "letzter beitrag",
            latest: "aktuell",
            allPosts: "alle beiträge",
            readArticle: "beitrag lesen →",
            read: "lesen →",
            loadMore: "mehr laden ↓",
            endHeading: "Das war's für jetzt."
        },

        postCategories: {
            thoughts: "gedanken",
            music: "musik",
            football: "fußball",
            projects: "projekte"
        },

        posts: {
            post1: {
                category: "gedanken",
                title: "Wilkommen in meiner Ecke des Internets.",
                short: "Warum ich mich dazu entschieden habe, diese Website von Grund auf selbst zu erstellen und was ich damit vorhabe.",
                card: "Warum ich mich dazu entschieden habe, diese Website von Grund auf selbst zu erstellen.",
                text: [
                    "Ich wollte einen Ort, der persönlicher ist als ein klassisches Portfolio und gleichzeitig flexibler als ein gewöhnliches Social-Media-Profil.",
                    "Deshalb habe ich mich dazu entschieden, meine eigene Website von Grund auf selbst zu erstellen. Die Idee ist, eine Seite zu haben, die meine berufliche Arbeit, meine Ausbildung und meine Projekte repräsentiert, während die andere Seite einfach ein Ort für alles andere ist.",
                    "Musik, Fußball, zufällige Gedanken, Projekte, an denen ich gerade arbeite, und alles andere, worüber ich schreiben möchte, können hier ihren Platz finden.",
                    "Also willkommen. Ich freue mich, dass du hier bist. Viel Spaß beim Stöbern."
                ]
            },

            post2: {
                category: "musik",
                title: "Songs, die ich in letzter Zeit gehört habe",
                short: "Eine Sammlung von Songs, die in letzter Zeit bei mir auf Dauerschleife liefen.",
                card: "Eine Sammlung von Songs, die in letzter Zeit bei mir auf Dauerschleife liefen.",
                text: [
                    "Musik ist wahrscheinlich eine der einfachsten Möglichkeiten für mich, Erinnerungen mit einer bestimmten Zeit zu verbinden.",
                    "Dieser Beitrag soll irgendwann ein Ort werden, an dem ich Songs, Alben und Playlists teilen kann, die ich in letzter Zeit gehört habe."
                ]
            },

            post3: {
                category: "fußball",
                title: "Fußball, Statistiken & Besessenheit",
                short: "Gedanken über Fußball, Daten und alles dazwischen.",
                card: "Gedanken über Fußball, Daten und alles dazwischen.",
                text: [
                    "Ich mochte Fußball schon immer, aber je mehr ich mit Daten arbeite, desto interessanter wird für mich die statistische Seite des Sports.",
                    "Hier werde ich über Fußball, Statistiken, Datenprojekte und alles schreiben, was meine Aufmerksamkeit erregt."
                ]
            },

            post4: {
                category: "gedanken",
                title: "Was mir gerade durch den Kopf geht",
                short: "Meinungen, Beobachtungen und zufällige Gedanken, die sonst nirgendwo hinpassen.",
                card: "Meinungen, Beobachtungen und zufällige Gedanken, die sonst nirgendwo hinpassen.",
                text: [
                    "Nicht alles braucht eine eigene Kategorie.",
                    "Dieser Bereich ist einfach ein Ort für Gedanken, Beobachtungen, Meinungen und zufällige Dinge, die sonst nirgendwo richtig hineinpassen."
                ]
            },

            post5: {
                category: "projekte",
                title: "Seltsame Dinge zum Spaß bauen",
                short: "Zufällige Projekte, Experimente und Dinge, die ich einfach gebaut habe, weil ich es konnte.",
                card: "Zufällige Projekte, Experimente und Dinge, die ich einfach gebaut habe, weil ich es konnte.",
                text: [
                    "Manchmal sind die besten Projekte diejenigen, die keinen besonders nützlichen Zweck haben.",
                    "In diesem Beitrag geht es um Experimente, kleine Programmierprojekte und Dinge, die ich einfach gebaut habe, weil sie interessant klangen."
                ]
            },

            post6: {
                category: "musik",
                title: "Eine unnötig lange Musik-Playlist",
                short: "Ein paar Songs, die irgendwie zu einer ziemlich großen Playlist geworden sind.",
                card: "Ein paar Songs, die irgendwie zu einer ziemlich großen Playlist geworden sind.",
                text: [
                    "Irgendwann hört eine Playlist auf, einfach eine Playlist zu sein, und wird zu einem kleinen persönlichen Archiv.",
                    "Diese hier ist wahrscheinlich ungefähr an diesem Punkt."
                ]
            }
        },

        postCard: {
            post1: "01 / gedanken",
            post2: "02 / musik",
            post3: "03 / fußball",
            post4: "04 / gedanken",
            post5: "05 / projekte",
            post6: "06 / musik"
        },

        footer: {
            backHome: "zur Startseite ↑",
            backHomeArrow: "zur Startseite →"
        }
    }
};

let currentLanguage = localStorage.getItem("ryan-language") || "en";

function getTranslation(path) {
    return path.split(".").reduce((value, key) => {
        return value ? value[key] : undefined;
    }, translations[currentLanguage]);
}

/* Language Switch */

function updateLanguageSwitcher(language) {
    document.querySelectorAll("#language-en").forEach((button) => {
        button.classList.toggle(
            "active-language",
            language === "en"
        );
    });

    document.querySelectorAll("#language-de").forEach((button) => {
        button.classList.toggle(
            "active-language",
            language === "de"
        );
    });
}

function setLanguage(language) {
    if (!translations[language]) {
        return;
    }

    currentLanguage = language;
    localStorage.setItem("ryan-language", language);

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = getTranslation(element.dataset.i18n);

        if (typeof value === "string") {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const value = getTranslation(element.dataset.i18nAria);

        if (typeof value === "string") {
            element.setAttribute("aria-label", value);
        }
    });

    updateDynamicContent();

    /*
     * IMPORTANT:
     * Always refresh the currently selected post using the
     * newly selected language.
     *
     * This makes sure the modal never keeps the previous
     * language's title, category or article text.
     */
    if (typeof currentPostIndex === "number" && postModal) {
        displayPost(currentPostIndex);
    }

    /* Update the visual state of the language buttons. */
    updateLanguageSwitcher(currentLanguage);

    const page = document.body.classList.contains("portfolio-page")
        ? "Portfolio"
        : document.body.classList.contains("personal-page")
            ? "Personal"
            : "Ryan Geiler";

    document.title = currentLanguage === "de"
        ? page === "Portfolio"
            ? "Portfolio - Ryan Geiler"
            : page === "Personal"
                ? "Persönlich - Ryan Geiler"
                : "Ryan Geiler"
        : page === "Portfolio"
            ? "Portfolio - Ryan Geiler"
            : page === "Personal"
                ? "Personal - Ryan Geiler"
                : "Ryan Geiler";
}

function setupLanguageSwitchers() {
    document.querySelectorAll("#language-en").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            setLanguage("en");
        });
    });

    document.querySelectorAll("#language-de").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            setLanguage("de");
        });
    });
}

/* Scroll Reveal */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}

/* Modal Helpers */

const body = document.body;

function openModal(modal) {
    if (!modal) {
        return;
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
}

function closeModal(modal) {
    if (!modal) {
        return;
    }

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
}

/* Project Data/Documents */

const cvFiles = {
    en: "images/documents/ryan-geiler-cv-en.pdf",
    de: "images/documents/ryan-geiler-cv-de.pdf"
};

const projectNumbers = {
    bundesliga: "01",
    deathtunes: "02",
    "ai-smes": "03"
};

function getProject(projectId) {
    const key = projectId === "ai-smes" ? "ai" : projectId;
    return translations[currentLanguage].projects[key];
}

/* Project Modal */

const projectModal = document.getElementById("project-modal");

const projectTitle = document.getElementById("project-title");
const projectNumber = document.getElementById("project-number");
const projectCategory = document.getElementById("project-category");
const projectDate = document.getElementById("project-date");
const projectDescription = document.getElementById("project-description");
const projectPurpose = document.getElementById("project-purpose");
const projectTechnologies = document.getElementById("project-technologies");
const projectLink = document.getElementById("project-link");

let currentProjectId = null;

function displayProject(projectId) {
    const project = getProject(projectId);

    if (!project || !projectModal) {
        return;
    }

    currentProjectId = projectId;

    projectNumber.textContent = projectNumbers[projectId];
    projectCategory.textContent = project.category;
    projectTitle.textContent = project.title;
    projectDate.textContent = project.date;
    projectDescription.textContent = project.description;
    projectPurpose.textContent = project.purpose;

    if (project.link) {
        projectLink.href = project.link.url;
        projectLink.textContent = project.link.label;
        projectLink.hidden = false;
    } else {
        projectLink.hidden = true;
        projectLink.removeAttribute("href");
        projectLink.textContent = "";
    }

    projectTechnologies.innerHTML = "";

    project.technologies.forEach((technology) => {
        const tag = document.createElement("span");
        tag.textContent = technology;
        projectTechnologies.appendChild(tag);
    });
}

document.querySelectorAll(".project-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const projectId = trigger.dataset.project;

        if (!getProject(projectId)) {
            return;
        }

        displayProject(projectId);
        openModal(projectModal);
    });
});

/* Post Info */

const posts = [
    {
        id: "post-1",
        date: "08.08.2026",
        imageClass: "featured-image-one"
    },
    {
        id: "post-2",
        date: "02.08.2026",
        imageClass: "music"
    },
    {
        id: "post-3",
        date: "27.07.2026",
        imageClass: "football"
    },
    {
        id: "post-4",
        date: "20.07.2026",
        imageClass: "thoughts"
    },
    {
        id: "post-5",
        date: "12.07.2026",
        imageClass: "projects"
    },
    {
        id: "post-6",
        date: "05.07.2026",
        imageClass: "music"
    }
];

/* Post Modal Elements */

const postModal = document.getElementById("post-modal");
const postModalImage = document.getElementById("post-modal-image");
const postModalCategory = document.getElementById("post-modal-category");
const postModalDate = document.getElementById("post-modal-date");
const postModalNumber = document.getElementById("post-modal-number");
const postModalTitle = document.getElementById("post-modal-title");
const postModalText = document.getElementById("post-modal-text");

const previousButton = document.getElementById("post-previous");
const nextButton = document.getElementById("post-next");

let currentPostIndex = 0;

function getPost(postId) {
    return translations[currentLanguage].posts[postId];
}

function displayPost(index) {
    if (!postModal || posts.length === 0) {
        return;
    }

    if (index < 0) {
        index = posts.length - 1;
    }

    if (index >= posts.length) {
        index = 0;
    }

    currentPostIndex = index;

    const postMeta = posts[index];

    const languagePosts = translations[currentLanguage].posts;
    const post = languagePosts[postMeta.id];

    if (!post) {
        return;
    }

    postModalImage.className = "post-modal-image";
    postModalImage.classList.add(postMeta.imageClass);

    postModalCategory.textContent = post.category;
    postModalDate.textContent = postMeta.date;

    postModalNumber.textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(posts.length).padStart(2, "0")}`;

    postModalTitle.textContent = post.title;


    postModalText.innerHTML = "";

    post.text.forEach((paragraph) => {
        const paragraphElement = document.createElement("p");
        paragraphElement.textContent = paragraph;
        postModalText.appendChild(paragraphElement);
    });
}

function setupPostTriggers() {
    document.querySelectorAll(".post-trigger").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const postId = trigger.dataset.post;

            const index = posts.findIndex((post) => post.id === postId);

            if (index === -1) {
                return;
            }

            displayPost(index);
            openModal(postModal);
        });
    });
}

setupPostTriggers();

if (previousButton) {
    previousButton.addEventListener("click", () => {
        displayPost(currentPostIndex - 1);
    });
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        displayPost(currentPostIndex + 1);
    });
}

/* Load more posts */

const loadMoreButton = document.getElementById("load-more");

if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
        const hiddenPosts = document.querySelectorAll(".post-hidden");

        hiddenPosts.forEach((post) => {
            post.classList.remove("post-hidden");
        });

        loadMoreButton.classList.add("hidden");
    });
}

/* Close pop-ups */
document.addEventListener("click", (event) => {
    const closeButton = event.target.closest(".modal-close");

    if (closeButton) {
        event.preventDefault();
        event.stopPropagation();
        closeModal(closeButton.closest(".modal"));
        return;
    }

    const backdrop = event.target.closest(".modal-backdrop");

    if (backdrop && event.target === backdrop) {
        closeModal(backdrop.closest(".modal"));
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    document.querySelectorAll(".modal.open").forEach((modal) => {
        closeModal(modal);
    });
});

/* Dynamic content updates */

function updateDynamicContent() {
    /* Update project card descriptions. */
    document.querySelectorAll(".project-trigger").forEach((trigger) => {
        const projectId = trigger.dataset.project;
        const project = getProject(projectId);

        if (!project) {
            return;
        }

        const description = trigger.querySelector(".project-info p");

        if (description) {
            description.textContent = project.short;
        }
    });

    /* Update post cards. */
    document.querySelectorAll(".post-trigger").forEach((trigger) => {
        const postId = trigger.dataset.post;
        const post = getPost(postId);

        if (!post) {
            return;
        }

        const title = trigger.querySelector("h2");
        const description = trigger.querySelector(".post-card-content p");

        if (title) {
            title.textContent = post.title;
        }

        if (description) {
            description.textContent = post.card;
        }
    });

    /* Update the featured post separately. */
    const featuredPost = document.querySelector(".featured-post");

    if (featuredPost) {
        const post = getPost("post-1");

        if (post) {
            const title = featuredPost.querySelector("h2");
            const description = featuredPost.querySelector("p");

            if (title) {
                title.textContent = post.title;
            }

            if (description) {
                description.textContent = post.short;
            }
        }
    }

    /* Update the CV download for the current language. */
    const cvDownload = document.getElementById("cv-download");

    if (cvDownload) {
        cvDownload.href = cvFiles[currentLanguage];
    }

    /* Keep an open project modal translated when language changes. */
    if (currentProjectId && projectModal?.classList.contains("open")) {
        displayProject(currentProjectId);
    }

    /* Keep an open post modal translated when language changes. */
    if (postModal?.classList.contains("open")) {
        displayPost(currentPostIndex);
    }
}

setupLanguageSwitchers();
setLanguage(currentLanguage);

});