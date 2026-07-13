const fullGenerationNames = {
  1: "Parents",
  2: "Children",
  3: "Grandchildren",
  4: "Great Grandchildren",
  5: "Great Great Grandchildren",
  6: "Great Great Great Grandchildren",
  7: "Great Great Great Great Grandchildren",
};

const fullGenerationColors = {
  1: "#53744c",
  2: "#b8873f",
  3: "#2f6f82",
  4: "#7b3e48",
  5: "#5d5b8d",
  6: "#416a8b",
  7: "#9a5a32",
};

const fullMembers = [
  { id: "poli-ramaiah", name: "Polisetty Mangayya(Late)", relation: "Father", generation: 1, x: 630, y: 70, color: "#53744c", parents: [], spouse: "poli-lakshmamma" },
  { id: "poli-lakshmamma", name: "Polisetty Pydiamma(Late)", relation: "Mother", generation: 1, x: 930, y: 70, color: "#7b3e48", parents: [], spouse: "poli-ramaiah" },
  { id: "poli-venkatesh", name: "Polisetty Venkata Ramanayya(Late)", relation: "2nd Child", generation: 2, x: 760, y: 270, color: "#53744c", parents: ["poli-ramaiah", "poli-lakshmamma"], spouse: "poli-sujatha" },
  { id: "poli-sujatha", name: "Polisetty Kanthamma (Late)", relation: "Spouse of 2nd Child", generation: 2, generationLabel: "Daughter-in-law", x: 1055, y: 270, color: "#7b3e48", parents: [], spouse: "poli-venkatesh" },
  { id: "poli-ramesh", name: "Polisetty Venkata Ramanaiah Raja(Late)", relation: "1st Child", generation: 3, x: 170, y: 500, color: "#53744c", parents: ["poli-venkatesh", "poli-sujatha"], spouse: "poli-deepa" },
  { id: "poli-deepa", name: "Polisetty MahaLakshmi (Late)", relation: "1st Daughter-in-law for 2nd Child", generation: 3, generationLabel: "Daughter-in-law", x: 470, y: 500, color: "#7b3e48", parents: [], spouse: "poli-ramesh" },
  { id: "poli-sravanthi", name: "Polisetty Chinna Venkata Ramanaiah (Late)", relation: "2nd Child", generation: 3, x: 850, y: 500, color: "#b8873f", parents: ["poli-venkatesh", "poli-sujatha"], spouse: "poli-arjun" },
  { id: "poli-arjun", name: "Polisetty Mangamma (Late)", relation: "2nd daughter-in-law for 2nd child", generation: 3, generationLabel: "Daughter-in-law", x: 1160, y: 500, color: "#2f6f82", parents: [], spouse: "poli-sravanthi" },
  { id: "poli-butchibabu", name: "Polisetty Butchi Babu (Late)", relation: "3rd Child", generation: 3, x: 1480, y: 500, color: "#607b45", parents: ["poli-venkatesh", "poli-sujatha"], spouse: null },
  { id: "nudurupati-mangaraju", name: "Nudurupati Mangaraju (Late)", relation: "4th Child", generation: 3, x: 1820, y: 500, color: "#7b3e48", parents: ["poli-venkatesh", "poli-sujatha"], spouse: "nudurupati-sanyasi" },
  { id: "nudurupati-sanyasi", name: "Nudurupati Sanyasi Setty (Late)", relation: "1st Son-In-Law for 2nd child", generation: 3, generationLabel: "Son-In-Law", x: 2140, y: 500, color: "#2f6f82", parents: [], spouse: "nudurupati-mangaraju" },
  { id: "kapuganti-rangarao", name: "Kapuganti RangaRao (Late)", relation: "5th Child", generation: 3, x: 2500, y: 500, color: "#b8873f", parents: ["poli-venkatesh", "poli-sujatha"], spouse: "kapuganti-kalavathi" },
  { id: "kapuganti-kalavathi", name: "Kapuganti Kalavathi", relation: "3rd daughter-in-law for 2nd child", generation: 3, generationLabel: "Daughter-in-law", x: 2820, y: 500, color: "#6f4a70", parents: [], spouse: "kapuganti-rangarao" },
  { id: "vinnakota-mangaraju", name: "Vinnakota Mangaraju", relation: "6th Child", generation: 3, x: 3140, y: 500, color: "#7b3e48", parents: ["poli-venkatesh", "poli-sujatha"], spouse: "vinnakota-venkatarao" },
  { id: "vinnakota-venkatarao", name: "Vinnakota VenkataRao", relation: "2nd Son-In-Law for 2nd Child", generation: 3, generationLabel: "Son-In-Law", x: 3460, y: 500, color: "#2f6f82", parents: [], spouse: "vinnakota-mangaraju" },
  { id: "poli-appalaraju", name: "Polisetty Venkata Surya AppalaRaju (Late)", relation: "1st Child", generation: 4, x: 505, y: 725, color: "#7b3e48", parents: ["poli-sravanthi", "poli-arjun"], spouse: "poli-rajakumari" },
  { id: "poli-rajakumari", name: "Polisetty Rajakumari", relation: "1st Daughter - in - law for 2nd grandchild", generation: 4, generationLabel: "Daughter - in- law", x: 805, y: 725, color: "#7b3e48", parents: [], spouse: "poli-appalaraju" },
  { id: "arisetty-manga-krishna-kumari", name: "Arisetty Manga Krishna Kumari", relation: "1st Daughter", generation: 4, x: 1105, y: 725, color: "#7b3e48", parents: ["poli-sravanthi", "poli-arjun"], spouse: "arisetty-venkateswarulu" },
  { id: "arisetty-venkateswarulu", name: "Arisetty Venkateswarulu", relation: "1st Son-In-Law for 2nd Grandchildren", generation: 4, generationLabel: "Son-In-Law", x: 1405, y: 725, color: "#7b3e48", parents: [], spouse: "arisetty-manga-krishna-kumari" },
  { id: "vetcha-sarojini", name: "Vetcha Sarojini(Late)", relation: "2nd Daughter", generation: 4, x: 1705, y: 725, color: "#7b3e48", parents: ["poli-sravanthi", "poli-arjun"], spouse: "vetcha-trinadha" },
  { id: "vetcha-trinadha", name: "Vetcha Trinadha (Late)", relation: "2nd Son-In-Law for 2nd Grandchildren", generation: 4, generationLabel: "Son-In-Law", x: 2005, y: 725, color: "#7b3e48", parents: [], spouse: "vetcha-sarojini" },
  { id: "nudurupati-kamala", name: "Nudurupati Kamala", relation: "3rd Daughter", generation: 4, x: 2305, y: 725, color: "#7b3e48", parents: ["poli-sravanthi", "poli-arjun"], spouse: "nudurupati-nageswararao" },
  { id: "nudurupati-nageswararao", name: "Nudurupati NageswaraRao", relation: "3rd Son-In-Law for 2nd Grandchildren", generation: 4, generationLabel: "Son-In-Law", x: 2605, y: 725, color: "#7b3e48", parents: [], spouse: "nudurupati-kamala" },
  { id: "poli-venkata-ramana-murthy", name: "Polisetty Venkata Ramana Murthy(Late)", relation: "5th Child", generation: 4, x: 2905, y: 725, color: "#7b3e48", parents: ["poli-sravanthi", "poli-arjun"], spouse: "poli-jayasree" },
  { id: "poli-jayasree", name: "Polisetty Jayasree", relation: "2nd Daughter-In-Law for 2nd Grandchildren", generation: 4, generationLabel: "Daughter-In-Law", x: 3205, y: 725, color: "#7b3e48", parents: [], spouse: "poli-venkata-ramana-murthy" },
  { id: "poli-butchivenkata-ramanayya", name: "Polisetty Butchi Venkata Ramanayya", relation: "6th Child", generation: 4, x: 3505, y: 725, color: "#7b3e48", parents: ["poli-sravanthi", "poli-arjun"], spouse: "poli-parvathidevi" },
  { id: "poli-parvathidevi", name: "Polisetty ParvathiDevi", relation: "3rd Daughter-In-Law for 2nd Grandchildren", generation: 4, generationLabel: "Daughter-In-Law", x: 3805, y: 725, color: "#7b3e48", parents: [], spouse: "poli-butchivenkata-ramanayya" },
  { id: "poli-venkata-ramakrishna-rao", name: "Polisetty Venkata RamaKrishna Rao", relation: "7th Child", generation: 4, x: 4105, y: 725, color: "#7b3e48", parents: ["poli-sravanthi", "poli-arjun"], spouse: "poli-krishnaveni" },
  { id: "poli-krishnaveni", name: "Polisetty KrishnaVeni", relation: "4th Daughter-In-Law for 2nd Grandchildren", generation: 4, generationLabel: "Daughter-In-Law", x: 4405, y: 725, color: "#7b3e48", parents: [], spouse: "poli-venkata-ramakrishna-rao" },
  { id: "poli-satish-kumar", name: "Polisetty Satish Kumar(Late)", relation: "1st Child", generation: 5, x: 655, y: 950, color: "#5d5b8d", parents: ["poli-appalaraju", "poli-rajakumari"], spouse: null },
  { id: "poli-bhaskar-kumar", name: "Polisetty Bhaskar Kumar", relation: "2nd Child", generation: 5, x: 955, y: 950, color: "#5d5b8d", parents: ["poli-appalaraju", "poli-rajakumari"], spouse: "poli-prasanthi" },
  { id: "poli-prasanthi", name: "Polisetty Prasanthi", relation: "1st Daughter-In-Law for 1st Great Grandchildren", generation: 5, generationLabel: "Daughter-In-Law", x: 1255, y: 950, color: "#5d5b8d", parents: [], spouse: "poli-bhaskar-kumar" },
  { id: "poli-dinesh-kumar", name: "Polisetty Dinesh Kumar", relation: "3rd Child", generation: 5, x: 1555, y: 950, color: "#5d5b8d", parents: ["poli-appalaraju", "poli-rajakumari"], spouse: "poli-kalpana" },
  { id: "poli-kalpana", name: "Polisetty Kalpana", relation: "2nd Daughter-In-Law for 1st Great Grandchildren", generation: 5, generationLabel: "Daughter-In-Law", x: 1855, y: 950, color: "#5d5b8d", parents: [], spouse: "poli-dinesh-kumar" },
  { id: "dara-harika", name: "Dara Harika", relation: "4th Child", generation: 5, x: 2155, y: 950, color: "#5d5b8d", parents: ["poli-appalaraju", "poli-rajakumari"], spouse: "dara-venkateswara-rao" },
  { id: "dara-venkateswara-rao", name: "Dara Venkateswara Rao", relation: "1st Son-In-Law for 1st Great Grandchildren", generation: 5, generationLabel: "Son-In-Law", x: 2455, y: 950, color: "#5d5b8d", parents: [], spouse: "dara-harika" },
  { id: "arisetty-ashok-kumar", name: "Arisetty Ashok Kumar", relation: "1st Child", generation: 5, x: 2755, y: 950, color: "#5d5b8d", parents: ["arisetty-manga-krishna-kumari", "arisetty-venkateswarulu"], spouse: "arisetty-revathi" },
  { id: "arisetty-revathi", name: "Arisetty Revathi", relation: "1st Daughter-In-Law for 2nd Great Grandchildren", generation: 5, generationLabel: "Daughter-In-Law", x: 3055, y: 950, color: "#5d5b8d", parents: [], spouse: "arisetty-ashok-kumar" },
  { id: "arisetty-mukesh", name: "Arisetty Mukesh", relation: "2nd Child", generation: 5, x: 3355, y: 950, color: "#5d5b8d", parents: ["arisetty-manga-krishna-kumari", "arisetty-venkateswarulu"], spouse: "arisetty-rajitha" },
  { id: "arisetty-rajitha", name: "Arisetty Rajitha", relation: "2nd Daughter-In-Law for 2nd Great Grandchildren", generation: 5, generationLabel: "Daughter-In-Law", x: 3655, y: 950, color: "#5d5b8d", parents: [], spouse: "arisetty-mukesh" },
  { id: "arisetty-paramesh", name: "Arisetty Paramesh", relation: "3rd Child", generation: 5, x: 3955, y: 950, color: "#5d5b8d", parents: ["arisetty-manga-krishna-kumari", "arisetty-venkateswarulu"], spouse: "arisetty-hima" },
  { id: "arisetty-hima", name: "Arisetty Hima", relation: "3rd Daughter-In-Law for 2nd Great Grandchildren", generation: 5, generationLabel: "Daughter-In-Law", x: 4255, y: 950, color: "#5d5b8d", parents: [], spouse: "arisetty-paramesh" },
  { id: "grandhi-lakshmi", name: "Grandhi Lakshmi", relation: "4th Child", generation: 5, x: 4555, y: 950, color: "#5d5b8d", parents: ["arisetty-manga-krishna-kumari", "arisetty-venkateswarulu"], spouse: "grandhi-ramji" },
  { id: "grandhi-ramji", name: "Grandhi Ramji", relation: "1st Son-In-Law for 2nd Great Grandchildren", generation: 5, generationLabel: "Son-In-Law", x: 4855, y: 950, color: "#5d5b8d", parents: [], spouse: "grandhi-lakshmi" },
  { id: "vetcha-kishore", name: "Vetcha Kishore", relation: "1st Child", generation: 5, x: 5155, y: 950, color: "#5d5b8d", parents: ["vetcha-sarojini", "vetcha-trinadha"], spouse: "vvk-ratnamani" },
  { id: "vvk-ratnamani", name: "V V K Ratnamani", relation: "1st Daughter-In-Law for 2nd daughter of great grand children", generation: 5, generationLabel: "Daughter-In-Law", x: 5455, y: 950, color: "#5d5b8d", parents: [], spouse: "vetcha-kishore" },
  { id: "sivva-nirmala", name: "Sivva Nirmala", relation: "2nd Child", generation: 5, x: 5755, y: 950, color: "#5d5b8d", parents: ["vetcha-sarojini", "vetcha-trinadha"], spouse: "sivva-kamalakar-rao" },
  { id: "sivva-kamalakar-rao", name: "Sivva Kamalakar Rao", relation: "1st Son-In-Law for 2nd daughter of great grand children", generation: 5, generationLabel: "Son-In-Law", x: 6055, y: 950, color: "#5d5b8d", parents: [], spouse: "sivva-nirmala" },
  { id: "poli-krishnaveni-sarojini-child", name: "Polisetty Krishnaveni", relation: "3rd Child", generation: 5, x: 6355, y: 950, color: "#5d5b8d", parents: ["vetcha-sarojini", "vetcha-trinadha"], spouse: "poli-vrk-rao-soninlaw" },
  { id: "poli-vrk-rao-soninlaw", name: "Polisetty Venkata Ramakrishna Rao", relation: "2nd Son-In-Law for 2nd daughter of great grand children", generation: 5, generationLabel: "Son-In-Law", x: 6655, y: 950, color: "#5d5b8d", parents: [], spouse: "poli-krishnaveni-sarojini-child" },
  { id: "nudurupati-ramachandraji", name: "Nudurupati Ramachandraji", relation: "1st Child", generation: 5, x: 6955, y: 950, color: "#5d5b8d", parents: ["nudurupati-kamala", "nudurupati-nageswararao"], spouse: "nudurupati-madhavi" },
  { id: "nudurupati-madhavi", name: "Nudurupati Madhavi", relation: "1st Daughter - in - law for 3rd daughter couple of Great Grandchildren, Kamala & Seshu", generation: 5, generationLabel: "Daughter-In-Law", x: 7255, y: 950, color: "#5d5b8d", parents: [], spouse: "nudurupati-ramachandraji" },
  { id: "chopperla-kasturi", name: "Chopperla Kasturi", relation: "2nd Child", generation: 5, x: 7555, y: 950, color: "#5d5b8d", parents: ["nudurupati-kamala", "nudurupati-nageswararao"], spouse: "chopperla-sree-krishna" },
  { id: "chopperla-sree-krishna", name: "Chopperla Sree Krishna", relation: "1st Son - in - law for 3rd daughter couple of Great Grandchildren, Kamala & Seshu", generation: 5, generationLabel: "Son-In-Law", x: 7855, y: 950, color: "#5d5b8d", parents: [], spouse: "chopperla-kasturi" },
  { id: "padmanabhuni-anuradha", name: "Padmanabhuni Anuradha", relation: "3rd Child", generation: 5, x: 8155, y: 950, color: "#5d5b8d", parents: ["nudurupati-kamala", "nudurupati-nageswararao"], spouse: "padmanabhuni-sateesh" },
  { id: "padmanabhuni-sateesh", name: "Padmanabhuni Sateesh", relation: "2nd Son - in - law for 3rd daughter couple of Great Grandchildren, Kamala & Seshu", generation: 5, generationLabel: "Son-In-Law", x: 8455, y: 950, color: "#5d5b8d", parents: [], spouse: "padmanabhuni-anuradha" },
  { id: "koppuravuri-kanthisri", name: "Koppuravuri KanthiSri", relation: "1st Child", generation: 5, x: 8755, y: 950, color: "#5d5b8d", parents: ["poli-venkata-ramana-murthy", "poli-jayasree"], spouse: "koppuravuri-venkateswarulu" },
  { id: "koppuravuri-venkateswarulu", name: "Koppuravuri Venkateswarulu", relation: "1st Son-In-Law for 5th child of great grand children, RamanaMurthy & Jayasree", generation: 5, generationLabel: "Son-In-Law", x: 9055, y: 950, color: "#5d5b8d", parents: [], spouse: "koppuravuri-kanthisri" },
  { id: "poli-venkat", name: "Polisetty Venkat", relation: "2nd Child", generation: 5, x: 9355, y: 950, color: "#5d5b8d", parents: ["poli-venkata-ramana-murthy", "poli-jayasree"], spouse: null },
  { id: "poli-venkata-goutham", name: "Polisetty Venkata Goutham", relation: "1st Child", generation: 5, x: 9655, y: 950, color: "#5d5b8d", parents: ["poli-butchivenkata-ramanayya", "poli-parvathidevi"], spouse: null },
  { id: "poli-mangasruthi", name: "Polisetty MangaSruthi", relation: "2nd Child", generation: 5, x: 9955, y: 950, color: "#5d5b8d", parents: ["poli-butchivenkata-ramanayya", "poli-parvathidevi"], spouse: "prathick-ravi" },
  { id: "prathick-ravi", name: "Prathick Ravi", relation: "Son-In-Law for 6th child of great grand children", generation: 5, generationLabel: "Son-In-Law", x: 10255, y: 950, color: "#5d5b8d", parents: [], spouse: "poli-mangasruthi" },
  { id: "poli-venkata-vinaykanth", name: "Polisetty Venkata Vinaykanth", relation: "1st Child", generation: 5, x: 10555, y: 950, color: "#5d5b8d", parents: ["poli-venkata-ramakrishna-rao", "poli-krishnaveni"], spouse: null },
  { id: "poli-manga-harshini", name: "Polisetty Manga Harshini", relation: "2nd Child", generation: 5, x: 10855, y: 950, color: "#5d5b8d", parents: ["poli-venkata-ramakrishna-rao", "poli-krishnaveni"], spouse: null },
  { id: "poli-venkata-surya-cherith", name: "Polisetty Venkata Surya Cherith", relation: "1st Child", generation: 6, x: 1105, y: 1320, color: "#416a8b", parents: ["poli-bhaskar-kumar", "poli-prasanthi"], spouse: null },
  { id: "poli-venkata-priyesh", name: "Polisetty Venkata Priyesh", relation: "1st Child", generation: 6, x: 1605, y: 1320, color: "#416a8b", parents: ["poli-dinesh-kumar", "poli-kalpana"], spouse: null },
  { id: "poli-venkata-kushal", name: "Polisetty Venkata Kushal", relation: "2nd Child", generation: 6, x: 1905, y: 1320, color: "#416a8b", parents: ["poli-dinesh-kumar", "poli-kalpana"], spouse: null },
  { id: "arisetty-pavitra", name: "Arisetty Pavitra", relation: "1st Child", generation: 6, x: 2805, y: 1320, color: "#416a8b", parents: ["arisetty-ashok-kumar", "arisetty-revathi"], spouse: null },
  { id: "arisetty-lasya", name: "Arisetty Lasya", relation: "2nd Child", generation: 6, x: 3105, y: 1320, color: "#416a8b", parents: ["arisetty-ashok-kumar", "arisetty-revathi"], spouse: null },
  { id: "arisetty-kaivalya", name: "Arisetty Kaivalya", relation: "1st Child", generation: 6, x: 3505, y: 1320, color: "#416a8b", parents: ["arisetty-mukesh", "arisetty-rajitha"], spouse: null },
  { id: "arisetty-koushik", name: "Arisetty Koushik", relation: "1st Child", generation: 6, x: 4105, y: 1320, color: "#416a8b", parents: ["arisetty-paramesh", "arisetty-hima"], spouse: null },
  { id: "grandhi-dharmik", name: "Grandhi Dharmik", relation: "1st Child", generation: 6, x: 4605, y: 1320, color: "#416a8b", parents: ["grandhi-lakshmi", "grandhi-ramji"], spouse: null },
  { id: "grandhi-shreyuk", name: "Grandhi Shreyuk", relation: "2nd Child", generation: 6, x: 4905, y: 1320, color: "#416a8b", parents: ["grandhi-lakshmi", "grandhi-ramji"], spouse: null },
  { id: "vetcha-hrudaya", name: "Vetcha Hrudaya", relation: "1st Child", generation: 6, x: 5205, y: 1320, color: "#416a8b", parents: ["vetcha-kishore", "vvk-ratnamani"], spouse: null },
  { id: "vetcha-tanmaya", name: "Vetcha Tanmaya", relation: "2nd Child", generation: 6, x: 5505, y: 1320, color: "#416a8b", parents: ["vetcha-kishore", "vvk-ratnamani"], spouse: null },
  { id: "pedamallu-lohitha", name: "Pedamallu Lohitha", relation: "1st Child", generation: 6, x: 5805, y: 1320, color: "#416a8b", parents: ["sivva-nirmala", "sivva-kamalakar-rao"], spouse: "pedamallu-sai-kalyan" },
  { id: "pedamallu-sai-kalyan", name: "Pedamallu Sai Kalyan", relation: "Spouse of 1st Child", generation: 6, generationLabel: "Son-In-Law", x: 6105, y: 1320, color: "#416a8b", parents: [], spouse: "pedamallu-lohitha" },
  { id: "sivva-abhishek", name: "Sivva Abhishek", relation: "2nd Child", generation: 6, x: 6405, y: 1320, color: "#416a8b", parents: ["sivva-nirmala", "sivva-kamalakar-rao"], spouse: null },
  { id: "poli-venkata-vinaykanth-gen6", name: "Polisetty Venkata Vinaykanth", relation: "1st Child", generation: 6, x: 6705, y: 1320, color: "#416a8b", parents: ["poli-krishnaveni-sarojini-child", "poli-vrk-rao-soninlaw"], spouse: null },
  { id: "poli-manga-harshini-gen6", name: "Polisetty Manga Harshini", relation: "2nd Child", generation: 6, x: 7005, y: 1320, color: "#416a8b", parents: ["poli-krishnaveni-sarojini-child", "poli-vrk-rao-soninlaw"], spouse: null },
  { id: "nudurupati-pranav", name: "Nudurupati Pranav", relation: "1st Child", generation: 6, x: 7305, y: 1320, color: "#416a8b", parents: ["nudurupati-ramachandraji", "nudurupati-madhavi"], spouse: null },
  { id: "nudurupati-koushal", name: "Nudurupati Koushal", relation: "2nd Child", generation: 6, x: 7605, y: 1320, color: "#416a8b", parents: ["nudurupati-ramachandraji", "nudurupati-madhavi"], spouse: null },
  { id: "chopperla-sanjana", name: "Chopperla Sanjana", relation: "1st Child", generation: 6, x: 7905, y: 1320, color: "#416a8b", parents: ["chopperla-kasturi", "chopperla-sree-krishna"], spouse: null },
  { id: "chopperla-srujana", name: "Chopperla Srujana", relation: "2nd Child", generation: 6, x: 8205, y: 1320, color: "#416a8b", parents: ["chopperla-kasturi", "chopperla-sree-krishna"], spouse: null },
  { id: "padmanabhuni-harshith", name: "Padmanabhuni Harshith", relation: "1st Child", generation: 6, x: 8505, y: 1320, color: "#416a8b", parents: ["padmanabhuni-anuradha", "padmanabhuni-sateesh"], spouse: null },
  { id: "padmanabhuni-hasini", name: "Padmanabhuni Hasini", relation: "2nd Child", generation: 6, x: 8805, y: 1320, color: "#416a8b", parents: ["padmanabhuni-anuradha", "padmanabhuni-sateesh"], spouse: null },
  { id: "koppuravuri-yeshwin", name: "Koppuravuri Yeshwin", relation: "1st Child", generation: 6, x: 9105, y: 1320, color: "#416a8b", parents: ["koppuravuri-kanthisri", "koppuravuri-venkateswarulu"], spouse: null },
  { id: "koppuravuri-krithick", name: "Koppuravuri Krithick", relation: "2nd Child", generation: 6, x: 9405, y: 1320, color: "#416a8b", parents: ["koppuravuri-kanthisri", "koppuravuri-venkateswarulu"], spouse: null },
  { id: "liyansh", name: "Liyansh", relation: "1st Child", generation: 6, x: 10005, y: 1320, color: "#416a8b", parents: ["poli-mangasruthi", "prathick-ravi"], spouse: null },
  { id: "pedamallu-lakshmi-krishitha", name: "Pedamallu Lakshmi Krishitha", relation: "1st Child", generation: 7, x: 5955, y: 1650, color: "#9a5a32", parents: ["pedamallu-lohitha", "pedamallu-sai-kalyan"], spouse: null },
];

