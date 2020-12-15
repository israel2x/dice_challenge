import { v4 as uuidv4 } from "uuid";

function DataPreguntas() {
  return [
    {
      name:
        "1.	La parálisis vocal unilateral se caracteriza porque la vía aérea suele estar obstruida.",
      respuesta: "b.	Falso",
      data_pregunta: ["a.	Verdadero", "b.	Falso"],
      data_preguntab: [],
      data_preguntac: [],
      id: uuidv4(),
      active: true,
    },
    {
      name:
        "2.	La parálisis de las cuerdas vocales produce la pérdida de la abducción y la aducción de las cuerdas vocales.",
      respuesta: "a. Verdadero",
      data_pregunta: ["a.	Verdadero", "b.	Falso"],
      data_preguntab: [],
      data_preguntac: [],
      id: uuidv4(),
      active: false,
    },
    {
      name:
        "3.	Cuáles son los factores que intervienen en la aparición de nódulos",
      respuesta:
        "Irritantes ambientales (temperatura humedad, polvo, tiza), número de horas de uso de la voz, contaminación acústica, alcohol y tabaco.",
      data_pregunta: [],
      data_preguntab: [],
      data_preguntac: [],
      id: uuidv4(),
      active: false,
    },
    {
      name:
        "4.	Cuál de las siguientes es una causa de la parálisis de pliegues vocales:",
      respuesta: "c.	Lesión en el cuello o el tórax",
      data_pregunta: [
        "a.	Obstrucción respiratoria",
        "b.	Pérdida de audición",
        "c.	Lesión en el cuello o el tórax",
        "d.	Lesión del nervio vestibulococlear",
      ],
      data_preguntab: [],
      data_preguntac: [],
      id: uuidv4(),
      active: false,
    },
    {
      name:
        "5.	Son pseudotumores benignos, similares a las ampollas, que aparecen tras un proceso inflamatorio, que suelen crecer en una sola cuerda vocal",
      respuesta: "c.	Pólipos",
      data_pregunta: [
        "a.	Nódulos",
        "b.	Verrugas",
        "c.	Pólipos",
        "d.	Papilomatosis de laringe",
      ],
      data_preguntab: [],
      data_preguntac: [],
      id: uuidv4(),
      active: false,
    },
    {
      name: "6. Emparejamiento",
      respuesta: "D.	1C - 2B - 3D - s2A",
      data_pregunta: [
        "A.	1B - 2A - 3C - 4D",
        "B.	1B - 2C - 3A - 4D",
        "C.	1D - 2B - 3A - 4C",
        "D.	1C - 2B - 3D - 2A",
      ],
      data_preguntab: [
        "1. Pólipos",
        "2. Nódulos",
        "3. Parálisis de cuerdas vocales",
        "4. Cuerdas vocales",
      ],
      data_preguntac: [
        "A. responsable de la producción de la voz y se ubica dentro de la laringe, en la parte superior de la tráquea.",
        "B. Son pequeñas tumoraciones parecidas a un callo en las cuerdas vocales, generalmente simétricas y bilaterales, que se relacionan con un esfuerzo sostenido de la voz.",
        "C. Son pseudotumores benignos, similares a las ampollas, que aparecen tras un proceso inflamatorio.",
        "D. Produce la pérdida de la abducción y la aducción de las cuerdas vocales.",
      ],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default DataPreguntas;
