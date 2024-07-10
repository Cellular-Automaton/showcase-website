export const languages = {
  en: {
    subtitle_1: 'What is CAMI ?',
    cami_pres: [
      'CAMI or Cellular Automata Manager & Intelligence is a platform dedicated to the parution and the test of various cellular automata, a form of artificial life.',
      'We are four IT students, and our goal is to make them accessible to everyone, even if they are not developpers. To make that possible, we first have a web application that shows differents algorithms, how to configurate them and their results. You can access it by clicking on the "Visualize" button. Moreover, our code is <a href="https://github.com/Cellular-Automaton/" target="_blank">open source</a>, and we make sure to maintain and document everything for it to be as understandable as possible. We aim to make CAMI a hub for different algorithms, and maybe awaken peoples\' interests in cellular automata.'
    ],
    subtitle_2: 'A cellular automaton ?',
    subtitle_3: 'And Lenia ?',
    lenia_pres:
      'Lenia is a project started in 2015 by <a href="https://github.com/Chakazul/">Bert Chan</a> and is derived from Conway\'s Game of Life by making everything smooth, continuous and generalized. As a result, the generated complex autonomous patterns (also called lifeforms) are described as differing from thoses appering in other cellular automata, and having a very similar behavior to cells, almost like an <b>artificial life</b>.<br/>It won in 2018 the Virtual Creatures Contest at the Genetic and Evolutionary Computation Conference in Kyoto, an honorable mention for the ALIFE Art Award at ALIFE 2018 in Tokyo, and utstanding Publication of 2019 by the International Society for Artificial Life. In the following years, people started being more and more interested in it, and soon after, coloured, 3D, ... versions were created.'
  },
  fr: {
    subtitle_1: "Qu'est CAMI ?",
    cami_pres: [
      "CAMI ou Cellular Automaton Manager & Intelligence (Gestionnaire & Intelligence d'automates cellulaires) est une plateforme dédiée à la parution et au test d'automates cellulaires variées."
    ],
    subtitle_2: 'Un algorithme cellulaire ?',
    subtitle_3: 'Et Lenia ?',
    lenia_pres: ''
  }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
