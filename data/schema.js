window.mySchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ryiandzuhri.github.io/#person",
      "name": "Muhammad Ryian Dzuhri",
      "jobTitle": "Backend Developer",
      "birthDate": "2006-01-07",
      "birthPlace": {
        "@type": "Place",
        "name": "Kendari, Indonesia"
      },
      "homeLocation": {
        "@type": "Place",
        "name": "Kendari, Southeast Sulawesi"
      },
      "email": "muhammadryiandzuhri@gmail.com",
      "url": "https://ryiandzuhri.github.io",
      "alumniOf": {
        "@id": "https://uho.ac.id#university"
      },
      "knowsAbout": [
        { "@id": "https://ryiandzuhri.github.io/#skill-php" },
        { "@id": "https://ryiandzuhri.github.io/#skill-laravel" },
        { "@id": "https://ryiandzuhri.github.io/#skill-mysql" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Volleyball Organization SMA Negeri 9 Kendari"
      }
    },
    {
      "@type": "CollegeOrUniversity",
      "@id": "https://uho.ac.id#university",
      "name": "Halu Oleo University",
      "url": "https://uho.ac.id",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kendari",
        "addressRegion": "Southeast Sulawesi",
        "addressCountry": "ID"
      }
    },
    {
      "@type": "Project",
      "@id": "https://ryiandzuhri.github.io/#project-sikgb",
      "name": "SI-KGB Kendari",
      "description": "A web-based information system for managing employee data, salary increment schedules, and administrative processes.",
      "url": "https://github.com/RyianDzuhri/si-kepegawaian.git",
      "programmingLanguage": ["PHP", "Laravel", "MySQL", "Bootstrap"],
      "creator": {
        "@id": "https://ryiandzuhri.github.io/#person"
      }
    },
    {
      "@type": "Project",
      "@id": "https://ryiandzuhri.github.io/#project-saasminecraft",
      "name": "SaaS Minecraft platform",
      "description": "A web platform built to manage, deploy, and automate Minecraft server hosting services seamlessly.",
      "url": "https://github.com/RyianDzuhri/saas-minecraft.git",
      "programmingLanguage": ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
      "creator": {
        "@id": "https://ryiandzuhri.github.io/#person"
      }
    },
    {
      "@type": "DefinedTermSet",
      "@id": "https://ryiandzuhri.github.io/#skills-collection",
      "name": "Technical Skills Muhammad Ryian Dzuhri",
      "hasDefinedTerm": [
        {
          "@type": "DefinedTerm",
          "@id": "https://ryiandzuhri.github.io/#skill-php",
          "name": "PHP",
          "description": "A popular general-purpose scripting language that is especially suited to web development."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ryiandzuhri.github.io/#skill-laravel",
          "name": "Laravel",
          "description": "A web application framework with expressive, elegant syntax used for backend development."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ryiandzuhri.github.io/#skill-mysql",
          "name": "MySQL",
          "description": "An open-source relational database management system."
        }
      ]
    }
  ]
};