const fullTreeCanvas = document.querySelector("#fullTreeCanvas");
const fullTreeViewport = document.querySelector("#fullTreeViewport");
const fullTreeScroll = document.querySelector(".full-tree-scroll");
const zoomSlider = document.querySelector("#zoomSlider");
const zoomValue = document.querySelector("#zoomValue");
const zoomOutTree = document.querySelector("#zoomOutTree");
const zoomInTree = document.querySelector("#zoomInTree");
const fitTree = document.querySelector("#fitTree");
const readableTree = document.querySelector("#readableTree");
const generationButtons = document.querySelectorAll("[data-generation]");
let treeScale = 0.7;

function fullMemberY(member) {
  return member.y + (member.generation === 5 ? 120 : 0);
}

function findFullMember(id) {
  return fullMembers.find((member) => member.id === id);
}

function fullInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function fullDisplayGeneration(member) {
  return member.generationLabel || fullGenerationNames[member.generation];
}

function drawFullConnectors() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("full-connector-layer");
  svg.setAttribute("viewBox", "0 0 11200 1900");
  svg.setAttribute("width", "11200");
  svg.setAttribute("height", "1900");
  svg.setAttribute("preserveAspectRatio", "none");

  function cardBox(id) {
    const card = fullTreeCanvas.querySelector(`[data-id="${id}"]`);
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
  fullMembers.forEach((member) => {
    if (!member.spouse) return;
    const spouse = findFullMember(member.spouse);
    if (!spouse) return;
    const key = [member.id, spouse.id].sort().join(":");
    if (spousePairs.has(key)) return;
    spousePairs.add(key);

    const memberBox = cardBox(member.id);
    const spouseBox = cardBox(spouse.id);
    if (!memberBox || !spouseBox) return;
    const junction = coupleJunction(memberBox, spouseBox);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("full-connector", "full-spouse-connector");
    path.setAttribute("d", `M ${junction.leftBox.right} ${junction.y} H ${junction.rightBox.left}`);
    svg.appendChild(path);
  });

  const familyGroups = new Map();
  fullMembers.forEach((child) => {
    if (!child.parents.length) return;
    const key = child.parents.slice().sort().join(":");
    if (!familyGroups.has(key)) familyGroups.set(key, []);
    familyGroups.get(key).push(child);
  });

  const connectorLanes = [];

  function reserveConnectorLane(preferredY, minY, maxY, minX, maxX) {
    if (maxY <= minY) return minY;

    const laneGap = 16;
    const clampedPreferred = Math.min(Math.max(preferredY, minY), maxY);
    const candidates = [clampedPreferred];

    for (let offset = laneGap; offset <= maxY - minY; offset += laneGap) {
      if (clampedPreferred - offset >= minY) candidates.push(clampedPreferred - offset);
      if (clampedPreferred + offset <= maxY) candidates.push(clampedPreferred + offset);
    }

    const chosenY = candidates.find((candidateY) =>
      connectorLanes.every((lane) => {
        const rangesOverlap = minX < lane.maxX + 10 && maxX > lane.minX - 10;
        return !rangesOverlap || Math.abs(candidateY - lane.y) >= laneGap;
      })
    ) ?? clampedPreferred;

    connectorLanes.push({ y: chosenY, minX, maxX });
    return chosenY;
  }

  familyGroups.forEach((children, key) => {
    const parents = key.split(":").map(findFullMember).filter(Boolean);
    if (!parents.length) return;
    const parentBoxes = parents.map((parent) => cardBox(parent.id)).filter(Boolean);
    if (!parentBoxes.length) return;
    const parentJunction = parentBoxes.length > 1 ? coupleJunction(parentBoxes[0], parentBoxes[1]) : null;
    const startX = parentJunction ? parentJunction.x : parentBoxes[0].centerX;
    const startY = parentJunction ? parentJunction.y : parentBoxes[0].bottom + 10;
    const childCenters = children
      .map((child) => {
        const box = cardBox(child.id);
        return box ? { x: box.centerX, y: box.top - 18 } : null;
      })
      .filter(Boolean);
    if (!childCenters.length) return;
    const lowestParentEdge = Math.max(...parentBoxes.map((box) => box.bottom));
    const preferredBusY = Math.min(...childCenters.map((child) => child.y)) - 42;
    const minX = Math.min(startX, ...childCenters.map((child) => child.x));
    const maxX = Math.max(startX, ...childCenters.map((child) => child.x));
    const minimumBusY = lowestParentEdge + 20;
    const maximumBusY = Math.min(...childCenters.map((child) => child.y)) - 18;
    const busY = reserveConnectorLane(
      preferredBusY,
      minimumBusY,
      maximumBusY,
      minX,
      maxX
    );

    const trunk = document.createElementNS("http://www.w3.org/2000/svg", "path");
    trunk.classList.add("full-connector");
    trunk.setAttribute("d", `M ${startX} ${startY} V ${busY} M ${minX} ${busY} H ${maxX}`);
    svg.appendChild(trunk);

    const junction = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    junction.classList.add("full-connector-junction");
    junction.setAttribute("cx", startX);
    junction.setAttribute("cy", busY);
    junction.setAttribute("r", 4);
    svg.appendChild(junction);

    childCenters.forEach(({ x, y }) => {
      const branch = document.createElementNS("http://www.w3.org/2000/svg", "path");
      branch.classList.add("full-connector");
      branch.setAttribute("d", `M ${x} ${busY} V ${y}`);
      svg.appendChild(branch);

      const childJunction = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      childJunction.classList.add("full-connector-junction");
      childJunction.setAttribute("cx", x);
      childJunction.setAttribute("cy", busY);
      childJunction.setAttribute("r", 3.5);
      svg.appendChild(childJunction);
    });
  });

  fullTreeCanvas.prepend(svg);
}

