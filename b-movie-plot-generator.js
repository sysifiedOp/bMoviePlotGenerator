function selectron(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const mainCharacterArray = ["A very intoxicated Wings Hauser", "An elderly Charles Bronson", "Chuck Norris", "Linda Blair",
"John De Hart", "Reverend Estus Pirkle", "Golddigger the annoying robot", "Leo Fong", "The brawny, brainless Barbarian Brother Peter Paul", "The brawny, brainless Barbarian Brother David Paul",
 "Robert 'The Exterminator' Ginty", "Divine the 70s drag queen", "Former wrestler Roddy 'Rowdy' Piper",
"Ex football player Brian 'The Bozz' Bosworth", "Autoerotic asphyxiation casualty David Carradine", "An aging and no longer cute Corey Haim", "A smirking Dolph Lundgren",
"Rudy Ray Moore of 'Dolemite' fame", "Neil Breen", "A completely unknown actor or actress who has never been in other movies", "Lawnmower Man Jeff Fahey", "Pierce Brosnan", "A very young Nicholas Cage",
"Lance Henrikson (Bishop in the Alien movies)", "Julie Strain", "Rutger Hauer", "Forgotten Brat Pack member Anthony Michael Hall", "Bruce Campbell", "Carl Weathers", "Lou Diamond Phillips",
"Shaft star Richard Roundtree"];

const heroRoleArray = ["a caucasian rikshaw driver", "a loose canon cop", "a valiant warrior who is also long lost royalty", "a brutal barbarian", "a secret agent", "a child who can change shapes with a magical glass harmonica and privacy",
"a hard-nosed private eye", "a cyborg", "an elite gymnist turned secret agent", "an average person out for revenge", "a martial arts master", "an alien dressed like Superman who sings children's songs", "an extraterrestrial artificial intelligence with godlike powers",
"a high school brat", "a college brat", "a professional criminal looking to make one last score", "a bounty hunter", "an ex-cop", "a former member of an elite special forces unit", "the lead singer for a rock band from outer space", "a struggling musician",
"a loser trying to learn magic to get revenge against bullies", "a badass suffering from a fatal disease with surprisingly few symptoms", "a pastor trying to convert the masses by preaching damnation",
 "doubling up for twice the action by playing identical twin martial artists"];

const settingArray = ["in a post apolcalyptic wasteland", "in a crime-ridden metropolis", "in a 'tropical jungle' that looks suspiciously like somewhere in California", 
"in Los Angeles", "in a creepy motel in the middle of nowhere", "in a little cabin and the surrounding forest", "in a brothel", "in a generic bar with dancing strippers who look better with their clothes on",
"in a fantasy world that looks suspiciously like the Nevada desert", "in mideval Europe", "in a dark future run by greedy Mega Corporations", "on a deserted tropical island", "in an abandoned mansion",
"in a small town", "in a psychiatric institution with a very poor staffing ratio", "in a random third world country", "in a spaceship", "in a high school", "in the Nevada desert", "on a college campus",
"in an 'office building' that looks like the director's grandma's house"];

const villainArray = ["Michael Ironside", "Bladerunner star Brion James", "Divine the 70s drag queen", "Rutget Hauer", "Richard Lynch", "An unknown actor or actress who has never been in other movies",
"Jeffrey Combs", "An evilly smirking Dolph Lundgren", "Cobra Kai's Martin Krove", "Tony 'The Candyman' Todd", "A very young and boyish James Spader", "Robert Z'Dar", "Matthais Hues", "Clint Howard", "Gene Simmons", "Rob Lowe",
"Young James Earl Jones"];

const villainPlotArray = ["is trying to take over the city with a gang of creeps", "is a necromancer trying to take over the world with an army of the undead", "is planning to launch a terrorist attack in the suburbs",
"is a terrorist trying to poison the water supply", "is leading a cult of werewolves that is having orgies and terrorizing the local popluace", "is a murderous masked slasher", "has enslaved our protagonists friends and family", "is turning unwitting victims into plant monsters",
"is running an evil circus", "is leading a satanic cult and planning to sacrifice our protagonist's significant other", "is a corrupt police captain masterminding a grand political conspiracy",
"is leading an evil corporation bent on taking over the government", "is heading an evil martial arts dojo and launching attacks on our protagonist", "is a serial killer whose murder spree has baffled the local police",
"is a murderous ice cream man", "is the leader of a band of killer clowns", "is an alien drug dealer", "is leading an alien invasion of the planet", "is the head of a family of cannibals", "is leading an evil band of wasteland rogues", "is controlling an army of evil robots",
"is controlling a caderie of murderous puppets", "has secretly taken over a psychiatric institution and is pretending to be the head doctor", "leading a satanic biker gang", "is a vampire posing as a nice, rich person", "is conducting secret Nazi black magic experiments"];

const sidekickArray = ["Danny Trejo", "Boon the baboon", "Jeffrey Combs", "Vanity", "Monique Gabrielle", "A nameless foreign actor or actress", "Mink Stole", "Linnea Quigley", "Julie Strain", "A very, very, very intoxicated Wings Hauser",
"Sybil Danning", "Stephen Geoffreys (Evil Ed in Fright Night)", "Mako Iwamatsu (narrator of Conan the Barbarian)", "Sandahl Bergman (Valeria in Conan the Barbarian)", "Curtis 'Booger' Armstrong", "Donald 'Ogre' Gibb"  ];

const sidekickRoleArray = ["providing sex appeal, repeatedly stripping throughout the film", "playing 'The Shimmy Slide' on stage", "incompetently fighting at our protagonists side", "providing bad advice and pathetic attempts at comic relief",
"cowering in fear", "getting kidnapped by the villain", "getting raped by the villain", "wandering around in an out-of-character drunken stupor", "mostly staying out of the way", "knowing the script better than our lead",
"providing genius computer support although bound to a wheelchair"];

const adversityArray = ["hordes of zombies", "gangs of wasteland mutants", "gangs of antisocial punkrock creeps wearing studded leather biker jackets", "an army of Nazis", "AK-47 armed Viet Cong", "a russian terrorist cell", 
"the terrors of an abandoned house laden with death traps", "an alien invasion force"];

const winningStrategyArray = ["going into a blood fueled frenzy, brutally slaughtering all the adversaries", "blowing up the villain with a rocket launcher", "driving a stake through the villain's heart", "setting off a large bomb blast, killing our villain and cadre",
"pushing our villain off a very high precipice", "publicizing all the wrong doing, ensuring that all the bad guys go to jail", "going in guns blazing without a clear plan", "infiltrating the enemy and launching a surprise attack",
"proving themselves to be the filthiest human being and murdering the competition", "turning everyone into nymphomaniacs by giving them concussions", "chopping off a lot of heads"];

const happilyEverAfterArray = ["is surrounded by foes, lets out a battle cry, and charges into one last glorious battle", "is relieved from duty when the police show up to clean up the last of the mess", "gets onto a spaceship and returns to the home planet",
"saves the day and gets the girl", "dies a martyr's death, inspiring friends to rise up and defeat the remaining enemies", "saves the day and goes off into the sunset to fight injustice elsewhere", "saves the day and then goes back to work at a menial job",
"goes crazy and is committed to an insane asylum"];

const sidekickFateArray = ["is killed by the villain, giving our hero the grim resolve needed to overcome unbeatable odds", "is wounded in the final battle, but is seen smiling and cracking jokes while being loaded up into an ambulance", 
"turns out to be completely ineffectual, but shows up at the end with a lame joke", "gives the protagonist a romantic kiss after the final battle, showing us that their journey together has just begun"];

const mainCharacter = selectron(mainCharacterArray);
const heroRole = selectron(heroRoleArray);
const setting = selectron(settingArray);
const villain = selectron(villainArray);
const villainPlot = selectron(villainPlotArray);
const sidekick = selectron(sidekickArray);
const sidekickRole = selectron(sidekickRoleArray);
const adversity = selectron(adversityArray);
const winningStrategy = selectron(winningStrategyArray);
const happilyEverAfter = selectron(happilyEverAfterArray);
const sidekickFate = selectron(sidekickFateArray);

console.log(`${mainCharacter} is ${heroRole} ${setting}.
${villain} ${villainPlot}.  
Our protagonist is aided by ${sidekick} who offers support by ${sidekickRole}.
Together, they overcome ${adversity}.  
Eventually, they thwart our villain's plans by ${winningStrategy}. 
Our sidekick ${sidekickFate}.  
The protagonist ${happilyEverAfter}.`);