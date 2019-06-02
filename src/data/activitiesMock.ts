// import _ from 'lodash';

// const activitiesMock = [
//   {"atividade":1,"materia":"História","prova":"P1","nota":10.0},
//   {"atividade":2,"materia":"Fisica","prova":"P1","nota":4.02},
//   {"atividade":3,"materia":"Biologia","prova":"P1","nota":2.59},
//   {"atividade":4,"materia":"Quimica","prova":"P1","nota":2.56},
//   {"atividade":5,"materia":"Matematica","prova":"P1","nota":3.49},
//   {"atividade":6,"materia":"Historia","prova":"P2","nota":8.92},
//   {"atividade":7,"materia":"Fisica","prova":"P2","nota":3.7},
//   {"atividade":8,"materia":"Biologia","prova":"P2","nota":4.49},
//   {"atividade":9,"materia":"Quimica","prova":"P2","nota":10.41},
//   {"atividade":10,"materia":"Matematica","prova":"P2","nota":5.9},
//   {"atividade":11,"materia":"Historia","prova":"P3","nota":10.99},
//   {"atividade":12,"materia":"Fisica","prova":"P3","nota":9.29},
//   {"atividade":13,"materia":"Biologia","prova":"P3","nota":2.49},
//   {"atividade":14,"materia":"Quimica","prova":"P3","nota":8.15},
//   {"atividade":15,"materia":"Matematica","prova":"P3","nota":7.75},
//   {"atividade":16,"materia":"Historia","prova":"P4","nota":7.17},
//   {"atividade":17,"materia":"Fisica","prova":"P4","nota":6.42}
// ];

const activitiesMock = [
  {
    materia:"Português",
    provas: [
      {
        name: "P1",
        nota: 10.0,
      },
      {
        name: "P2",
        nota: 8.92,
      },
      {
        name: "P3",
        nota: 10.0,
      },
      {
        name: "P4",
        nota: 7.17,
      }
    ],
  },
  {
    materia:"História",
    provas: [
      {
        name: "P1",
        nota: 4.02,
      },
      {
        name: "P2",
        nota: 3.7,
      },
      {
        name: "P3",
        nota: 9.29,
      },
      {
        name: "P4",
        nota: 6.42,
      }
    ],
  },
  {
    materia:"Geografia",
    provas: [
      {
        name: "P1",
        nota: 2.59,
      },
      {
        name: "P2",
        nota: 4.49,
      },
      {
        name: "P3",
        nota: 6.49,
      },
      {
        name: "P4",
        nota: 7,
      }
    ],
  },
  {
    materia:"Biologia",
    provas: [
      {
        name: "P1",
        nota: 2.56,
      },
      {
        name: "P2",
        nota: 10,
      },
      {
        name: "P3",
        nota: 8.15,
      },
      {
        name: "P4",
        nota: 8,
      }
    ],
  },
  {
    materia:"Química",
    provas: [
      {
        name: "P1",
        nota: 2.56,
      },
      {
        name: "P2",
        nota: 10,
      },
      {
        name: "P3",
        nota: 8.15,
      },
      {
        name: "P4",
        nota: 6,
      }
    ],
  },
  {
    materia:"Física",
    provas: [
      {
        name: "P1",
        nota: 8,
      },
      {
        name: "P2",
        nota: 10,
      },
      {
        name: "P3",
        nota: 8.15,
      },
      {
        name: "P4",
        nota: 6,
      }
    ],
  },
  {
    materia:"Matemática",
    provas: [
      {
        name: "P1",
        nota: 8,
      },
      {
        name: "P2",
        nota: 10,
      },
      {
        name: "P3",
        nota: 8.15,
      },
      {
        name: "P4",
        nota: 6,
      }
    ],
  },
];

// const materiaNota = _(activitiesMock).reduce(() => {}, {}).mapValues(_.unary(_.mean)).

export default activitiesMock;