export const languages = {
  en: {
    download: 'Download',
    subtitle_1: 'What is CAMI ?',
    cami_pres: [
      'CAMI or Cellular Automata Manager & Intelligence is a platform dedicated to the parution and the test of various cellular automata, a form of artificial life.',
      'We are four IT students, and our goal is to make them accessible to everyone, even if they are not developpers. To make that possible, we first have a desktop application that shows differents algorithms, how to configurate them and their results. You can access it by clicking on the "Visualize" button.',
      'Moreover, our code is <a href="https://github.com/Cellular-Automaton/" target="_blank">open source</a>, and we make sure to maintain and document everything for it to be as understandable as possible. We aim to make CAMI a hub for different algorithms, and maybe awaken peoples\' interests in cellular automata.'
    ],
    subtitle_2: 'A cellular automaton ?',
    automaton:
      "It's a finite grid of cell, each with a given amount of states. An initial state set the value for each cell, and on each turn, the cells can get new states depending on a set of rules.<br/>It's a <i>self-playing game</i>, which means that apart from setting the size of the grid, the initial pattern and rules, the game doesn't take any input from the user.<br/>You can find applications of this in:<ul><li>biology: the pattern on some seashells</li><li>computer science: have been proposed for public-key cryptography</li><li>maze generation: some algorithms can generate mazes</li><li>...</li></ul><small>More information on the <a href=\"https://en.wikipedia.org/wiki/Cellular_automaton\">wikipedia page.</a></small>",
    subtitle_3: 'And Lenia ?',
    lenia_pres:
      'Lenia is a project started in 2015 by <a href="https://github.com/Chakazul/">Bert Chan</a> and is derived from Conway\'s Game of Life by making everything smooth, continuous and generalized. As a result, the generated complex autonomous patterns (also called lifeforms) are described as differing from thoses appering in other cellular automata, and having a very similar behavior to cells, almost like an <b>artificial life</b>.<br/>It won in 2018 the Virtual Creatures Contest at the Genetic and Evolutionary Computation Conference in Kyoto, an honorable mention for the ALIFE Art Award at ALIFE 2018 in Tokyo, and utstanding Publication of 2019 by the International Society for Artificial Life.<br/>In the following years, people started being more and more interested in it, and soon after, coloured, 3D, ... versions were created.<br>It\'s one of the 3 algorithms we want to do, and the most complicated.'
  },
  fr: {
    download: 'Installer',
    subtitle_1: "Qu'est CAMI ?",
    cami_pres: [
      "CAMI ou Cellular Automaton Manager & Intelligence (Gestionnaire & Intelligence d'automates cellulaires) est une plateforme dédiée à la parution et au test d'automates cellulaires variées.",
      "Nous sommes 4 étudiant·e·s en informatique, et notre objectif est de rendre ces algorithmes accessible au plus grand public, développeur ou non. Pour rendre ça possible nous avons développé une application desktop montrant 3 algorithmes cellulaires, comment les configurer et leurs résultats. Il est possible de l'installer en cliquant sur le bouton «Installer»",
      'De plus, notre code est <a href="https://github.com/Cellular-Automaton/" target="_blank">open source</a>, et nous faisons en sorte de maintenir et documenter tout ce qui est possible pour que ce soit compréhensible par le plus grand nombre. Notre objectif est de faire de <i>CAMI</i> un endroit où trouver les algorithmes, et d\'éveiller un intérêt dans ce sujet !'
    ],
    subtitle_2: 'Un algorithme cellulaire ?',
    automaton: 'Un algorithmes de ce type part d\'une carte avec des cases dans lequelles il y a des cellules, chacunes avec un nombre fini d\'états. Une valeur initiale est mise pour chaque cellule; à chaque tour, ces états peuvent changer en fonction de règles auquelles obéissent les cellules.<br/>C\'est un jeu à zéro joueur, comme il ne nécessite aucune intervention de sa part (à part la définition de la cartes et des règles).<br/>Il y a des observations en:<ul><li>biologie: les motifs sur certaines coquilles de mollusques</li><li>informatique: proposé pour des algorithmes de chiffrement à clé publique</li><li>génération de labyrinthes: certains algorithmes en génèrent</li><li>...</li></ul><small>Plus d\'information sur <a href="https://fr.wikipedia.org/wiki/Automate_cellulaire">la page wikipedia</a>.</small>',
    subtitle_3: 'Et Lenia ?',
    lenia_pres: ''
  }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
