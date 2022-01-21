// characters, spells and sites
// characters are of the form {name:, numberOfTimesMentionedInThe7Books}
// spells are of the form {incantation/name:, description}
// sites are strings

// there are many so scroll down hard!

const characters = [
    { name: 'Harry Potter', mentions: 18956 },
    { name: 'Ron Weasley', mentions: 6464 },
    { name: 'Hermione Granger', mentions: 5486 },
    { name: 'Albus Dumbledore', mentions: 2421 },
    { name: 'Rubeus Hagrid', mentions: 2024 },
    { name: 'Severus Snape', mentions: 1956 },
    { name: 'Voldemort', mentions: 1797 },
    { name: 'Sirius Black', mentions: 1471 },
    { name: 'Draco Malfoy', mentions: 1198 },
    { name: 'Fred Weasley', mentions: 920 },
    { name: 'Remus Lupin', mentions: 864 },
    { name: 'George Weasley', mentions: 821 },
    { name: 'Neville Longbottom', mentions: 810 },
    { name: 'Arthur Weasley', mentions: 780 },
    { name: 'Ginny Weasley', mentions: 771 },
    { name: 'Minerva McGonagall', mentions: 770 },
    { name: 'Molly Weasley', mentions: 722 },
    { name: 'Dolores Umbridge', mentions: 637 },
    { name: 'Alastor Moody', mentions: 583 },
    { name: 'Vernon Dursley', mentions: 530 },
    { name: 'Cornelius Fudge', mentions: 493 },
    { name: 'Peter Pettigrew', mentions: 486 },
    { name: 'Dobby', mentions: 469 },
    { name: 'Dudley Dursley', mentions: 467 },
    { name: 'Horace Slughorn', mentions: 432 },
    { name: 'Percy Weasley', mentions: 426 },
    { name: 'Luna Lovegood', mentions: 356 },
    { name: 'Cedric Diggory', mentions: 353 },
    { name: 'Petunia Dursley', mentions: 314 },
    { name: 'Kreacher', mentions: 312 },
    { name: 'Bill Weasley', mentions: 302 },
    { name: 'Barty Crouch Sr', mentions: 295 },
    { name: 'Argus Filch', mentions: 288 },
    { name: 'Viktor Krum', mentions: 277 },
    { name: 'Gilderoy Lockhart', mentions: 262 },
    { name: 'Sybill Trelawney', mentions: 262 },
    { name: 'Fleur Delacour', mentions: 258 },
    { name: 'Lucius Malfoy', mentions: 249 },
    { name: 'Ludo Bagman', mentions: 246 },
    { name: 'Nymphadora Tonks', mentions: 242 },
    { name: 'Gregory Goyle', mentions: 228 },
    { name: 'Vincent Crabbe', mentions: 224 },
    { name: 'Bellatrix Lestrange', mentions: 220 },
    { name: 'Cho Chang', mentions: 215 },
    { name: 'Dean Thomas', mentions: 212 },
    { name: 'Oliver Wood', mentions: 208 },
    { name: 'Hedwig', mentions: 204 },
    { name: 'James Potter', mentions: 190 },
    { name: 'Rita Skeeter', mentions: 188 },
    { name: 'Seamus Finnigan', mentions: 179 }
];