function renderFullTree() {
  fullMembers.forEach((member) => {
    const card = document.createElement("article");
    card.className = "full-person-card";
    card.dataset.id = member.id;
    card.style.left = `${member.x}px`;
    card.style.top = `${fullMemberY(member)}px`;
    card.style.setProperty("--member-color", fullGenerationColors[member.generation]);
    card.innerHTML = `
      <span class="full-initials">${fullInitials(member.name)}</span>
      <span>
        <strong>${member.name}</strong>
        <small>${fullDisplayGeneration(member)} | ${member.relation}</small>
      </span>
    `;
    fullTreeCanvas.appendChild(card);
  });

  drawFullConnectors();
}

function setViewMode(mode) {
  readableTree.classList.toggle("active", mode === "readable");
  fitTree.classList.toggle("active", mode === "overview");
}

function applyTreeScale(scale, options = {}) {
  const previousScale = treeScale || 1;
  const focusX = options.focusX ?? (fullTreeScroll.scrollLeft + fullTreeScroll.clientWidth / 2) / previousScale;
  const focusY = options.focusY ?? (fullTreeScroll.scrollTop + fullTreeScroll.clientHeight / 2) / previousScale;

  treeScale = Math.min(Math.max(scale, 0.2), 1.5);
  fullTreeCanvas.style.setProperty("--tree-scale", treeScale);
  fullTreeViewport.style.setProperty("--scaled-width", `${11200 * treeScale}px`);
  fullTreeViewport.style.setProperty("--scaled-height", `${1900 * treeScale}px`);
  zoomSlider.value = Math.round(treeScale * 100);
  zoomValue.textContent = `${Math.round(treeScale * 100)}%`;
  requestAnimationFrame(() => {
    const left = Math.max(focusX * treeScale - fullTreeScroll.clientWidth / 2, 0);
    const top = Math.max(focusY * treeScale - fullTreeScroll.clientHeight / 2, 0);
    fullTreeScroll.scrollTo({ top, left, behavior: options.behavior || "auto" });
  });
}

