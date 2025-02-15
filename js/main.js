document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('language-toggle');

  // Textos en español e inglés
  const content = {
    es: {


      abilit: "Habilidades",
      prjcts: "Proyectos",

      header: "Mi Portafolio",
      subheader: "Hola, soy Edwin ,Desarrollador apasionado por crear soluciones innovadoras",
      objectivesTitle: "Objetivos Profesionales",
      objectivesText: "\
      Busco desarrollarme como programador en un entorno dinámico que me permita aplicar mis conocimientos en Python,\
      Java y desarrollo web. Me interesa contribuir al desarrollo de soluciones innovadoras, especialmente en el área de\
      inteligencia artificial, mientras continúo aprendiendo y creciendo profesionalmente.\
      ",
      aboutTitle: "Sobre mí",
      aboutText: "Desarrollador en formación con conocimientos en Python, Java, JavaScript y SQL, buscando aplicar\
      y expandir mis habilidades en un entorno profesional. Actualmente enfocado en el aprendizaje\
      continuo de Python, con experiencia en el desarrollo de aplicaciones básicas y resolución de\
      problemas a través de estructuras de datos como arrays, colas, tablas hash y árboles binarios.\
      Cuento con una sólida base en lógica de programación y una mentalidad proactiva para aprender\
      nuevas tecnologías y contribuir al desarrollo de proyectos de software.\
      Mi objetivo es crecer como desarrollador y adquirir experiencia en un equipo dinámico, donde\
      pueda aplicar mis conocimientos y seguir aprendiendo.",
      skillsTitle: "Habilidades Técnicas",
      programSkill: "Lenguajes de programación",
      bdSkill: "Bases de datos",
      toolSkill: "Herramientas",

      prblm: "Resolución de problemas",
      team_: "Trabajo en equipo",
      comun: "Comunicación efectiva",
      adapt: "Adaptabilidad",
      learn: "Aprendizaje autodidacta",
      softSkillsTitle: "Habilidades Blandas",
      projectsTitle: "Algunos Proyectos",
      contact: "Contacto",
    },
    en: {


      abilit: "Skills",
      prjcts: "Projects",

      header: "My Portfolio",
      subheader: "Hi, I'm Edwin, Developer passionate about creating innovative solutions",
      objectivesTitle: "Professional Objectives",
      objectivesText: "I aim to grow as a programmer in a dynamic environment where I can apply my knowledge in Python\
      Java, and web development. I am interested in contributing to the development of innovative solutions,\
      especially in the field of artificial intelligence, while continuing to learn and grow professionally.\
      ",

      aboutTitle: "About Me",
      aboutText: "Developer in training with knowledge of Python, Java, JavaScript, and SQL, seeking to apply\
       and expand my skills in a professional environment. Currently focused on continuous learning in Python,\
       with experience in developing basic applications and solving problems using data structures such as arrays, \
      queues, hash tables, and binary trees. I have a strong foundation in programming logic and a proactive \
      mindset for learning new technologies and contributing to software development projects. My goal is to \
      grow as a developer and gain experience in a dynamic team where I can apply my knowledge and continue learning.",
      skillsTitle: "Technical Skills",
      programSkill: "Programming languages",
      bdSkill: "Database",
      toolSkill: "Tools",

      softSkillsTitle: "Soft Skills",
      prblm: "Problem solving",
      team_: "Teamwork",
      comun: "Effective communication",
      adapt: "Adaptability",
      learn: "Self-taught learning",
      projectsTitle: "Some Projects",
      contact: "Contact",
    }
  };

  let currentLanguage = 'es';

  // Función para cambiar el contenido
  const changeLanguage = () => {
    const lang = currentLanguage === 'es' ? 'en' : 'es';
    document.querySelector('#boutme').textContent = content[lang].aboutTitle;
    document.querySelector('#abilit').textContent = content[lang].abilit;
    document.querySelector('#prjcts').textContent = content[lang].prjcts;
    document.querySelector('#cntact').textContent = content[lang].contact;

    document.querySelector('header h1').textContent = content[lang].header;
    document.querySelector('header p').textContent = content[lang].subheader;
    document.querySelector('#objetivos h2').textContent = content[lang].objectivesTitle;
    document.querySelector('#objetivos p').textContent = content[lang].objectivesText;
    document.querySelector('#sobre-mi h2').textContent = content[lang].aboutTitle;
    document.querySelector('#sobre-mi p').textContent = content[lang].aboutText;
    document.querySelector('#habilidades h2').textContent = content[lang].skillsTitle;
    document.querySelector('#lenguajes').textContent = content[lang].programSkill;
    document.querySelector('#bd').textContent = content[lang].bdSkill;
    document.querySelector('#tools').textContent = content[lang].toolSkill;
    document.querySelector('#hab_blandas').textContent = content[lang].softSkillsTitle;

    document.querySelector('#prblm').textContent = content[lang].prblm;
    document.querySelector('#team_').textContent = content[lang].team_;
    document.querySelector('#comun').textContent = content[lang].comun;
    document.querySelector('#adapt').textContent = content[lang].adapt;
    document.querySelector('#learn').textContent = content[lang].learn;




    document.querySelector('#proyectos h2').textContent = content[lang].projectsTitle;
    document.querySelector('#contacto').textContent = content[lang].contact;
    // toggleButton.textContent = lang === 'es' ? 'ES / EN' : 'ES / EN';
    currentLanguage = lang;
    console.log(lang);
  };

  toggleButton.addEventListener('click', changeLanguage);
});