const spells = [
    { name: 'Aberto', description: 'Opens locked doors' },
    { name: 'Accio', description: 'Summons objects' },
    { name: 'Aguamenti', description: 'Summons water' },
    { name: 'Alohomora', description: 'Unlocks objects' },
    { name: 'Anapneo', description: "Clears someone's airway" },
    {
      name: 'Aparecium',
      description: 'Reveals secret, written messages'
    },
    {
      name: 'Apparate',
      description: ' A non-verbal transportation spell that allows a witch or wizard to instantly travel on the spot and appear at another location (disapparate is the opposite)'
    },
    { name: 'Ascendio', description: 'Propells someone into the air' },
    {
      name: 'Avada Kedavra',
      description: 'Also known as The Killing Curse, the most evil spell in the Wizarding World; one of three Unforgivable Curses; Harry Potter is the only known witch or wizard to survive it'
    },
    { name: 'Avis', description: 'Conjures a small flock of birds' },
    {
      name: 'Bat-Bogey Hex',
      description: "Turns the target's boogers into bats"
    },
    { name: 'Bombardo', description: 'Creates an explosion' },
    { name: 'Brackium Emendo', description: 'Heals broken bones' },
    {
      name: 'Capacious Extremis',
      description: "Known as the Extension Charm, it's a complicated spell that can greatly expand or extend the capacity of an object or space without affecting it externally"
    },
    {
      name: 'Confundo',
      description: 'Known as the Confundus Charm, it causes confusion of the target'
    },
    {
      name: 'Conjunctivitis Curse',
      description: 'Affects the eyes and sight of a target'
    },
    {
      name: 'Crinus Muto',
      description: 'Changes hair color and style'
    },
    {
      name: '*Crucio',
      description: 'One of three Unforgivable Curses, it causes unbearable pain in the target'
    },
    {
      name: 'Diffindo',
      description: 'Used to precisely cut an object'
    },
    {
      name: 'Disillusionment Charm',
      description: 'Causes the target to take on the appearance of its surroundings'
    },
    {
      name: 'Disapparate',
      description: 'A non-verbal transportation spell that allows a witch or wizard to instantly travel on the spot and leave for another location (apparate is the opposite)'
    },
    {
      name: 'Engorgio',
      description: 'Causes rapid growth in the targeted object'
    },
    { name: 'Episkey', description: 'Heals minor injuries' },
    {
      name: 'Expecto patronum',
      description: 'The Patronus Charm is a powerful projection of hope and happiness that drives away Dementors; a corpeal Patronus takes the the respective animal form of the caster, while a non-corpeal appears as a wisp of light; at 13, Harry Potter was the youngest known witch or wizard to prouduce a corpeal Patronus'
    },
    {
      name: 'Erecto',
      description: 'Allows a witch or wizard to build a structure, like a tent'
    },
    { name: 'Evanesco', description: 'Vanishes objects' },
    {
      name: 'Expelliarmus',
      description: "Forces an opponent to drop whatever's in their possession"
    },
    {
      name: 'Ferula',
      description: 'A healing charm that conjures wraps and bandages for wounds'
    },
    {
      name: 'Fidelius Charm',
      description: 'A complex charm that conceals a secret into the soul of a chosen "Secret Keeper;" if a location is the subject of concealment, it becomes undetectable to others'
    },
    {
      name: 'Fiendfyre Curse',
      description: 'Conjures destructive, enormous enchanted flames'
    },
    {
      name: 'Finite Incantatem',
      description: "A general counter-spell that's used to reverse or counter already cast charms"
    },
    {
      name: 'Furnunculus Curse',
      description: 'A jinx that causes a breakout of boils or pimples'
    },
    { name: 'Geminio', description: 'Duplicates objects' },
    {
      name: 'Glisseo',
      description: 'Transforms a staircase into a slide'
    },
    {
      name: 'Homenum Revelio',
      description: 'Reveals the presence of another person'
    },
    {
      name: 'Homonculus Charm',
      description: "Detects anyone's true identity and location on a piece of parchment; used to create the Marauder's Map"
    },
    { name: 'Immobulus', description: 'Immobilises living targets' },
    {
      name: 'Impedimenta',
      description: 'A temporary jinx that slows the movement of the target'
    },
    { name: 'Incarcerous', description: 'Conjures ropes' },
    {
      name: '*Imperio',
      description: 'One of the three Unforgivable Curses, it places the target under the complete control of the caster'
    },
    { name: 'Impervius', description: 'Makes an object waterproof' },
    { name: 'Incendio', description: 'Conjures flames' },
    {
      name: 'Langlock',
      description: "Causes the target's tongue to stick to the roof of their mouth"
    },
    {
      name: 'Legilimens',
      description: "Invading or navigating another's mind"
    },
    {
      name: 'Levicorpus',
      description: 'Levitates the target by their ankle'
    },
    {
      name: 'Locomotor Mortis',
      description: "The Leg-Locker curse bounds the target's legs"
    },
    { name: 'Lumos', description: "Illuminates the caster's wand" },
    {
      name: 'Morsmordre',
      description: "Conjures and projects Lord Voldemort's Dark Mark"
    },
    {
      name: 'Mucus Ad Nauseam',
      description: 'Inflicts an extreme runny nose or cold'
    },
    {
      name: 'Muffliato',
      description: "Creates a buzzing sound in the target's ears to prevent eavesdropping"
    },
    {
      name: 'Nox',
      description: "Reverses the lumos charm, extinguishing a wand's light"
    },
    { name: 'Obliviate', description: "Erases the target's memory" },
    { name: 'Obscuro', description: 'Conjures a blindfold' },
    { name: 'Oculus Reparo', description: 'Repairs eyeglasses' },
    {
      name: 'Oppugno',
      description: 'Directs an object or person to attack a victim'
    },
    {
      name: 'Petrificus Totalus',
      description: 'Temporarily freezes or petrifies the body of the target'
    },
    {
      name: 'Periculum',
      description: 'Conjures flares/red sparksPiertotum'
    },
    {
      name: 'Locomotor',
      description: 'Incantation used to bring to life inanimate objects and artifacts'
    },
    {
      name: 'Protean Charm',
      description: 'Links objects together for better communication'
    },
    {
      name: 'Protego',
      description: 'Casts an invisible shield around the caster, protecting against spells and objects (except for The Killing Curse)'
    },
    { name: 'Reducto', description: 'Reduces the target to pieces' },
    {
      name: 'Reducio',
      description: 'Shrinks an enlarged object to its regular size'
    },
    {
      name: 'Renneverate',
      description: 'Awakens or revives the target'
    },
    {
      name: 'Reparifors',
      description: 'Heals magical ailments like poisoning or paralysis'
    },
    { name: 'Reparo', description: 'Fixes broken objects' },
    {
      name: 'Rictusempra',
      description: 'A charm that disarms an opponent by tickling them'
    },
    {
      name: 'Riddikulus',
      description: 'Used to defeat a Boggart, the charm allows the scary creature to assume a comedic form, disarming it'
    },
    { name: 'Scourgify', description: 'Cleans objects' },
    {
      name: 'Sectumsempra',
      description: 'Inflicts severe lacerations and haemorrhaging on the target'
    },
    { name: 'Serpensortia', description: 'Conjures a live snake' },
    { name: 'Silencio', description: 'Silences the target' },
    {
      name: 'Sonorus',
      description: "Amplifies the witch or wizard's voice"
    },
    { name: 'Spongify', description: 'Softens the target' },
    {
      name: 'Stupefy',
      description: 'The Stunning spell freezes objects and renders living targets unconscious'
    },
    {
      name: 'Tarantallegra',
      description: 'Aimed at the legs, causes uncontrollable dancing movement'
    },
    {
      name: 'Unbreakable Vow',
      description: 'A magically binding contract that results in the death of whoever breaks it'
    },
    {
      name: 'Wingardium Leviosa',
      description: `Causes an object to levitate; but remember what Hermione said: "It’s Wing-gar-dium Levi-o-sa, make the 'gar' nice and long.’"`
    }
];

