const generationNames = {
  1: "Parents",
  2: "Children",
  3: "Grandchildren",
  4: "Great Grandchildren",
  5: "Great Great Grandchildren",
  6: "Great Great Great Grandchildren",
  7: "Great Great Great Great Grandchildren",
};

const generationColors = {
  1: "#53744c",
  2: "#b8873f",
  3: "#2f6f82",
  4: "#7b3e48",
  5: "#5d5b8d",
  6: "#416a8b",
  7: "#9a5a32",
};

const generationOffsets = [0, 170, 344, 535, 780, 1030, 1230];

const members = [
  {
    id: "poli-ramaiah",
    name: "Polisetty Mangayya(Late)",
    relation: "Father",
    generation: 1,
    life: "N/A",
    place: "Revidi",
    occupation: "N/A",
    x: 545,
    y: 46,
    color: "#53744c",
    parents: [],
    spouse: "poli-lakshmamma",
    bio: "First Generation of Polisetty Family",
    notes: ["Spouse: Polisetty Pydiamma(Late)", "Native place: Revidi"],
  },
  {
    id: "poli-lakshmamma",
    name: "Polisetty Pydiamma(Late)",
    relation: "Mother",
    generation: 1,
    life: "N/A",
    place: "Revidi",
    occupation: "N/A",
    x: 835,
    y: 46,
    color: "#7b3e48",
    parents: [],
    spouse: "poli-ramaiah",
    bio: "First Generation of Polisetty Family",
    notes: ["Spouse: Polisetty Mangayya(Late)", "Native place: Revidi"],
  },
  {
    id: "poli-venkatesh",
    name: "Polisetty Venkata Ramanayya(Late)",
    relation: "2nd Child",
    generation: 2,
    life: "N/A",
    place: "Revidi",
    occupation: "N/A",
    x: 630,
    y: 218,
    color: "#53744c",
    parents: ["poli-ramaiah", "poli-lakshmamma"],
    spouse: "poli-sujatha",
    bio: "Second generation of Polisetty Family",
    notes: ["Spouse: Polisetty Kanthamma (Late)", "Native place: Revidi"],
  },
  {
    id: "poli-sujatha",
    name: "Polisetty Kanthamma (Late)",
    relation: "Spouse of 2nd Child",
    generation: 2,
    generationLabel: "Daughter-in-law",
    life: "N/A",
    place: "Revidi",
    occupation: "N/A",
    x: 910,
    y: 218,
    color: "#7b3e48",
    parents: [],
    spouse: "poli-venkatesh",
    bio: "Second generation of Polisetty Family",
    notes: ["Spouse: Polisetty Venkata Ramanayya(Late)", "Native place: Revidi"],
  },
  {
    id: "poli-ramesh",
    name: "Polisetty Venkata Ramanaiah Raja(Late)",
    relation: "1st Child",
    generation: 3,
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 105,
    y: 395,
    color: "#53744c",
    parents: ["poli-venkatesh", "poli-sujatha"],
    spouse: "poli-deepa",
    bio: "Third generation of Polisetty Family",
    notes: ["Spouse: Polisetty MahaLakshmi (Late)", "Child of Polisetty Venkata Ramanayya(Late) and Polisetty Kanthamma (Late)"],
  },
  {
    id: "poli-deepa",
    name: "Polisetty MahaLakshmi (Late)",
    relation: "1st Daughter-in-law for 2nd Child",
    generation: 3,
    generationLabel: "Daughter-in-law",
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 390,
    y: 395,
    color: "#7b3e48",
    parents: [],
    spouse: "poli-ramesh",
    bio: "Third generation of Polisetty Family",
    notes: ["Spouse: Polisetty Venkata Ramanaiah Raja(Late)", "1st daughter-in-law for the 2nd child branch"],
  },
  {
    id: "poli-sravanthi",
    name: "Polisetty Chinna Venkata Ramanaiah (Late)",
    relation: "2nd Child",
    generation: 3,
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 700,
    y: 395,
    color: "#b8873f",
    parents: ["poli-venkatesh", "poli-sujatha"],
    spouse: "poli-arjun",
    bio: "Third generation of Polisetty Family",
    notes: ["Spouse: Polisetty Mangamma (Late)", "Child of Polisetty Venkata Ramanayya(Late) and Polisetty Kanthamma (Late)"],
  },
  {
    id: "poli-arjun",
    name: "Polisetty Mangamma (Late)",
    relation: "2nd daughter-in-law for 2nd child",
    generation: 3,
    generationLabel: "Daughter-in-law",
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 960,
    y: 395,
    color: "#2f6f82",
    parents: ["poli-venkatesh", "poli-sujatha"],
    parents: [],
    spouse: "poli-sravanthi",
    bio: "Third generation of Polisetty Family",
    notes: ["Spouse: Polisetty Chinna Venkata Ramanaiah (Late)", "Polisetty Mangamma is the 2nd daughter-in-law for 2nd child."],
  },
  {
    id: "poli-butchibabu",
    name: "Polisetty Butchi Babu (Late)",
    relation: "3rd Child",
    generation: 3,
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 1325,
    y: 395,
    color: "#607b45",
    parents: ["poli-venkatesh", "poli-sujatha"],
    spouse: null,
    bio: "Third generation of Polisetty Family",
    notes: ["Child of Polisetty Venkata Ramanayya(Late) and Polisetty Kanthamma (Late)"],
  },
  {
    id: "nudurupati-mangaraju",
    name: "Nudurupati Mangaraju (Late)",
    relation: "4th Child",
    generation: 3,
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 1655,
    y: 395,
    color: "#7b3e48",
    parents: ["poli-venkatesh", "poli-sujatha"],
    spouse: "nudurupati-sanyasi",
    bio: "Her initial surname is 'Polisetty' but after marriage she was married to Nudurupati family named Sanyasi Setty(Late).",
    notes: ["Spouse: Nudurupati Sanyasi Setty (Late)", "4th grandchild for the 2nd child branch"],
  },
  {
    id: "nudurupati-sanyasi",
    name: "Nudurupati Sanyasi Setty (Late)",
    relation: "1st Son-In-Law for 2nd child",
    generation: 3,
    generationLabel: "Son-In-Law",
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 1915,
    y: 395,
    color: "#2f6f82",
    parents: [],
    spouse: "nudurupati-mangaraju",
    bio: "Third generation of Polisetty Family",
    notes: ["Spouse: Nudurupati Mangaraju (Late)", "1st son-in-law for the 2nd child branch"],
  },
  {
    id: "kapuganti-rangarao",
    name: "Kapuganti RangaRao (Late)",
    relation: "5th Child",
    generation: 3,
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 2175,
    y: 395,
    color: "#b8873f",
    parents: ["poli-venkatesh", "poli-sujatha"],
    spouse: "kapuganti-kalavathi",
    bio: "RangaRao was the 5th grandchild of 2nd child. He was adopted to Kapuganti's family from Polisetty family.",
    notes: ["Spouse: Kapuganti Kalavathi", "5th grandchild for the 2nd child branch"],
  },
  {
    id: "kapuganti-kalavathi",
    name: "Kapuganti Kalavathi",
    relation: "3rd daughter-in-law for 2nd child",
    generation: 3,
    generationLabel: "Daughter-in-law",
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 2435,
    y: 395,
    color: "#6f4a70",
    parents: [],
    spouse: "kapuganti-rangarao",
    bio: "Third generation of Polisetty Family",
    notes: ["Spouse: Kapuganti RangaRao (Late)", "Kapuganti Kalavathi is the 3rd daughter-in-law for 2nd child."],
  },
  {
    id: "vinnakota-mangaraju",
    name: "Vinnakota Mangaraju",
    relation: "6th Child",
    generation: 3,
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 2740,
    y: 395,
    color: "#7b3e48",
    parents: ["poli-venkatesh", "poli-sujatha"],
    spouse: "vinnakota-venkatarao",
    bio: "Her initial surname is 'Polisetty' but after marriage she was married to Vinnakota family named VenkataRao.",
    notes: ["Spouse: Vinnakota VenkataRao", "6th grandchild for the 2nd child branch"],
  },
  {
    id: "vinnakota-venkatarao",
    name: "Vinnakota VenkataRao",
    relation: "2nd Son-In-Law for 2nd Child",
    generation: 3,
    generationLabel: "Son-In-Law",
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 3020,
    y: 395,
    color: "#2f6f82",
    parents: [],
    spouse: "vinnakota-mangaraju",
    bio: "Third generation of Polisetty Family",
    notes: ["Spouse: Vinnakota Mangaraju", "Vinnakota VenkataRao is the 2nd Son-In-Law for 2nd Child."],
  },
  {
    id: "poli-appalaraju",
    name: "Polisetty Venkata Surya AppalaRaju (Late)",
    relation: "1st Child",
    generation: 4,
    life: "18th March, 1952",
    place: "N/A",
    occupation: "N/A",
    x: 330,
    y: 590,
    color: "#7b3e48",
    parents: ["poli-sravanthi", "poli-arjun"],
    spouse: "poli-rajakumari",
    bio: "Polisetty Venkata Surya AppalaRaju also known as Prabhakar.",
    notes: ["Spouse: Polisetty Rajakumari", "1st child for the 2nd grandchildren branch"],
  },
  {
    id: "poli-rajakumari",
    name: "Polisetty Rajakumari",
    relation: "1st Daughter - in - law for 2nd grandchild",
    generation: 4,
    generationLabel: "Daughter - in- law",
    life: "14th November, 1957",
    place: "N/A",
    occupation: "N/A",
    x: 610,
    y: 590,
    color: "#7b3e48",
    parents: [],
    spouse: "poli-appalaraju",
    bio: "Fourth generation of Polisetty Family",
    notes: ["Spouse: Polisetty Venkata Surya AppalaRaju (Late)"],
  },
  {
    id: "arisetty-manga-krishna-kumari",
    name: "Arisetty Manga Krishna Kumari",
    relation: "1st Daughter",
    generation: 4,
    life: "7th December, 1954",
    place: "N/A",
    occupation: "N/A",
    x: 930,
    y: 590,
    color: "#7b3e48",
    parents: ["poli-sravanthi", "poli-arjun"],
    spouse: "arisetty-venkateswarulu",
    bio: "Arisetty Manga Krishna Kumari is from Polisetty family and was married to Arisetty Venkateswarulu.",
    notes: ["Spouse: Arisetty Venkateswarulu", "2nd Child in generation 4"],
  },
  {
    id: "arisetty-venkateswarulu",
    name: "Arisetty Venkateswarulu",
    relation: "1st Son-In-Law for 2nd Grandchildren",
    generation: 4,
    generationLabel: "Son-In-Law",
    life: "14th August, 1949",
    place: "N/A",
    occupation: "N/A",
    x: 1210,
    y: 590,
    color: "#7b3e48",
    parents: [],
    spouse: "arisetty-manga-krishna-kumari",
    bio: "Fourth generation of Polisetty Family",
    notes: ["Spouse: Arisetty Manga Krishna Kumari", "1st Son-In-Law for 2nd Grandchildren"],
  },
  {
    id: "vetcha-sarojini",
    name: "Vetcha Sarojini(Late)",
    relation: "2nd Daughter",
    generation: 4,
    life: "12th October, 1956",
    place: "N/A",
    occupation: "N/A",
    x: 1490,
    y: 590,
    color: "#7b3e48",
    parents: ["poli-sravanthi", "poli-arjun"],
    spouse: "vetcha-trinadha",
    bio: "Vetcha Sarojini is from Polisetty family and was married to Vetcha Trinadha.",
    notes: ["Spouse: Vetcha Trinadha (Late)", "3rd Child in generation 4"],
  },
  {
    id: "vetcha-trinadha",
    name: "Vetcha Trinadha (Late)",
    relation: "2nd Son-In-Law for 2nd Grandchildren",
    generation: 4,
    generationLabel: "Son-In-Law",
    life: "16th January, 1952",
    place: "N/A",
    occupation: "N/A",
    x: 1770,
    y: 590,
    color: "#7b3e48",
    parents: [],
    spouse: "vetcha-sarojini",
    bio: "Fourth generation of Polisetty Family",
    notes: ["Spouse: Vetcha Sarojini(Late)", "2nd Son-In-Law for 2nd Grandchildren"],
  },
  {
    id: "nudurupati-kamala",
    name: "Nudurupati Kamala",
    relation: "3rd Daughter",
    generation: 4,
    life: "1st November, 1957",
    place: "N/A",
    occupation: "N/A",
    x: 2050,
    y: 590,
    color: "#7b3e48",
    parents: ["poli-sravanthi", "poli-arjun"],
    spouse: "nudurupati-nageswararao",
    bio: "Nudurupati Kamala is from Polisetty family and was married to Nudurupati NageswaraRao.",
    notes: ["Spouse: Nudurupati NageswaraRao", "4th Child in generation 4"],
  },
  {
    id: "nudurupati-nageswararao",
    name: "Nudurupati NageswaraRao",
    relation: "3rd Son-In-Law for 2nd Grandchildren",
    generation: 4,
    generationLabel: "Son-In-Law",
    life: "7th April, 1954",
    place: "N/A",
    occupation: "N/A",
    x: 2330,
    y: 590,
    color: "#7b3e48",
    parents: [],
    spouse: "nudurupati-kamala",
    bio: "Fourth generation of Polisetty Family",
    notes: ["Spouse: Nudurupati Kamala", "3rd Son-In-Law for 2nd Grandchildren"],
  },
  {
    id: "poli-venkata-ramana-murthy",
    name: "Polisetty Venkata Ramana Murthy(Late)",
    relation: "5th Child",
    generation: 4,
    life: "6th August, 1959",
    place: "N/A",
    occupation: "N/A",
    x: 2610,
    y: 590,
    color: "#7b3e48",
    parents: ["poli-sravanthi", "poli-arjun"],
    spouse: "poli-jayasree",
    bio: "Polisetty Venkata Ramana Murthy(Late), people also call him as Nanajee.",
    notes: ["Spouse: Polisetty Jayasree", "5th Child for the 2nd grandchildren branch"],
  },
  {
    id: "poli-jayasree",
    name: "Polisetty Jayasree",
    relation: "2nd Daughter-In-Law for 2nd Grandchildren",
    generation: 4,
    generationLabel: "Daughter-In-Law",
    life: "1st August, 1969",
    place: "N/A",
    occupation: "N/A",
    x: 2890,
    y: 590,
    color: "#7b3e48",
    parents: [],
    spouse: "poli-venkata-ramana-murthy",
    bio: "Fourth generation of Polisetty Family",
    notes: ["Spouse: Polisetty Venkata Ramana Murthy(Late)", "2nd Daughter-In-Law for 2nd Grandchildren"],
  },
  {
    id: "poli-butchivenkata-ramanayya",
    name: "Polisetty Butchi Venkata Ramanayya",
    relation: "6th Child",
    generation: 4,
    life: "27th November, 1963",
    place: "N/A",
    occupation: "N/A",
    x: 3170,
    y: 590,
    color: "#7b3e48",
    parents: ["poli-sravanthi", "poli-arjun"],
    spouse: "poli-parvathidevi",
    bio: "Polisetty Butchi Venkata Ramanayya, people also call him as ButchiBabu.",
    notes: ["Spouse: Polisetty ParvathiDevi", "6th Child for the 2nd grandchildren branch"],
  },
  {
    id: "poli-parvathidevi",
    name: "Polisetty ParvathiDevi",
    relation: "3rd Daughter-In-Law for 2nd Grandchildren",
    generation: 4,
    generationLabel: "Daughter-In-Law",
    life: "25th February, 1966",
    place: "N/A",
    occupation: "N/A",
    x: 3450,
    y: 590,
    color: "#7b3e48",
    parents: [],
    spouse: "poli-butchivenkata-ramanayya",
    bio: "Fourth generation of Polisetty Family",
    notes: ["Spouse: Polisetty Butchi Venkata Ramanayya", "3rd Daughter-In-Law for 2nd Grandchildren"],
  },
  {
    id: "poli-venkata-ramakrishna-rao",
    name: "Polisetty Venkata RamaKrishna Rao",
    relation: "7th Child",
    generation: 4,
    life: "24th September, 1969",
    place: "N/A",
    occupation: "N/A",
    x: 3730,
    y: 590,
    color: "#7b3e48",
    parents: ["poli-sravanthi", "poli-arjun"],
    spouse: "poli-krishnaveni",
    bio: "Polisetty Venkata RamaKrishna Rao, people also call him as Krishna.",
    notes: ["Spouse: Polisetty KrishnaVeni", "7th Child for the 2nd grandchildren branch"],
  },
  {
    id: "poli-krishnaveni",
    name: "Polisetty KrishnaVeni",
    relation: "4th Daughter-In-Law for 2nd Grandchildren",
    generation: 4,
    generationLabel: "Daughter-In-Law",
    life: "11th November, 1977",
    place: "N/A",
    occupation: "N/A",
    x: 4010,
    y: 590,
    color: "#7b3e48",
    parents: [],
    spouse: "poli-venkata-ramakrishna-rao",
    bio: "Polisetty KrishnaVeni, the 2nd Daughter of Vetcha Sarojini(Late) and Vetcha Trinadha (Late).",
    notes: ["Spouse: Polisetty Venkata RamaKrishna Rao", "4th Daughter-In-Law for 2nd Grandchildren"],
  },
  {
    id: "poli-satish-kumar",
    name: "Polisetty Satish Kumar(Late)",
    relation: "1st Child",
    generation: 5,
    life: "11th August, 1976",
    death: "18th December, 2005",
    place: "N/A",
    occupation: "N/A",
    x: 470,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-appalaraju", "poli-rajakumari"],
    spouse: null,
    bio: "Polisetty Satish Kumar(Late) is the 1st child to the 1st Great Grandchildren.",
    notes: ["Date of Death: 18th December, 2005"],
  },
  {
    id: "poli-bhaskar-kumar",
    name: "Polisetty Bhaskar Kumar",
    relation: "2nd Child",
    generation: 5,
    life: "1st April, 1978",
    place: "N/A",
    occupation: "N/A",
    x: 760,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-appalaraju", "poli-rajakumari"],
    spouse: "poli-prasanthi",
    bio: "Polisetty Bhaskar Kumar is the 2nd child to the 1st Great Grandchildren couple.",
    notes: ["Spouse: Polisetty Prasanthi"],
  },
  {
    id: "poli-prasanthi",
    name: "Polisetty Prasanthi",
    relation: "1st Daughter-In-Law for 1st Great Grandchildren",
    generation: 5,
    generationLabel: "Daughter-In-Law",
    life: "4th August, 1982",
    place: "N/A",
    occupation: "N/A",
    x: 1040,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "poli-bhaskar-kumar",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Polisetty Bhaskar Kumar", "1st Daughter-In-Law for 1st Great Grandchildren"],
  },
  {
    id: "poli-dinesh-kumar",
    name: "Polisetty Dinesh Kumar",
    relation: "3rd Child",
    generation: 5,
    life: "6th June, 1980",
    place: "N/A",
    occupation: "N/A",
    x: 1320,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-appalaraju", "poli-rajakumari"],
    spouse: "poli-kalpana",
    bio: "Polisetty Dinesh Kumar is the 3rd child to the 1st Great Grandchildren couple.",
    notes: ["Spouse: Polisetty Kalpana"],
  },
  {
    id: "poli-kalpana",
    name: "Polisetty Kalpana",
    relation: "2nd Daughter-In-Law for 1st Great Grandchildren",
    generation: 5,
    generationLabel: "Daughter-In-Law",
    life: "19th February, 1986",
    place: "N/A",
    occupation: "N/A",
    x: 1600,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "poli-dinesh-kumar",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Polisetty Dinesh Kumar", "2nd Daughter-In-Law for 1st Great Grandchildren"],
  },
  {
    id: "dara-harika",
    name: "Dara Harika",
    relation: "4th Child",
    generation: 5,
    life: "8th August, 1983",
    place: "N/A",
    occupation: "N/A",
    x: 1880,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-appalaraju", "poli-rajakumari"],
    spouse: "dara-venkateswara-rao",
    bio: "Harika is from Polisetty family. After marriage she was given to Dara's family and was married to Dara Venkateswara Rao.",
    notes: ["Spouse: Dara Venkateswara Rao", "4th child to the 1st Great Grandchildren couple"],
  },
  {
    id: "dara-venkateswara-rao",
    name: "Dara Venkateswara Rao",
    relation: "1st Son-In-Law for 1st Great Grandchildren",
    generation: 5,
    generationLabel: "Son-In-Law",
    life: "25th December, 1977",
    place: "N/A",
    occupation: "N/A",
    x: 2160,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "dara-harika",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Dara Harika", "1st Son-In-Law for 1st Great Grandchildren"],
  },
  {
    id: "arisetty-ashok-kumar",
    name: "Arisetty Ashok Kumar",
    relation: "1st Child",
    generation: 5,
    life: "11th September, 1974",
    marriage: "24th March, 2000",
    place: "N/A",
    occupation: "N/A",
    x: 2440,
    y: 830,
    color: "#5d5b8d",
    parents: ["arisetty-manga-krishna-kumari", "arisetty-venkateswarulu"],
    spouse: "arisetty-revathi",
    bio: "Arisetty Ashok Kumar is the 1st child to the 2nd Great Grandchildren couple.",
    notes: ["Spouse: Arisetty Revathi", "Marriage Date: 24th March, 2000"],
  },
  {
    id: "arisetty-revathi",
    name: "Arisetty Revathi",
    relation: "1st Daughter-In-Law for 2nd Great Grandchildren",
    generation: 5,
    generationLabel: "Daughter-In-Law",
    life: "16th July, 1979",
    marriage: "24th March, 2000",
    place: "N/A",
    occupation: "N/A",
    x: 2720,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "arisetty-ashok-kumar",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Arisetty Ashok Kumar", "Marriage Date: 24th March, 2000"],
  },
  {
    id: "arisetty-mukesh",
    name: "Arisetty Mukesh",
    relation: "2nd Child",
    generation: 5,
    life: "21st January, 1976",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 3000,
    y: 830,
    color: "#5d5b8d",
    parents: ["arisetty-manga-krishna-kumari", "arisetty-venkateswarulu"],
    spouse: "arisetty-rajitha",
    bio: "Arisetty Mukesh is the 2nd child to the 2nd Great Grandchildren couple.",
    notes: ["Spouse: Arisetty Rajitha"],
  },
  {
    id: "arisetty-rajitha",
    name: "Arisetty Rajitha",
    relation: "2nd Daughter-In-Law for 2nd Great Grandchildren",
    generation: 5,
    generationLabel: "Daughter-In-Law",
    life: "10th April, 1982",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 3280,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "arisetty-mukesh",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Arisetty Mukesh"],
  },
  {
    id: "arisetty-paramesh",
    name: "Arisetty Paramesh",
    relation: "3rd Child",
    generation: 5,
    life: "31st March, 1977",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 3560,
    y: 830,
    color: "#5d5b8d",
    parents: ["arisetty-manga-krishna-kumari", "arisetty-venkateswarulu"],
    spouse: "arisetty-hima",
    bio: "Arisetty Paramesh is the 3rd child to the 2nd Great Grandchildren couple.",
    notes: ["Spouse: Arisetty Hima"],
  },
  {
    id: "arisetty-hima",
    name: "Arisetty Hima",
    relation: "3rd Daughter-In-Law for 2nd Great Grandchildren",
    generation: 5,
    generationLabel: "Daughter-In-Law",
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 3840,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "arisetty-paramesh",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Arisetty Paramesh"],
  },
  {
    id: "grandhi-lakshmi",
    name: "Grandhi Lakshmi",
    relation: "4th Child",
    generation: 5,
    life: "10th August, 1979",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 4120,
    y: 830,
    color: "#5d5b8d",
    parents: ["arisetty-manga-krishna-kumari", "arisetty-venkateswarulu"],
    spouse: "grandhi-ramji",
    bio: "Grandhi Lakshmi is the 4th child to the 2nd Great Grandchildren couple.",
    notes: ["Spouse: Grandhi Ramji"],
  },
  {
    id: "grandhi-ramji",
    name: "Grandhi Ramji",
    relation: "1st Son-In-Law for 2nd Great Grandchildren",
    generation: 5,
    generationLabel: "Son-In-Law",
    life: "8th July, 1978",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 4400,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "grandhi-lakshmi",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Grandhi Lakshmi"],
  },
  {
    id: "koppuravuri-kanthisri",
    name: "Koppuravuri KanthiSri",
    relation: "1st Child",
    generation: 5,
    life: "26th November, 1988",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 8040,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-venkata-ramana-murthy", "poli-jayasree"],
    spouse: "koppuravuri-venkateswarulu",
    bio: "Kanthi is the 1st child and is from Polisetty family. After marriage she was given to Koppuravuri's family to Koppuravuri Venkateswarulu.",
    notes: ["Spouse: Koppuravuri Venkateswarulu", "1st Child to 5th child of great grand children", "People call her Kanthi."],
  },
  {
    id: "koppuravuri-venkateswarulu",
    name: "Koppuravuri Venkateswarulu",
    relation: "1st Son-In-Law for 5th child of great grand children, RamanaMurthy & Jayasree",
    generation: 5,
    generationLabel: "Son-In-Law",
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 8320,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "koppuravuri-kanthisri",
    bio: "For Koppuravuri Venkateswarulu, people call him as Srinu.",
    notes: ["Spouse: Koppuravuri KanthiSri", "1st Son-In-Law for 5th child of great grand children, RamanaMurthy & Jayasree"],
  },
  {
    id: "poli-venkat",
    name: "Polisetty Venkat",
    relation: "2nd Child",
    generation: 5,
    life: "22nd August, 1995",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 8600,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-venkata-ramana-murthy", "poli-jayasree"],
    spouse: null,
    bio: "For Polisetty Venkat, people also call him as Chinna Babu.",
    notes: ["2nd Child to 5th child of great grand children"],
  },
  {
    id: "poli-venkata-goutham",
    name: "Polisetty Venkata Goutham",
    relation: "1st Child",
    generation: 5,
    life: "29th March, 1988",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 8880,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-butchivenkata-ramanayya", "poli-parvathidevi"],
    spouse: null,
    bio: "Polisetty Venkata Goutham is the 1st child to the 6th child of Great Grandchildren.",
    notes: ["1st Child to 6th child of great grand children"],
  },
  {
    id: "poli-mangasruthi",
    name: "Polisetty MangaSruthi",
    relation: "2nd Child",
    generation: 5,
    life: "31st March, 1991",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 9160,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-butchivenkata-ramanayya", "poli-parvathidevi"],
    spouse: "prathick-ravi",
    bio: "Polisetty MangaSruthi is the 2nd child to the 6th child of Great Grandchildren.",
    notes: ["Spouse: Prathick Ravi", "2nd Child to 6th child of great grand children"],
  },
  {
    id: "prathick-ravi",
    name: "Prathick Ravi",
    relation: "Son-In-Law for 6th child of great grand children",
    generation: 5,
    generationLabel: "Son-In-Law",
    life: "13th June, 1988",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 9440,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "poli-mangasruthi",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Polisetty MangaSruthi", "Son-In-Law for 6th child of great grand children"],
  },
  {
    id: "poli-venkata-vinaykanth",
    name: "Polisetty Venkata Vinaykanth",
    relation: "1st Child",
    generation: 5,
    life: "15th September, 1999",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 9720,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-venkata-ramakrishna-rao", "poli-krishnaveni"],
    spouse: null,
    bio: "Polisetty Venkata Vinaykanth is the 1st child to the 7th child of Great Grandchildren.",
    notes: ["1st Child to 7th child of great grand children"],
  },
  {
    id: "poli-manga-harshini",
    name: "Polisetty Manga Harshini",
    relation: "2nd Child",
    generation: 5,
    life: "7th May, 2003",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 10000,
    y: 830,
    color: "#5d5b8d",
    parents: ["poli-venkata-ramakrishna-rao", "poli-krishnaveni"],
    spouse: null,
    bio: "Polisetty Manga Harshini is the 2nd child to the 7th child of Great Grandchildren.",
    notes: ["2nd Child to 7th child of great grand children"],
  },
  {
    id: "vetcha-kishore",
    name: "Vetcha Kishore",
    relation: "1st Child",
    generation: 5,
    life: "22nd May, 1974",
    marriage: "4th February, 1999",
    place: "N/A",
    occupation: "N/A",
    x: 4680,
    y: 830,
    color: "#5d5b8d",
    parents: ["vetcha-sarojini", "vetcha-trinadha"],
    spouse: "vvk-ratnamani",
    bio: "Vetcha Kishore is the 1st child to the 2nd daughter of Great Grandchildren, Sarojini & Trinadha.",
    notes: ["Spouse: V V K Ratnamani", "1st child to 2nd daughter of great grand children, Sarojini & Trinadha", "Marriage Date: 4th February, 1999"],
  },
  {
    id: "vvk-ratnamani",
    name: "V V K Ratnamani",
    relation: "1st Daughter-In-Law for 2nd daughter of great grand children",
    generation: 5,
    generationLabel: "Daughter-In-Law",
    life: "24th December, 1976",
    marriage: "4th February, 1999",
    place: "N/A",
    occupation: "N/A",
    x: 4960,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "vetcha-kishore",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Vetcha Kishore", "1st Daughter-In-Law for 2nd daughter of great grand children", "Marriage Date: 4th February, 1999"],
  },
  {
    id: "sivva-nirmala",
    name: "Sivva Nirmala",
    relation: "2nd Child",
    generation: 5,
    life: "10th October, 1975",
    marriage: "14th March, 1994",
    place: "N/A",
    occupation: "N/A",
    x: 5240,
    y: 830,
    color: "#5d5b8d",
    parents: ["vetcha-sarojini", "vetcha-trinadha"],
    spouse: "sivva-kamalakar-rao",
    bio: "Sivva Nirmala is the 2nd child to the 2nd daughter of Great Grandchildren, Sarojini & Trinadha.",
    notes: ["Spouse: Sivva Kamalakar Rao", "2nd Child to 2nd daughter of great grand children, Sarojini & Trinadha", "Marriage Date: 14th March, 1994"],
  },
  {
    id: "sivva-kamalakar-rao",
    name: "Sivva Kamalakar Rao",
    relation: "1st Son-In-Law for 2nd daughter of great grand children",
    generation: 5,
    generationLabel: "Son-In-Law",
    life: "4th January, 1967",
    marriage: "14th March, 1994",
    place: "N/A",
    occupation: "N/A",
    x: 5520,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "sivva-nirmala",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Sivva Nirmala", "1st Son-In-Law for 2nd daughter of great grand children", "Marriage Date: 14th March, 1994"],
  },
  {
    id: "poli-krishnaveni-sarojini-child",
    name: "Polisetty Krishnaveni",
    relation: "3rd Child",
    generation: 5,
    life: "11th November, 1977",
    marriage: "24th May, 1996",
    place: "N/A",
    occupation: "N/A",
    x: 5800,
    y: 830,
    color: "#5d5b8d",
    parents: ["vetcha-sarojini", "vetcha-trinadha"],
    spouse: "poli-vrk-rao-soninlaw",
    bio: "Polisetty Krishnaveni is the 3rd child to the 2nd daughter of Great Grandchildren, Sarojini & Trinadha.",
    notes: ["Spouse: Polisetty Venkata Ramakrishna Rao", "3rd Child to 2nd daughter of great grand children, Sarojini & Trinadha", "Marriage Date: 24th May, 1996", "Polisetty Krishnaveni's maternal uncle is Polisetty Venkata Ramakrishna Rao."],
  },
  {
    id: "poli-vrk-rao-soninlaw",
    name: "Polisetty Venkata Ramakrishna Rao",
    relation: "2nd Son-In-Law for 2nd daughter of great grand children",
    generation: 5,
    generationLabel: "Son-In-Law",
    life: "24th September, 1969",
    marriage: "24th May, 1996",
    place: "N/A",
    occupation: "N/A",
    x: 6080,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "poli-krishnaveni-sarojini-child",
    bio: "Polisetty Venkata Ramakrishna Rao is the own younger brother to Sarojini and also the 2nd Son-in-law.",
    notes: ["Spouse: Polisetty Krishnaveni", "2nd Son-In-Law for 2nd daughter of great grand children", "Marriage Date: 24th May, 1996"],
  },
  {
    id: "nudurupati-ramachandraji",
    name: "Nudurupati Ramachandraji",
    relation: "1st Child",
    generation: 5,
    life: "1st August, 1976",
    marriage: "1st March, 2002",
    place: "N/A",
    occupation: "N/A",
    x: 6360,
    y: 830,
    color: "#5d5b8d",
    parents: ["nudurupati-kamala", "nudurupati-nageswararao"],
    spouse: "nudurupati-madhavi",
    bio: "Nudurupati Ramachandraji is the 1st child of the 3rd daughter couple of Great Grandchildren, Kamala and Seshu. People also call him Rama.",
    notes: ["Spouse: Nudurupati Madhavi", "Marriage Date: 1st March, 2002"],
  },
  {
    id: "nudurupati-madhavi",
    name: "Nudurupati Madhavi",
    relation: "1st Daughter - in - law for 3rd daughter couple of Great Grandchildren, Kamala & Seshu",
    generation: 5,
    generationLabel: "Daughter-In-Law",
    life: "N/A",
    marriage: "1st March, 2002",
    place: "N/A",
    occupation: "N/A",
    x: 6640,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "nudurupati-ramachandraji",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Nudurupati Ramachandraji", "Marriage Date: 1st March, 2002"],
  },
  {
    id: "chopperla-kasturi",
    name: "Chopperla Kasturi",
    relation: "2nd Child",
    generation: 5,
    life: "26th December, 1978",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 6920,
    y: 830,
    color: "#5d5b8d",
    parents: ["nudurupati-kamala", "nudurupati-nageswararao"],
    spouse: "chopperla-sree-krishna",
    bio: "Kasturi is the 1st daughter of Nudurupati Kamala and NageswaraRao. After marriage she joined the Chopperla family and married Chopperla Sree Krishna.",
    notes: ["Spouse: Chopperla Sree Krishna", "2nd child to the 3rd daughter of Great Grandchildren, Kamala & Seshu"],
  },
  {
    id: "chopperla-sree-krishna",
    name: "Chopperla Sree Krishna",
    relation: "1st Son - in - law for 3rd daughter couple of Great Grandchildren, Kamala & Seshu",
    generation: 5,
    generationLabel: "Son-In-Law",
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 7200,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "chopperla-kasturi",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Chopperla Kasturi"],
  },
  {
    id: "padmanabhuni-anuradha",
    name: "Padmanabhuni Anuradha",
    relation: "3rd Child",
    generation: 5,
    life: "8th November, 1980",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 7480,
    y: 830,
    color: "#5d5b8d",
    parents: ["nudurupati-kamala", "nudurupati-nageswararao"],
    spouse: "padmanabhuni-sateesh",
    bio: "Anuradha, also known as Anu, is the 2nd daughter of Nudurupati Kamala and NageswaraRao. After marriage she joined the Padmanabhuni family and married Padmanabhuni Sateesh.",
    notes: ["Spouse: Padmanabhuni Sateesh", "3rd child to the 3rd daughter of Great Grandchildren, Kamala & Seshu"],
  },
  {
    id: "padmanabhuni-sateesh",
    name: "Padmanabhuni Sateesh",
    relation: "2nd Son - in - law for 3rd daughter couple of Great Grandchildren, Kamala & Seshu",
    generation: 5,
    generationLabel: "Son-In-Law",
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 7760,
    y: 830,
    color: "#5d5b8d",
    parents: [],
    spouse: "padmanabhuni-anuradha",
    bio: "Fifth generation of Polisetty Family",
    notes: ["Spouse: Padmanabhuni Anuradha"],
  },
  {
    id: "poli-venkata-surya-cherith",
    name: "Polisetty Venkata Surya Cherith",
    relation: "1st Child",
    generation: 6,
    life: "2nd January, 2012",
    place: "N/A",
    occupation: "N/A",
    x: 900,
    y: 1080,
    color: "#416a8b",
    parents: ["poli-bhaskar-kumar", "poli-prasanthi"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Son of the 2nd Child of Great Great Grandchildren, Bhaskar and Prasanthi"],
  },
  {
    id: "poli-venkata-priyesh",
    name: "Polisetty Venkata Priyesh",
    relation: "1st Child",
    generation: 6,
    life: "7th January, 2018",
    place: "N/A",
    occupation: "N/A",
    x: 1400,
    y: 1080,
    color: "#416a8b",
    parents: ["poli-dinesh-kumar", "poli-kalpana"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Son of the 3rd Child of Great Great Grandchildren, Dinesh and Kalpana"],
  },
  {
    id: "poli-venkata-kushal",
    name: "Polisetty Venkata Kushal",
    relation: "2nd Child",
    generation: 6,
    life: "12th March, 2022",
    place: "N/A",
    occupation: "N/A",
    x: 1680,
    y: 1080,
    color: "#416a8b",
    parents: ["poli-dinesh-kumar", "poli-kalpana"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Son of the 3rd Child of Great Great Grandchildren, Dinesh and Kalpana"],
  },
  {
    id: "arisetty-pavitra",
    name: "Arisetty Pavitra",
    relation: "1st Child",
    generation: 6,
    life: "27th June, 2001",
    place: "N/A",
    occupation: "N/A",
    x: 2520,
    y: 1080,
    color: "#416a8b",
    parents: ["arisetty-ashok-kumar", "arisetty-revathi"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Daughter of the 1st Child of Great Great Grandchildren, Ashok and Revathi"],
  },
  {
    id: "arisetty-lasya",
    name: "Arisetty Lasya",
    relation: "2nd Child",
    generation: 6,
    life: "16th December, 2002",
    place: "N/A",
    occupation: "N/A",
    x: 2800,
    y: 1080,
    color: "#416a8b",
    parents: ["arisetty-ashok-kumar", "arisetty-revathi"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Daughter of the 1st Child of Great Great Grandchildren, Ashok and Revathi"],
  },
  {
    id: "arisetty-kaivalya",
    name: "Arisetty Kaivalya",
    relation: "1st Child",
    generation: 6,
    life: "12th May, 2005",
    place: "N/A",
    occupation: "N/A",
    x: 3140,
    y: 1080,
    color: "#416a8b",
    parents: ["arisetty-mukesh", "arisetty-rajitha"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Daughter of the 2nd Child of Great Great Grandchildren, Mukesh and Rajitha"],
  },
  {
    id: "arisetty-koushik",
    name: "Arisetty Koushik",
    relation: "1st Child",
    generation: 6,
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 3700,
    y: 1080,
    color: "#416a8b",
    parents: ["arisetty-paramesh", "arisetty-hima"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Son of the 3rd Child of Great Great Grandchildren, Paramesh and Hima"],
  },
  {
    id: "grandhi-dharmik",
    name: "Grandhi Dharmik",
    relation: "1st Child",
    generation: 6,
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 4200,
    y: 1080,
    color: "#416a8b",
    parents: ["grandhi-lakshmi", "grandhi-ramji"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Son of the 4th Child of Great Great Grandchildren, Lakshmi and Ramji"],
  },
  {
    id: "grandhi-shreyuk",
    name: "Grandhi Shreyuk",
    relation: "2nd Child",
    generation: 6,
    life: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 4480,
    y: 1080,
    color: "#416a8b",
    parents: ["grandhi-lakshmi", "grandhi-ramji"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Son of the 4th Child of Great Great Grandchildren, Lakshmi and Ramji"],
  },
  {
    id: "vetcha-hrudaya",
    name: "Vetcha Hrudaya",
    relation: "1st Child",
    generation: 6,
    life: "8th November, 2009",
    place: "N/A",
    occupation: "N/A",
    x: 4740,
    y: 1080,
    color: "#416a8b",
    parents: ["vetcha-kishore", "vvk-ratnamani"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Daughter of the 1st Child of Great Great Grandchildren, Kishore and Mani"],
  },
  {
    id: "vetcha-tanmaya",
    name: "Vetcha Tanmaya",
    relation: "2nd Child",
    generation: 6,
    life: "30th September, 2011",
    place: "N/A",
    occupation: "N/A",
    x: 5020,
    y: 1080,
    color: "#416a8b",
    parents: ["vetcha-kishore", "vvk-ratnamani"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Daughter of the 1st Child of Great Great Grandchildren, Kishore and Mani"],
  },
  {
    id: "pedamallu-lohitha",
    name: "Pedamallu Lohitha",
    relation: "1st Child",
    generation: 6,
    life: "17th August, 1995",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 5300,
    y: 1080,
    color: "#416a8b",
    parents: ["sivva-nirmala", "sivva-kamalakar-rao"],
    spouse: "pedamallu-sai-kalyan",
    bio: "Lohitha is the 1st daughter of Nirmala and Kamalakar. After marriage she joined the Pedamallu family and married their elder son, Pedamallu Sai Kalyan.",
    notes: ["Spouse: Pedamallu Sai Kalyan", "Daughter of the 2nd Child of Great Great Grandchildren, Sivva Nirmala and Sivva Kamalakar Rao"],
  },
  {
    id: "pedamallu-sai-kalyan",
    name: "Pedamallu Sai Kalyan",
    relation: "Spouse of 1st Child",
    generation: 6,
    generationLabel: "Son-In-Law",
    life: "5th January, 1990",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 5580,
    y: 1080,
    color: "#416a8b",
    parents: [],
    spouse: "pedamallu-lohitha",
    bio: "Sixth generation of Polisetty Family",
    notes: ["Spouse: Pedamallu Lohitha"],
  },
  {
    id: "sivva-abhishek",
    name: "Sivva Abhishek",
    relation: "2nd Child",
    generation: 6,
    life: "2nd August, 2000",
    place: "N/A",
    occupation: "N/A",
    x: 5860,
    y: 1080,
    color: "#416a8b",
    parents: ["sivva-nirmala", "sivva-kamalakar-rao"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["Son of Nirmala and Kamalakar"],
  },
  {
    id: "poli-venkata-vinaykanth-gen6",
    name: "Polisetty Venkata Vinaykanth",
    relation: "1st Child",
    generation: 6,
    life: "15th September, 1999",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 6140,
    y: 1080,
    color: "#416a8b",
    parents: ["poli-krishnaveni-sarojini-child", "poli-vrk-rao-soninlaw"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["1st Child to Krishnaveni and Ramakrishna Rao"],
  },
  {
    id: "poli-manga-harshini-gen6",
    name: "Polisetty Manga Harshini",
    relation: "2nd Child",
    generation: 6,
    life: "7th May, 2003",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 6420,
    y: 1080,
    color: "#416a8b",
    parents: ["poli-krishnaveni-sarojini-child", "poli-vrk-rao-soninlaw"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["2nd Child to Krishnaveni and Ramakrishna Rao"],
  },
  {
    id: "nudurupati-pranav",
    name: "Nudurupati Pranav",
    relation: "1st Child",
    generation: 6,
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 6700,
    y: 1080,
    color: "#416a8b",
    parents: ["nudurupati-ramachandraji", "nudurupati-madhavi"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["1st Child to Ramachandraji and Madhavi"],
  },
  {
    id: "nudurupati-koushal",
    name: "Nudurupati Koushal",
    relation: "2nd Child",
    generation: 6,
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 6980,
    y: 1080,
    color: "#416a8b",
    parents: ["nudurupati-ramachandraji", "nudurupati-madhavi"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["2nd Child to Ramachandraji and Madhavi"],
  },
  {
    id: "chopperla-sanjana",
    name: "Chopperla Sanjana",
    relation: "1st Child",
    generation: 6,
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 7260,
    y: 1080,
    color: "#416a8b",
    parents: ["chopperla-kasturi", "chopperla-sree-krishna"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["1st Child to Kasturi and Sree Krishna"],
  },
  {
    id: "chopperla-srujana",
    name: "Chopperla Srujana",
    relation: "2nd Child",
    generation: 6,
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 7540,
    y: 1080,
    color: "#416a8b",
    parents: ["chopperla-kasturi", "chopperla-sree-krishna"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["2nd Child to Kasturi and Sree Krishna"],
  },
  {
    id: "padmanabhuni-harshith",
    name: "Padmanabhuni Harshith",
    relation: "1st Child",
    generation: 6,
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 7820,
    y: 1080,
    color: "#416a8b",
    parents: ["padmanabhuni-anuradha", "padmanabhuni-sateesh"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["1st Child to Anuradha and Sateesh"],
  },
  {
    id: "padmanabhuni-hasini",
    name: "Padmanabhuni Hasini",
    relation: "2nd Child",
    generation: 6,
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 8100,
    y: 1080,
    color: "#416a8b",
    parents: ["padmanabhuni-anuradha", "padmanabhuni-sateesh"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["2nd Child to Anuradha and Sateesh"],
  },
  {
    id: "koppuravuri-yeshwin",
    name: "Koppuravuri Yeshwin",
    relation: "1st Child",
    generation: 6,
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 8380,
    y: 1080,
    color: "#416a8b",
    parents: ["koppuravuri-kanthisri", "koppuravuri-venkateswarulu"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["1st Child to KanthiSri and Venkateswarulu"],
  },
  {
    id: "koppuravuri-krithick",
    name: "Koppuravuri Krithick",
    relation: "2nd Child",
    generation: 6,
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 8660,
    y: 1080,
    color: "#416a8b",
    parents: ["koppuravuri-kanthisri", "koppuravuri-venkateswarulu"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["2nd Child to KanthiSri and Venkateswarulu"],
  },
  {
    id: "liyansh",
    name: "Liyansh",
    relation: "1st Child",
    generation: 6,
    life: "N/A",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 9220,
    y: 1080,
    color: "#416a8b",
    parents: ["poli-mangasruthi", "prathick-ravi"],
    spouse: null,
    bio: "Sixth generation of Polisetty Family",
    notes: ["1st Child to Sruthi and Prathick Ravi"],
  },
  {
    id: "pedamallu-lakshmi-krishitha",
    name: "Pedamallu Lakshmi Krishitha",
    relation: "1st Child",
    generation: 7,
    life: "17th April, 2021",
    marriage: "N/A",
    place: "N/A",
    occupation: "N/A",
    x: 5440,
    y: 1280,
    color: "#9a5a32",
    parents: ["pedamallu-lohitha", "pedamallu-sai-kalyan"],
    spouse: null,
    bio: "Seventh generation of Polisetty Family",
    notes: ["1st Child to Lohitha and Kalyan"],
  },
];

const treeCanvas = document.querySelector("#treeCanvas");
const treeScroll = document.querySelector("#treeScroll");
const generationLabelTrack = document.querySelector("#generationLabelTrack");
const searchInput = document.querySelector("#searchInput");
const searchBox = document.querySelector(".search-box");
const searchError = document.querySelector("#searchError");
const categoryMessage = document.querySelector("#categoryMessage");
const suggestions = document.querySelector("#suggestions");
const tabButtons = document.querySelectorAll(".tab-button");
const detailPortrait = document.querySelector("#detailPortrait");
const detailGeneration = document.querySelector("#detailGeneration");
const detailName = document.querySelector("#detailName");
const detailLife = document.querySelector("#detailLife");
const detailBio = document.querySelector("#detailBio");
const detailBirth = document.querySelector("#detailBirth");
const detailDeath = document.querySelector("#detailDeath");
const detailMarriage = document.querySelector("#detailMarriage");
const detailRelation = document.querySelector("#detailRelation");
const detailPlace = document.querySelector("#detailPlace");
const detailOccupation = document.querySelector("#detailOccupation");
const detailStudies = document.querySelector("#detailStudies");
const detailLinks = document.querySelector("#detailLinks");
const detailNotes = document.querySelector("#detailNotes");
const detailModal = document.querySelector("#detailModal");
const closeModal = document.querySelector("#closeModal");
const viewTreeLink = document.querySelector("#viewTreeLink");
const topLink = document.querySelector(".top-link");
const requestAccessButton = document.querySelector("#requestAccessButton");
const requestEditButton = document.querySelector("#requestEditButton");
const requestFormStatus = document.querySelector("#requestFormStatus");
const saveDetailButton = document.querySelector("#saveDetailButton");
const factCalendarInputs = document.querySelectorAll(".facts-calendar");
const calendarButtons = document.querySelectorAll(".facts-calendar-button");
const dateNaButtons = document.querySelectorAll(".date-na-button");

let selectedId = members[0].id;
let activeGeneration = "1";
let treeScrollUnlocked = false;
let treeScrollFrame = null;
let generationScrollLocked = false;
const accessRequestAdminEmail = "vinnuharshu0399@gmail.com";
const appFamilyAuthStorageKey = "polisettyFamilyAuth";
const approvedAccessKey = "polisettyEditAccessApproved";
const savedDetailKey = "polisettySavedPersonDetails";
const editableDetailFields = [detailBirth, detailDeath, detailMarriage, detailRelation, detailPlace, detailOccupation, detailStudies];
const dateDetailFields = [detailBirth, detailDeath, detailMarriage];
const blockedMobileNumbers = new Set([
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
  "1234567890",
  "0123456789",
]);
const locationOptions = {
  India: {
    "Andhra Pradesh": ["Revidi", "Visakhapatnam", "Vijayawada", "Rajahmundry", "Kakinada"],
    Telangana: ["Hyderabad", "Warangal", "Karimnagar"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  },
  USA: {
    California: ["San Francisco", "San Jose", "Los Angeles"],
    Texas: ["Dallas", "Austin", "Houston"],
    "New Jersey": ["Edison", "Jersey City", "Newark"],
  },
  "United Kingdom": {
    England: ["London", "Manchester", "Birmingham"],
    Scotland: ["Edinburgh", "Glasgow"],
  },
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetToHomeView() {
  treeScrollUnlocked = false;
  document.body.classList.add("tree-locked");
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  history.replaceState(null, "", "index.html");
}

function resetToTreeView() {
  const treePage = document.querySelector("#family-tree");
  if (!treePage) return;
  treeScrollUnlocked = true;
  document.body.classList.remove("tree-locked");
  setActiveGeneration("1");
  selectAndRender(members[0].id);
  treeScroll.scrollTo({ top: 0, left: 0, behavior: "auto" });
  const top = Math.max(treePage.offsetTop - Math.min(180, window.innerHeight * 0.18), 0);
  window.scrollTo({ top, left: 0, behavior: "auto" });
  history.replaceState(null, "", "index.html");
}

function getMember(id) {
  return members.find((member) => member.id === id);
}

function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function visibleByGeneration(member) {
  return activeGeneration === "all" || String(member.generation) === activeGeneration;
}

function displayGeneration(member) {
  return member.generationLabel || generationNames[member.generation];
}

function visibleBySearch(member) {
  const term = searchInput.value.trim().toLowerCase();
  if (!term) return true;
  if (!isValidNameSearch(term)) return false;
  return member.name.toLowerCase().includes(term);
}

function isValidNameSearch(value) {
  return /^[a-zA-Z\s.]*$/.test(value) && !value.includes("@");
}

function setSearchValidation() {
  const value = searchInput.value.trim();
  const isValid = isValidNameSearch(value);
  searchBox.classList.toggle("invalid", Boolean(value) && !isValid);
  searchError.textContent = Boolean(value) && !isValid ? "Enter letters only. Numbers and email IDs are not valid." : "";
  return isValid;
}

function datePickerToCompact(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}${month}${year}`;
}

function compactToDatePicker(value) {
  if (!/^\d{8}$/.test(value)) return "";
  return `${value.slice(4)}-${value.slice(2, 4)}-${value.slice(0, 2)}`;
}

function validCompactDate(value) {
  if (!value) return true;
  if (!/^\d{8}$/.test(value)) return false;
  const day = Number(value.slice(0, 2));
  const month = Number(value.slice(2, 4));
  const year = Number(value.slice(4));
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function valueOrNA(value) {
  return value?.trim() || "N/A";
}

function isValidMobile(value) {
  if (!value) return true;
  return /^\d{10}$/.test(value) && !blockedMobileNumbers.has(value);
}

function isValidEmail(value) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function savedDetails() {
  try {
    return JSON.parse(localStorage.getItem(savedDetailKey)) || {};
  } catch (error) {
    return {};
  }
}

function saveDetails(details) {
  localStorage.setItem(savedDetailKey, JSON.stringify(details));
}

function hasApprovedEditAccess() {
  const params = new URLSearchParams(window.location.search);
  return params.get("access") === "approved" || localStorage.getItem(approvedAccessKey) === "true";
}

function setEditableDetails(isEditable) {
  editableDetailFields.forEach((field) => {
    field.readOnly = !isEditable;
    field.classList.toggle("editable", isEditable);
  });
  factCalendarInputs.forEach((calendar) => {
    calendar.disabled = !isEditable;
  });
  calendarButtons.forEach((button) => {
    button.disabled = !isEditable;
  });
  dateNaButtons.forEach((button) => {
    button.disabled = !isEditable;
  });
  saveDetailButton.hidden = !isEditable;
  requestAccessButton.hidden = isEditable;
}

function dateDetailValue(overrides, key, fallback) {
  if (Object.prototype.hasOwnProperty.call(overrides, key)) return overrides[key];
  return fallback && fallback.toUpperCase() !== "N/A" ? fallback : "";
}

function detailsForMember(member) {
  const overrides = savedDetails()[member.id] || {};
  return {
    birth: dateDetailValue(overrides, "birth", member.life),
    death: dateDetailValue(overrides, "death", member.death),
    marriage: dateDetailValue(overrides, "marriage", member.marriage),
    relation: overrides.relation || member.relation || "N/A",
    place: overrides.place || member.place || "N/A",
    occupation: overrides.occupation || member.occupation || "N/A",
    studies: overrides.studies || member.studies || "N/A",
  };
}

function setOriginalValue(field, value) {
  field.value = value;
  field.dataset.originalValue = value;
}

function syncCalendarValues() {
  dateDetailFields.forEach((field, index) => {
    factCalendarInputs[index].value = compactToDatePicker(field.value.trim());
  });
}

function isDateFieldValid(field) {
  const value = field.value.trim();
  if (!value || value.toUpperCase() === "N/A") return true;
  if (value === field.dataset.originalValue) return true;
  return validCompactDate(value);
}

function resetUpdateRequestForm(member) {
  requestFormStatus.textContent = "";
  requestFormStatus.classList.remove("success", "error");
  requestAccessButton.classList.remove("attention");
  if (hasApprovedEditAccess()) {
    setEditableDetails(true);
    requestFormStatus.textContent = "Access approved. You can edit the details now.";
    requestFormStatus.classList.add("success");
  } else {
    setEditableDetails(false);
  }
}

function currentSignedInContact() {
  try {
    const cached = JSON.parse(localStorage.getItem(appFamilyAuthStorageKey) || "{}");
    return cached.contact || window.firebase?.auth?.().currentUser?.email || "";
  } catch {
    return window.firebase?.auth?.().currentUser?.email || "";
  }
}

function firestoreDb() {
  if (!window.firebase?.firestore) return null;
  return window.firebase.firestore();
}

async function submitUpdateRequest() {
  const member = getMember(selectedId);
  const requestPayload = {
    adminEmail: accessRequestAdminEmail,
    userContact: currentSignedInContact(),
    memberId: member.id,
    memberName: member.name,
    generation: generationNames[member.generation],
    relation: member.relation,
    status: "pending",
    requestedAt: new Date().toISOString(),
    pageUrl: window.location.href,
  };

  requestAccessButton.disabled = true;
  requestFormStatus.textContent = "Sending access request...";
  requestFormStatus.classList.remove("success", "error");

  try {
    const db = firestoreDb();
    if (!db) throw new Error("Firestore is not enabled yet.");
    await db.collection("accessRequests").add(requestPayload);
    requestFormStatus.textContent = "The request access has been sent successfully. Please wait for the approval...";
    requestFormStatus.classList.add("success");
  } catch (error) {
    console.error("Access request could not be submitted", error, requestPayload);
    requestFormStatus.textContent = "Access request could not be submitted. Please enable Firebase Firestore and try again.";
    requestFormStatus.classList.add("error");
  } finally {
    requestAccessButton.disabled = false;
  }
}

function navigateToRequestAccess() {
  if (hasApprovedEditAccess()) {
    setEditableDetails(true);
    detailBirth.focus();
    requestFormStatus.textContent = "Access approved. You can edit the details now.";
    requestFormStatus.classList.add("success");
    return;
  }
  requestFormStatus.textContent = "";
  requestFormStatus.classList.remove("success", "error");
  requestAccessButton.scrollIntoView({ behavior: "smooth", block: "center" });
  requestAccessButton.focus({ preventScroll: true });
  requestAccessButton.classList.remove("attention");
  window.setTimeout(() => requestAccessButton.classList.add("attention"), 20);
}

function saveCurrentDetails() {
  const invalidDate = [detailBirth, detailDeath, detailMarriage].find((field) => !isDateFieldValid(field));
  if (invalidDate) {
    requestFormStatus.textContent = "Invalid format";
    requestFormStatus.classList.remove("success");
    requestFormStatus.classList.add("error");
    invalidDate.focus();
    return;
  }

  const details = savedDetails();
  details[selectedId] = {
    birth: valueOrNA(detailBirth.value),
    death: valueOrNA(detailDeath.value),
    marriage: valueOrNA(detailMarriage.value),
    relation: valueOrNA(detailRelation.value),
    place: valueOrNA(detailPlace.value),
    occupation: valueOrNA(detailOccupation.value),
    studies: valueOrNA(detailStudies.value),
  };
  saveDetails(details);
  requestFormStatus.textContent = "Changes saved successfully.";
  requestFormStatus.classList.remove("error");
  requestFormStatus.classList.add("success");
}

function matchingMembers() {
  const value = searchInput.value.trim().toLowerCase();
  if (!value || !isValidNameSearch(value)) return [];
  return members.filter((member) => member.name.toLowerCase().includes(value));
}

function renderSuggestions() {
  const matches = matchingMembers();
  suggestions.innerHTML = "";

  if (!matches.length) {
    suggestions.classList.remove("open");
    return;
  }

  matches.forEach((member) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "suggestion-item";
    item.setAttribute("role", "option");
    item.innerHTML = `<strong>${member.name}</strong><span>${displayGeneration(member)} | ${member.relation}</span>`;
    item.addEventListener("click", () => {
      searchInput.value = member.name;
      suggestions.classList.remove("open");
      setActiveGeneration(String(member.generation));
      selectAndRender(member.id);
      requestAnimationFrame(() => scrollToMember(member.id));
    });
    suggestions.appendChild(item);
  });

  suggestions.classList.add("open");
}

function drawConnectors() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("connector-layer");
  svg.setAttribute("viewBox", "0 0 10400 1450");

  function cardBox(id) {
    const card = treeCanvas.querySelector(`[data-id="${id}"]`);
    if (!card) return null;
    return {
      left: card.offsetLeft,
      right: card.offsetLeft + card.offsetWidth,
      top: card.offsetTop,
      bottom: card.offsetTop + card.offsetHeight,
      centerX: card.offsetLeft + card.offsetWidth / 2,
      centerY: card.offsetTop + card.offsetHeight / 2,
    };
  }

  function coupleJunction(firstBox, secondBox) {
    const leftBox = firstBox.left <= secondBox.left ? firstBox : secondBox;
    const rightBox = firstBox.left <= secondBox.left ? secondBox : firstBox;
    const overlapTop = Math.max(leftBox.top, rightBox.top);
    const overlapBottom = Math.min(leftBox.bottom, rightBox.bottom);
    return {
      leftBox,
      rightBox,
      x: (leftBox.right + rightBox.left) / 2,
      y: (overlapTop + overlapBottom) / 2,
    };
  }

  const spousePairs = new Set();
  members.forEach((member) => {
    if (!member.spouse) return;
    const spouse = getMember(member.spouse);
    if (!spouse) return;
    const key = [member.id, spouse.id].sort().join(":");
    if (spousePairs.has(key)) return;
    spousePairs.add(key);

    const memberBox = cardBox(member.id);
    const spouseBox = cardBox(spouse.id);
    if (!memberBox || !spouseBox) return;
    const junction = coupleJunction(memberBox, spouseBox);
    const startX = junction.leftBox.right;
    const startY = junction.y;
    const endX = junction.rightBox.left;
    const endY = junction.y;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("connector", "spouse-connector");
    if (!visibleByGeneration(member) && !visibleByGeneration(spouse) && activeGeneration !== "all") {
      path.classList.add("hidden");
    }
    path.setAttribute("d", `M ${startX} ${startY} H ${endX}`);
    svg.appendChild(path);
  });

  const familyGroups = new Map();
  members.forEach((child) => {
    if (!child.parents.length) return;
    const key = child.parents.slice().sort().join(":");
    if (!familyGroups.has(key)) familyGroups.set(key, []);
    familyGroups.get(key).push(child);
  });

  const connectorLanes = [];

  function reserveConnectorLane(preferredY, minY, maxY, minX, maxX) {
    if (maxY <= minY) return minY;

    const laneGap = 18;
    const clampedPreferred = Math.min(Math.max(preferredY, minY), maxY);
    const candidates = [clampedPreferred];

    for (let offset = laneGap; offset <= maxY - minY; offset += laneGap) {
      if (clampedPreferred - offset >= minY) candidates.push(clampedPreferred - offset);
      if (clampedPreferred + offset <= maxY) candidates.push(clampedPreferred + offset);
    }

    const chosenY = candidates.find((candidateY) =>
      connectorLanes.every((lane) => {
        const rangesOverlap = minX < lane.maxX + 12 && maxX > lane.minX - 12;
        return !rangesOverlap || Math.abs(candidateY - lane.y) >= laneGap;
      })
    ) ?? clampedPreferred;

    connectorLanes.push({ y: chosenY, minX, maxX });
    return chosenY;
  }

  familyGroups.forEach((children, key) => {
    const parents = key.split(":").map(getMember).filter(Boolean);
    if (!parents.length) return;

    const parentBoxes = parents.map((parent) => cardBox(parent.id)).filter(Boolean);
    if (!parentBoxes.length) return;
    const parentJunction = parentBoxes.length > 1 ? coupleJunction(parentBoxes[0], parentBoxes[1]) : null;
    const startX = parentJunction ? parentJunction.x : parentBoxes[0].centerX;
    const startY = parentJunction ? parentJunction.y : parentBoxes[0].bottom + 8;
    const childCenters = children
      .map((child) => {
        const box = cardBox(child.id);
        return box ? { child, x: box.centerX, y: box.top - 16 } : null;
      })
      .filter(Boolean);
    if (!childCenters.length) return;
    const lowestParentEdge = Math.max(...parentBoxes.map((box) => box.bottom));
    const preferredBusY = Math.min(...childCenters.map((child) => child.y)) - 40;
    const minX = Math.min(startX, ...childCenters.map((child) => child.x));
    const maxX = Math.max(startX, ...childCenters.map((child) => child.x));
    const minimumBusY = lowestParentEdge + 18;
    const maximumBusY = Math.min(...childCenters.map((child) => child.y)) - 16;
    const busY = reserveConnectorLane(
      preferredBusY,
      minimumBusY,
      maximumBusY,
      minX,
      maxX
    );

    const trunk = document.createElementNS("http://www.w3.org/2000/svg", "path");
    trunk.classList.add("connector");
    if (!parents.some(visibleByGeneration) && !children.some(visibleByGeneration) && activeGeneration !== "all") {
      trunk.classList.add("hidden");
    }
    trunk.setAttribute("d", `M ${startX} ${startY} V ${busY} M ${minX} ${busY} H ${maxX}`);
    svg.appendChild(trunk);

    childCenters.forEach(({ child, x, y }) => {
      const branch = document.createElementNS("http://www.w3.org/2000/svg", "path");
      branch.classList.add("connector");
      if (!parents.some(visibleByGeneration) && !visibleByGeneration(child) && activeGeneration !== "all") {
        branch.classList.add("hidden");
      }
      branch.setAttribute("d", `M ${x} ${busY} V ${y}`);
      svg.appendChild(branch);
    });
  });

  treeCanvas.prepend(svg);
}

function renderTree() {
  treeCanvas.innerHTML = "";

  let visibleCount = 0;

  members.forEach((member) => {
    const generationVisible = visibleByGeneration(member);
    const searchVisible = visibleBySearch(member);
    const isHighlighted = generationVisible && searchVisible;
    if (isHighlighted) visibleCount += 1;

    const card = document.createElement("button");
    card.type = "button";
    card.className = "person-card";
    card.dataset.id = member.id;
    card.style.left = `${member.x}px`;
    card.style.top = `${member.y}px`;
    card.style.setProperty("--member-color", generationColors[member.generation]);
    card.setAttribute("aria-label", `View details for ${member.name}`);

    if (member.id === selectedId) card.classList.add("active");
    if (!isHighlighted) card.classList.add("dimmed");

    card.innerHTML = `
      <span class="initials">${initials(member.name)}</span>
      <span>
        <span class="person-name">${member.name}</span>
        <span class="person-meta">${displayGeneration(member)} | ${member.relation}</span>
      </span>
    `;
    card.addEventListener("mouseenter", () => showDetails(member.id));
    card.addEventListener("mouseleave", () => showDetails(selectedId));
    card.addEventListener("click", () => selectMember(member.id));
    treeCanvas.appendChild(card);
  });

  drawConnectors();

  categoryMessage.textContent = "";
  categoryMessage.classList.remove("show");
  if (!visibleCount && searchInput.value.trim() && isValidNameSearch(searchInput.value.trim())) {
    categoryMessage.textContent = "No matching Family Member Present in this category. Try to search in other category";
    categoryMessage.classList.add("show");
  }
}

function makeLinkChip(label, id) {
  const person = getMember(id);
  if (!person) return null;

  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "link-chip";
  chip.textContent = `${label}: ${person.name}`;
  chip.addEventListener("click", () => selectMember(id));
  return chip;
}

function syncActiveCard() {
  document.querySelectorAll(".person-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.id === selectedId);
  });
}

function showDetails(id) {
  const member = getMember(id);
  if (!member) return;
  const details = detailsForMember(member);

  detailPortrait.style.setProperty("--portrait-color", generationColors[member.generation]);
  detailPortrait.textContent = initials(member.name);
  detailGeneration.textContent = displayGeneration(member);
  detailName.textContent = member.name;
  detailLife.textContent = details.birth;
  detailBio.textContent = member.bio;
  setOriginalValue(detailBirth, details.birth);
  setOriginalValue(detailDeath, details.death);
  setOriginalValue(detailMarriage, details.marriage);
  setOriginalValue(detailRelation, details.relation);
  setOriginalValue(detailPlace, details.place);
  setOriginalValue(detailOccupation, details.occupation);
  setOriginalValue(detailStudies, details.studies);
  syncCalendarValues();
  resetUpdateRequestForm(member);

  detailLinks.innerHTML = "";
  const links = [];
  member.parents.forEach((parentId) => links.push(makeLinkChip("Parent", parentId)));
  if (member.spouse) links.push(makeLinkChip("Spouse", member.spouse));
  members
    .filter((possibleChild) => possibleChild.parents.includes(member.id))
    .forEach((child) => links.push(makeLinkChip("Child", child.id)));

  links.filter(Boolean).forEach((chip) => detailLinks.appendChild(chip));
  if (!detailLinks.children.length) {
    const empty = document.createElement("span");
    empty.className = "link-chip";
    empty.textContent = "No linked family members yet";
    detailLinks.appendChild(empty);
  }

  detailNotes.innerHTML = "";
  member.notes.forEach((note) => {
    const item = document.createElement("li");
    item.textContent = note;
    detailNotes.appendChild(item);
  });
}

function selectMember(id) {
  selectedId = id;
  showDetails(id);
  syncActiveCard();
  openModal();
}

function selectAndRender(id) {
  selectedId = id;
  showDetails(id);
  renderTree();
}

function setActiveGeneration(generation) {
  activeGeneration = generation;
  tabButtons.forEach((button) => button.classList.toggle("active", button.dataset.generation === generation));
}

function scrollToMember(id) {
  const card = document.querySelector(`[data-id="${id}"]`);
  if (!card) return;
  const left = card.offsetLeft - treeScroll.clientWidth / 2 + card.offsetWidth / 2;
  const top = card.offsetTop - treeScroll.clientHeight / 2 + card.offsetHeight / 2;
  treeScroll.scrollTo({
    left: Math.max(left, 0),
    top: Math.max(top, 0),
    behavior: "smooth",
  });
}

function syncGenerationLabels() {
  if (!generationLabelTrack || !treeScroll) return;
  const maxLabelShift = generationLabelTrack.scrollHeight - treeScroll.clientHeight;
  const shift = Math.min(treeScroll.scrollTop, Math.max(maxLabelShift, 0));
  generationLabelTrack.style.transform = `translateY(${-shift}px)`;
}

function generationScrollTarget(index) {
  const maxScrollTop = Math.max(treeScroll.scrollHeight - treeScroll.clientHeight, 0);
  const finalOffset = generationOffsets[generationOffsets.length - 1];
  if (!finalOffset) return 0;
  return maxScrollTop * ((generationOffsets[index] ?? 0) / finalOffset);
}

function scrollToGeneration(generation) {
  if (!treeScroll) return;
  const index = generation === "all" ? 0 : Math.max(Number(generation) - 1, 0);
  treeScroll.scrollTo({
    top: generationScrollTarget(index),
    left: 0,
    behavior: "smooth",
  });
  window.setTimeout(syncGenerationLabels, 220);
}

function generationFromScroll() {
  let visibleGeneration = 1;
  let closestDistance = Number.POSITIVE_INFINITY;

  generationOffsets.forEach((offset, index) => {
    const distance = Math.abs(treeScroll.scrollTop - generationScrollTarget(index));
    if (distance < closestDistance) {
      closestDistance = distance;
      visibleGeneration = index + 1;
    }
  });

  return String(visibleGeneration);
}

function handleTreeScroll() {
  syncGenerationLabels();

  if (treeScrollFrame) return;
  treeScrollFrame = requestAnimationFrame(() => {
    treeScrollFrame = null;
    if (generationScrollLocked) return;
    const visibleGeneration = generationFromScroll();
    if (visibleGeneration !== activeGeneration) {
      setActiveGeneration(visibleGeneration);
      renderTree();
      syncGenerationLabels();
    }
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.generation === "all") {
      window.location.href = "full-tree.html";
      return;
    }

    generationScrollLocked = true;
    setActiveGeneration(button.dataset.generation);

    const firstVisible = members.find((member) => visibleByGeneration(member) && visibleBySearch(member));
    if (firstVisible) selectedId = firstVisible.id;
    selectAndRender(selectedId);
    requestAnimationFrame(() => scrollToGeneration(activeGeneration));
    window.setTimeout(() => {
      generationScrollLocked = false;
    }, 700);
  });
});

searchInput.addEventListener("input", () => {
  const isValid = setSearchValidation();
  renderSuggestions();
  if (!isValid) {
    renderTree();
    return;
  }
  const matches = matchingMembers();
  const firstVisible = matches[0];
  if (firstVisible) {
    selectedId = firstVisible.id;
    setActiveGeneration(String(firstVisible.generation));
  }
  selectAndRender(selectedId);
  if (firstVisible) requestAnimationFrame(() => scrollToMember(firstVisible.id));
});

searchInput.addEventListener("focus", renderSuggestions);

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-row")) {
    suggestions.classList.remove("open");
  }
});

selectAndRender(selectedId);
syncGenerationLabels();
treeScroll.addEventListener("scroll", handleTreeScroll);
["wheel", "touchstart", "pointerdown"].forEach((eventName) => {
  treeScroll.addEventListener(eventName, () => {
    generationScrollLocked = false;
  }, { passive: true });
});

function openModal() {
  detailModal.classList.add("open");
  detailModal.setAttribute("aria-hidden", "false");
  closeModal.focus();
}

function closeDetailsModal() {
  detailModal.classList.remove("open");
  detailModal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", closeDetailsModal);

detailModal.addEventListener("click", (event) => {
  if (event.target === detailModal) closeDetailsModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && detailModal.classList.contains("open")) {
    closeDetailsModal();
  }
});

requestAccessButton.addEventListener("click", submitUpdateRequest);
requestEditButton.addEventListener("click", navigateToRequestAccess);
saveDetailButton.addEventListener("click", saveCurrentDetails);
factCalendarInputs.forEach((calendar, index) => {
  const target = dateDetailFields[index];
  calendar.addEventListener("change", () => {
    if (!hasApprovedEditAccess()) return;
    target.value = datePickerToCompact(calendar.value) || "N/A";
  });
});

calendarButtons.forEach((button, index) => {
  const calendar = factCalendarInputs[index];
  button.addEventListener("click", () => {
    if (!hasApprovedEditAccess() || button.disabled) return;
    if (typeof calendar.showPicker === "function") {
      calendar.showPicker();
    } else {
      calendar.focus();
      calendar.click();
    }
  });
});

dateNaButtons.forEach((button, index) => {
  const target = dateDetailFields[index];
  const calendar = factCalendarInputs[index];
  button.addEventListener("click", () => {
    if (!hasApprovedEditAccess() || button.disabled) return;
    target.value = "N/A";
    calendar.value = "";
  });
});

viewTreeLink.addEventListener("click", (event) => {
  event.preventDefault();
  treeScrollUnlocked = true;
  document.body.classList.remove("tree-locked");
  window.setTimeout(() => {
    document.querySelector("#family-tree").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 120);
});

topLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  window.setTimeout(() => {
    treeScrollUnlocked = false;
    document.body.classList.add("tree-locked");
    history.replaceState(null, "", "index.html");
  }, 450);
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("access") === "approved") {
  localStorage.setItem(approvedAccessKey, "true");
}

if (urlParams.get("return") === "tree") {
  resetToTreeView();
  requestAnimationFrame(resetToTreeView);
  window.addEventListener("load", resetToTreeView, { once: true });
  window.addEventListener("pageshow", resetToTreeView, { once: true });
  window.setTimeout(resetToTreeView, 80);
  window.setTimeout(resetToTreeView, 260);
} else if (urlParams.get("return") === "main" || window.location.hash === "#home" || (window.location.hash && window.location.hash !== "#home")) {
  resetToHomeView();
  requestAnimationFrame(resetToHomeView);
  window.addEventListener("load", resetToHomeView, { once: true });
  window.addEventListener("pageshow", resetToHomeView, { once: true });
  window.setTimeout(resetToHomeView, 80);
  window.setTimeout(resetToHomeView, 260);
}

window.addEventListener(
  "wheel",
  (event) => {
    if (!treeScrollUnlocked && window.scrollY <= 2) {
      event.preventDefault();
    }
  },
  { passive: false }
);

window.addEventListener(
  "touchmove",
  (event) => {
    if (!treeScrollUnlocked && window.scrollY <= 2) {
      event.preventDefault();
    }
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  const blockedKeys = ["ArrowDown", "PageDown", " ", "End"];
  if (!treeScrollUnlocked && blockedKeys.includes(event.key)) {
    event.preventDefault();
  }
});

window.addEventListener("scroll", () => {
  if (!treeScrollUnlocked && window.scrollY > 0) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
});