function fitFullTree() {
  const availableWidth = fullTreeScroll.clientWidth - 24;
  const availableHeight = fullTreeScroll.clientHeight - 24;
  const scale = Math.min(availableWidth / 11200, availableHeight / 1900, 1.5);
  setViewMode("overview");
  applyTreeScale(scale, { focusX: 3500, focusY: 620 });
}

function showReadableTree() {
  setViewMode("readable");
  applyTreeScale(0.7, { focusX: 900, focusY: 390, behavior: "smooth" });
}

function stepTreeScale(direction) {
  setViewMode("readable");
  applyTreeScale(treeScale + direction * 0.1, { behavior: "smooth" });
}

function focusGeneration(generation) {
  const generationMembers = fullMembers.filter((member) => member.generation === generation);
  if (!generationMembers.length) return;

  const minX = Math.min(...generationMembers.map((member) => member.x));
  const maxX = Math.max(...generationMembers.map((member) => member.x + 250));
  const minY = Math.min(...generationMembers.map(fullMemberY));
  const rowWidth = (maxX - minX) * treeScale;
  const focusX = rowWidth <= fullTreeScroll.clientWidth
    ? (minX + maxX) / 2
    : minX + fullTreeScroll.clientWidth / (2 * treeScale);

  generationButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.generation) === generation);
  });

  fullTreeScroll.scrollTo({
    left: Math.max(focusX * treeScale - fullTreeScroll.clientWidth / 2, 0),
    top: Math.max((minY + 70) * treeScale - fullTreeScroll.clientHeight / 2, 0),
    behavior: "smooth",
  });
}

renderFullTree();
showReadableTree();

zoomSlider.addEventListener("input", () => {
  setViewMode("readable");
  applyTreeScale(Number(zoomSlider.value) / 100);
});
readableTree.addEventListener("click", showReadableTree);
fitTree.addEventListener("click", fitFullTree);
zoomOutTree.addEventListener("click", () => stepTreeScale(-1));
zoomInTree.addEventListener("click", () => stepTreeScale(1));
generationButtons.forEach((button) => {
  button.addEventListener("click", () => focusGeneration(Number(button.dataset.generation)));
});

window.previewFullMembers = fullMembers;
window.previewGenerationNames = fullGenerationNames;
window.previewGenerationColors = fullGenerationColors;