const sites = [
    'Hogwarts quidditch pitch',
    'Gringotts bank',
    'Gryffindor dormitory',
    'Slytherin\'s dundeon',
    'The Room of Requirements',
    'Ministry of Magic entrance toilets',
    'Diagon Alley',
    'The Forbidden Forest',
    'The Chamber of Secrets',
    'The golden trio\'s on-the-run camp',
    '12 Grimmauld Place',
    'Cupboard under the stairs',
    'Malfoy mansion',
    'Hagrid\'s hut',
    'Hogsmead',
    'Dumbledore\'s office',
    'Minister of Magic\'s office',
    'Ministry of Magic trial room',
    'Hall of Prophecy',
    'Astronomy tower',
    'Number 4 Privet Drive',
    'Xenophilius\' house',
    'Azkaban prison',
    'Great Hall'
]


  ////////////////////////////////////////////////////////////////////////////////////////////////////

  /* variables declared */

  ////////////////////////////////////////////////////////////////////////////////////////////////////




// manipulate mentions to reduce bias
// naturally, Harry is mentioned too often so
characters[0].mentions /= 2;
// reduce the bias a bit more! square root all mention counts
for (let i = 0; i < characters.length; i++) {
  characters[i].mentions = Math.ceil(Math.sqrt(characters[i].mentions));
}
// count total mentions
const totalMentions = characters.reduce((accumulator, currentCharacter) => accumulator + currentCharacter.mentions, 0);
// record mention range of each character
for (let i = 0, mention = 0; i < characters.length; i++) {
  mention += characters[i].mentions;
  characters[i].lastMention = mention;
}

function generateRandomDuel() {
  // choose a random site
  const site = sites[Math.floor(Math.random() * sites.length)];
  // get 2 random mentions that reference unique characters
  let randomMentions = [0, 0];
  do {
    for (let i = 0; i < 2; i++) {
      randomMentions[i] = Math.ceil(Math.random() * totalMentions);
    }
  } while (getCharacterIndexAtMention(randomMentions[0]) === getCharacterIndexAtMention(randomMentions[1]));
  // get the characters at those mentions
  const duellers = randomMentions.map(mention => characters[getCharacterIndexAtMention(mention)]);


  // choose 2 random spells for duellers, allowing both to use same spell
  duellers[0].spell = spells[Math.floor(Math.random() * spells.length)];
  duellers[1].spell = spells[Math.floor(Math.random() * spells.length)];

  // start making message
  let message = `Site: ${site}\n`;
  for (dueller of duellers) {
    message = message + `${dueller.name} casts ${dueller.spell.name}\n`;
  }

  // determine winner
  const winner = Math.floor(Math.random() * 2);

  message = message + `${duellers[winner].name} Wins!`;

  // and finally
  console.log(message);

  return {
    site,
    duellers,
    winner
  }
}

generateRandomDuel();

function getCharacterIndexAtMention(mention) {
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].lastMention >= mention) {
      return i;
    }
  }
}