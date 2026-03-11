import type { Translations } from "./en";

// Italian translation — Traduzione italiana
const it: Translations = {
  nav: {
    home: "Home",
    prayers: "Preghiere",
    rosary: "Rosario",
    mercy: "Opere di Misericordia",
    gallery: "Galleria",
    sanJose: "San Giuseppe",
  },
  hero: {
    tagline: "Vita in Cristo",
    subtitle: "La Vita in Cristo",
    description:
      "Un luogo di preghiera, fede e devozione. Trova pace nella presenza del Signore.",
    ctaPrayers: "Scopri le Preghiere",
    ctaRosary: "Prega il Rosario",
    verse:
      '"Io sono la via, la verità e la vita." — Giovanni 14:6',
  },
  prayers: {
    title: "Preghiere Sacre",
    subtitle:
      "Avvicinati a Dio attraverso queste eterne preghiere della Chiesa",
    ourFather: {
      title: "Il Padre Nostro",
      subtitle: "Preghiera del Signore",
      text: `Padre nostro, che sei nei cieli,
sia santificato il tuo nome;
venga il tuo regno;
sia fatta la tua volontà, come in cielo così in terra.
Dacci oggi il nostro pane quotidiano;
rimetti a noi i nostri debiti
come noi li rimettiamo ai nostri debitori;
e non ci indurre in tentazione,
ma liberaci dal male.
Amen.`,
    },
    hailMary: {
      title: "Ave Maria",
      subtitle: "Saluto Angelico",
      text: `Ave Maria, piena di grazia,
il Signore è con te.
Tu sei benedetta fra le donne
e benedetto è il frutto del tuo seno, Gesù.
Santa Maria, Madre di Dio,
prega per noi peccatori,
adesso e nell'ora della nostra morte.
Amen.`,
    },
    gloryBe: {
      title: "Gloria al Padre",
      subtitle: "Dossologia",
      text: `Gloria al Padre,
e al Figlio,
e allo Spirito Santo.
Come era nel principio,
ora e sempre
nei secoli dei secoli.
Amen.`,
    },
    apostlesCreed: {
      title: "Credo degli Apostoli",
      subtitle: "Il Credo",
      text: `Credo in Dio, Padre onnipotente,
Creatore del cielo e della terra.
Credo in Gesù Cristo,
suo unico Figlio, nostro Signore,
il quale fu concepito di Spirito Santo,
nacque da Maria Vergine,
patì sotto Ponzio Pilato,
fu crocifisso, morì e fu sepolto;
discese agli inferi;
il terzo giorno risuscitò da morte;
salì al cielo,
siede alla destra di Dio Padre onnipotente.
Di là verrà a giudicare i vivi e i morti.
Credo nello Spirito Santo,
la santa Chiesa cattolica,
la comunione dei santi,
la remissione dei peccati,
la risurrezione della carne,
la vita eterna.
Amen.`,
    },
    holySpirit: {
      title: "Preghiera allo Spirito Santo",
      subtitle: "Vieni, Spirito Santo",
      text: `Vieni, Spirito Santo,
riempi i cuori dei tuoi fedeli
e accendi in essi il fuoco del tuo amore.
Manda il tuo Spirito e tutto sarà creato,
e rinnoverai la faccia della terra.
O Dio, che hai istruito i cuori dei tuoi fedeli
con la luce dello Spirito Santo,
concedici, per lo stesso Spirito,
di avere sempre il gusto di ciò che è retto
e di godere sempre della sua consolazione.
Per Cristo nostro Signore.
Amen.`,
    },
    magnificat: {
      title: "Il Magnificat",
      subtitle: "Cantico di Maria — Luca 1:46-55",
      text: `L'anima mia magnifica il Signore
e il mio spirito esulta in Dio, mio salvatore,
perché ha guardato l'umiltà della sua serva.
D'ora in poi tutte le generazioni mi chiameranno beata.
Grandi cose ha fatto in me l'Onnipotente
e Santo è il suo nome;
di generazione in generazione la sua misericordia
si stende su quelli che lo temono.
Ha spiegato la potenza del suo braccio,
ha disperso i superbi nei pensieri del loro cuore;
ha rovesciato i potenti dai troni,
ha innalzato gli umili;
ha ricolmato di beni gli affamati,
ha rimandato a mani vuote i ricchi.
Ha soccorso Israele, suo servo,
ricordandosi della sua misericordia,
come aveva promesso ai nostri padri,
ad Abramo e alla sua discendenza, per sempre.
Amen.`,
    },
  },
  rosary: {
    title: "Il Santo Rosario",
    subtitle:
      "Medita sui misteri della vita di Cristo attraverso questa antica preghiera",
    intro:
      "Il Rosario è una potente preghiera che ci unisce a Maria e ci porta a Cristo. Ogni serie di misteri ci invita a contemplare momenti chiave della vita di Gesù.",
    mysteries: {
      joyful: {
        name: "Misteri Gaudiosi",
        day: "Lunedì e Sabato",
        color: "from-pink-900 to-rose-800",
        items: [
          {
            name: "L'Annunciazione",
            meditation: "Contempliamo il momento in cui l'angelo Gabriele annuncia a Maria che sarà la Madre del Salvatore. Meditiamo sul suo umile «sì» alla volontà di Dio.",
            verse: '"Rallegrati, piena di grazia, il Signore è con te." — Luca 1:28',
          },
          {
            name: "La Visitazione",
            meditation: "Maria, portando Gesù in grembo, visita la cugina Elisabetta. La presenza di Gesù riempie di gioia e di Spirito Santo la casa di Zaccaria.",
            verse: '"A che cosa devo che la madre del mio Signore venga da me?" — Luca 1:43',
          },
          {
            name: "La Natività",
            meditation: "Contempliamo il Figlio di Dio che si fa piccolo, nato in una mangiatoia. Lui è la luce del mondo venuta ad illuminare le nostre tenebre.",
            verse: '"Oggi nella città di Davide è nato per voi un Salvatore, che è il Cristo Signore." — Luca 2:11',
          },
          {
            name: "La Presentazione al Tempio",
            meditation: "Maria e Giuseppe offrono Gesù al Padre nel tempio. Simeone riconosce il Salvatore promesso e profetizza la sua missione universale.",
            verse: '"Egli è qui per la caduta e la risurrezione di molti in Israele." — Luca 2:34',
          },
          {
            name: "Il Ritrovamento nel Tempio",
            meditation: "Per tre giorni Maria e Giuseppe cercano Gesù con angoscia. Lo trovano nella casa del suo Padre, già compiendo la sua missione divina.",
            verse: '"Non sapevate che io devo occuparmi delle cose del Padre mio?" — Luca 2:49',
          },
        ],
      },
      sorrowful: {
        name: "Misteri Dolorosi",
        day: "Martedì e Venerdì",
        color: "from-red-950 to-red-900",
        items: [
          {
            name: "L'Agonia nel Giardino",
            meditation: "Gesù suda sangue nel Getsemani, portando il peso di tutti i nostri peccati. Il suo amore per il Padre e per noi lo sostiene nell'ora più buia.",
            verse: '"Padre, se vuoi, allontana da me questo calice! Tuttavia non sia fatta la mia, ma la tua volontà." — Luca 22:42',
          },
          {
            name: "La Flagellazione",
            meditation: "Il corpo di Gesù viene lacerato dalle flagellazioni. Con ogni colpo porta le nostre malattie e guarisce le ferite del peccato.",
            verse: '"Egli è stato trafitto per i nostri delitti, schiacciato per le nostre iniquità." — Isaia 53:5',
          },
          {
            name: "La Coronazione di Spine",
            meditation: "I soldati coronano Gesù con le spine, beffandosi della sua regalità. Egli sopporta l'umiliazione con mitezza e infinito amore.",
            verse: '"Gli intrecciarono una corona di spine e gliela posero sul capo." — Matteo 27:29',
          },
          {
            name: "La Via Crucis",
            meditation: "Gesù porta la croce per le vie di Gerusalemme, cadendo più volte. Il suo amore per noi è più forte di qualsiasi dolore.",
            verse: '"Portando la croce, uscì verso il luogo detto del Cranio." — Giovanni 19:17',
          },
          {
            name: "La Crocifissione",
            meditation: "Sulla croce, Gesù offre la sua vita per amore di noi. Con le sue ultime parole ci affida a Maria e perdona tutti i peccatori.",
            verse: '"Padre, perdona loro, perché non sanno quello che fanno." — Luca 23:34',
          },
        ],
      },
      glorious: {
        name: "Misteri Gloriosi",
        day: "Mercoledì e Domenica",
        color: "from-amber-900 to-yellow-800",
        items: [
          {
            name: "La Risurrezione",
            meditation: "All'alba del terzo giorno, Cristo risorge vittorioso sulla morte. Questo è il fondamento della nostra fede e la fonte della nostra speranza.",
            verse: '"Perché cercate tra i morti colui che è vivo? Non è qui, è risorto." — Luca 24:5-6',
          },
          {
            name: "L'Ascensione",
            meditation: "Gesù ascende al cielo davanti ai suoi discepoli, promettendo di inviare lo Spirito Santo e di prepararci un posto presso il Padre.",
            verse: '"Questo Gesù, che è stato di tra voi assunto in cielo, verrà allo stesso modo." — Atti 1:11',
          },
          {
            name: "La Pentecoste",
            meditation: "Lo Spirito Santo scende su Maria e gli Apostoli a Pentecoste. La Chiesa nasce piena di fuoco e di grazia divina.",
            verse: '"Furono tutti pieni di Spirito Santo e cominciarono a parlare in altre lingue." — Atti 2:4',
          },
          {
            name: "L'Assunzione di Maria",
            meditation: "Al termine della sua vita terrena, Maria viene assunta in cielo in corpo e anima. Ella ci precede nella gloria che tutti speriamo di raggiungere.",
            verse: '"Un segno grandioso apparve nel cielo: una donna vestita di sole." — Apocalisse 12:1',
          },
          {
            name: "L'Incoronazione di Maria",
            meditation: "Maria è incoronata Regina del cielo e della terra. Intercede per noi costantemente davanti al Figlio suo Gesù Cristo.",
            verse: '"Alla tua destra sta la regina in vesti d\'oro." — Salmo 45:10',
          },
        ],
      },
      luminous: {
        name: "Misteri della Luce",
        day: "Giovedì",
        color: "from-blue-900 to-sky-800",
        items: [
          {
            name: "Il Battesimo di Gesù",
            meditation: "Gesù viene battezzato nel Giordano e il Padre proclama la sua identità divina. Il nostro battesimo ci incorpora nella famiglia di Dio.",
            verse: '"Questi è il Figlio mio prediletto, nel quale mi sono compiaciuto." — Matteo 3:17',
          },
          {
            name: "Le Nozze di Cana",
            meditation: "Per intercessione di Maria, Gesù compie il suo primo miracolo trasformando l'acqua in vino. Maria ci conduce sempre al suo Figlio.",
            verse: '"Fate quello che vi dirà." — Giovanni 2:5',
          },
          {
            name: "La Proclamazione del Regno di Dio",
            meditation: "Gesù annuncia il Regno e chiama alla conversione. Il suo messaggio di amore e misericordia trasforma i cuori che si aprono a Lui.",
            verse: '"Il tempo è compiuto e il regno di Dio è vicino; convertitevi e credete nel Vangelo." — Marco 1:15',
          },
          {
            name: "La Trasfigurazione",
            meditation: "Sul Tabor, Gesù rivela la sua gloria divina a Pietro, Giacomo e Giovanni. Questa visione ci dà la forza per affrontare le prove della vita.",
            verse: '"Questi è il Figlio mio prediletto, nel quale mi sono compiaciuto. Ascoltatelo." — Matteo 17:5',
          },
          {
            name: "L'Istituzione dell'Eucaristia",
            meditation: "nell'Ultima Cena, Gesù ci dona il suo Corpo e il suo Sangue come nutrimento per il cammino. L'Eucaristia è il cuore della Chiesa.",
            verse: '"Prendete e mangiate; questo è il mio corpo." — Matteo 26:26',
          },
        ],
      },
    },
    howToPray: "Come Pregare il Rosario",
    steps: [
      "Iniziare con il Credo sul crocifisso",
      "Recitare il Padre Nostro sul grande grano",
      "Recitare 3 Ave Maria per fede, speranza e carità",
      "Recitare il Gloria e annunciare il Primo Mistero",
      "Recitare il Padre Nostro sul grande grano",
      "Recitare 10 Ave Maria meditando sul mistero",
      "Recitare il Gloria e la preghiera di Fatima",
      "Continuare con i misteri rimanenti",
      "Concludere con la Salve Regina",
    ],
  },
  mercy: {
    title: "Opere di Misericordia",
    subtitle:
      "Cristo ci chiama a servirlo nel prossimo attraverso queste opere d'amore",
    corporal: {
      title: "Opere Corporali",
      subtitle: "Cura del corpo",
      items: [
        { title: "Dar da mangiare agli affamati", icon: "🍞" },
        { title: "Dar da bere agli assetati", icon: "💧" },
        { title: "Vestire gli ignudi", icon: "👕" },
        { title: "Alloggiare i pellegrini", icon: "🏠" },
        { title: "Visitare gli infermi", icon: "❤️‍��" },
        { title: "Visitare i carcerati", icon: "🕊️" },
        { title: "Seppellire i morti", icon: "✝️" },
      ],
    },
    spiritual: {
      title: "Opere Spirituali",
      subtitle: "Cura dell'anima",
      items: [
        { title: "Istruire gli ignoranti", icon: "💡" },
        { title: "Consigliare i dubbiosi", icon: "📖" },
        { title: "Ammonire i peccatori", icon: "🙏" },
        { title: "Consolare gli afflitti", icon: "🌟" },
        { title: "Perdonare le offese", icon: "🤝" },
        { title: "Sopportare pazientemente i difetti del prossimo", icon: "☮️" },
        { title: "Pregare Dio per i vivi e per i morti", icon: "🕯️" },
      ],
    },
    verse:
      '"Tutto quello che avete fatto a uno solo di questi miei fratelli più piccoli, l\'avete fatto a me." — Matteo 25:40',
  },
  gallery: {
    title: "Immagini Sacre",
    subtitle: "Immagini che ispirano devozione e contemplazione",
  },
  footer: {
    tagline: "Diffondi l'amore di Cristo",
    rights: "Tutti i diritti riservati",
    madeWith: "Fatto con",
    andFaith: "e fede",
  },
  sanJose: {
    hero: {
      subtitle: "Padre Adottivo di Gesù · Sposo della Vergine Maria",
      quote: "«Custode della Sacra Famiglia, Patrono della Chiesa Universale, modello di fede, silenzio e lavoro»",
    },
    tabs: {
      prayers: "Preghiere",
      rosario: "Rosario",
      novena: "Novena",
    },
    prayers: {
      title: "Preghiere a San Giuseppe",
      subtitle: "Affidatevi al potente patrocinio di San Giuseppe",
      items: [
        {
          title: "Preghiera a San Giuseppe",
          subtitle: "Patrono della Chiesa Universale",
          text: `O San Giuseppe, sposo della Vergine Maria
e padre adottivo di Gesù,
vieni in mio aiuto con la tua potente intercessione.
Tu che sei stato il fedele custode della Sacra Famiglia,
sii anche il mio protettore nelle difficoltà della vita.

Guida i miei passi sul cammino dell'amore e della giustizia,
e ottienimi la grazia di vivere sempre
nella volontà di Dio.

Amen.`,
        },
        {
          title: "Consacrazione a San Giuseppe",
          subtitle: "Padre e Protettore",
          text: `Glorioso San Giuseppe,
patrono della Chiesa Universale,
oggi mi consacro a te
e mi pongo sotto la tua protezione.

Come Gesù era sotto la tua amorevole cura,
così mi affido alle tue mani con filiale confidenza.
Sii la mia guida, il mio sostegno
e il mio intercessore presso il Signore.

La tua vita di silenzio e lavoro,
di fede e totale obbedienza a Dio,
sia il modello della mia vita cristiana.

Amen.`,
        },
        {
          title: "Preghiera per la Famiglia",
          subtitle: "A San Giuseppe, Sposo e Padre",
          text: `San Giuseppe, custode della Sacra Famiglia,
proteggi le nostre famiglie in questi tempi difficili.
Che l'amore che univa la Sacra Famiglia
regni anche nelle nostre case.

Ottienici dal tuo Figlio Gesù
la grazia di amarci gli uni gli altri,
di perdonarci, di servirci
e di camminare insieme verso il cielo.

Amen.`,
        },
        {
          title: "Preghiera del Lavoratore",
          subtitle: "San Giuseppe, Patrono dei Lavoratori",
          text: `San Giuseppe Lavoratore,
tu che hai santificato il lavoro con le tue mani,
benedici il lavoro di tutti gli uomini e le donne.

Nessun lavoratore manchi di pane,
nessuna famiglia soffra ingiustizia,
e il frutto del lavoro umano
sia sempre motivo di dignità e gioia.

Intercedi per coloro che cercano lavoro,
per coloro che lavorano in condizioni difficili,
e per tutti coloro che si prendono cura delle loro famiglie.

Amen.`,
        },
      ],
    },
    rosario: {
      title: "Rosario di San Giuseppe",
      subtitle: "Sette Dolori e Sette Gioie",
      intro: `Il Rosario di San Giuseppe medita sui Sette Dolori e le Sette Gioie di questo grande santo.
Si prega con sette gruppi di 7 Ave Maria, meditando su ogni mistero della vita di San Giuseppe.
Ogni decina è preceduta da un Padre Nostro e si conclude con un Gloria.`,
      dolorLabel: "Dolore",
      gozoLabel: "Gioia",
      closingNote: "Concludere con il Salve Regina e la seguente invocazione:",
      closingPrayer: "«San Giuseppe, prega per noi.»",
      mysteries: [
        {
          title: "Primo Mistero",
          dolor: "Il dubbio di San Giuseppe sull'origine della gravidanza di Maria",
          gozo: "L'angelo rivela a San Giuseppe che Gesù è il Figlio di Dio",
          verse: '"Giuseppe, figlio di Davide, non temere di prendere con te Maria, tua sposa, perché quel che è generato in lei viene dallo Spirito Santo." — Matteo 1:20',
        },
        {
          title: "Secondo Mistero",
          dolor: "La povertà della mangiatoia di Betlemme",
          gozo: "La nascita di Gesù, il Salvatore del mondo",
          verse: '"Diede alla luce il suo figlio primogenito, lo fasciò e lo depose in una mangiatoia." — Luca 2:7',
        },
        {
          title: "Terzo Mistero",
          dolor: "La profezia di Simeone sul dolore di Maria",
          gozo: "Le profezie su Gesù come luce delle nazioni",
          verse: '"Egli è posto per la caduta e la risurrezione di molti in Israele." — Luca 2:34',
        },
        {
          title: "Quarto Mistero",
          dolor: "La fuga in Egitto per sfuggire ad Erode",
          gozo: "La protezione divina sulla Sacra Famiglia in Egitto",
          verse: '"Alzati, prendi il bambino e sua madre, fuggi in Egitto." — Matteo 2:13',
        },
        {
          title: "Quinto Mistero",
          dolor: "L'amarezza dell'esilio in terra straniera",
          gozo: "Il ritorno nella terra promessa dopo la morte di Erode",
          verse: '"Alzati, prendi con te il bambino e sua madre e va\' nel paese d\'Israele." — Matteo 2:20',
        },
        {
          title: "Sesto Mistero",
          dolor: "Lo smarrimento del Bambino Gesù a Gerusalemme",
          gozo: "Il ritrovamento di Gesù nel Tempio tra i dottori",
          verse: '"Lo trovarono nel tempio, seduto in mezzo ai dottori." — Luca 2:46',
        },
        {
          title: "Settimo Mistero",
          dolor: "La malattia e la morte di San Giuseppe",
          gozo: "San Giuseppe muore assistito da Gesù e Maria, raggiungendo la gloria eterna",
          verse: '"Preziosa agli occhi del Signore è la morte dei suoi fedeli." — Salmo 116:15',
        },
      ],
    },
    novena: {
      title: "Novena a San Giuseppe",
      subtitle: "Nove giorni di preghiera e meditazione",
      meditationLabel: "Meditazione",
      prayerLabel: "Preghiera del giorno",
      finalPrayerTitle: "Preghiera Finale della Novena",
      finalPrayer: "«O San Giuseppe, la cui protezione è così grande, così forte, così pronta davanti al trono di Dio, a te affido tutti i miei interessi e desideri. O San Giuseppe, assistimi con la tua potente intercessione e ottieni dal tuo Divin Figlio tutte le grazie spirituali e temporali di cui ho bisogno. Amen.»",
      days: [
        {
          title: "Giorno 1 — La Vocazione di San Giuseppe",
          meditation: "San Giuseppe, scelto da Dio dall'eternità per essere lo sposo di Maria e il padre adottivo di Gesù. Medita sulla grandezza della sua vocazione e chiedi a Dio di scoprire la tua.",
          prayer: `O San Giuseppe, sei stato chiamato da Dio per una missione unica nella storia della salvezza.
Aiutami a conoscere e amare la mia vocazione,
a rispondere con lo stesso generoso «sì» che hai dato tu
quando l'angelo ti ha rivelato il mistero.

Che anch'io possa dire con fede: «Sia fatta la tua volontà».

Amen.`,
        },
        {
          title: "Giorno 2 — La Fede di San Giuseppe",
          meditation: "San Giuseppe credette senza vedere, si fidò senza capire. La sua fede in Dio fu messa alla prova e purificata. Chiedi la grazia di una fede forte che non vacilli davanti alle difficoltà.",
          prayer: `San Giuseppe, uomo di profonda fede,
hai creduto alla parola dell'angelo
e hai agito senza esitare.
Dammi una fede ferma e fiduciosa
che mi sostenga nei momenti di oscurità.

Quando non capisco il cammino di Dio nella mia vita,
aiutami a credere e ad andare avanti con fiducia.

Amen.`,
        },
        {
          title: "Giorno 3 — La Purezza di San Giuseppe",
          meditation: "San Giuseppe, l'«uomo giusto», visse con perfetta purezza di cuore. Il suo amore per Maria era sacro e fedele. Chiedi la grazia della purezza nei pensieri, nelle parole e nelle opere.",
          prayer: `Castissimo San Giuseppe,
modello di purezza e rettitudine,
intercedi per me affinché il mio cuore sia puro
e le mie azioni riflettano l'amore di Dio.

Proteggi la mia anima e quella della mia famiglia
da tutto ciò che allontana da Dio.

Amen.`,
        },
        {
          title: "Giorno 4 — Il Lavoro di San Giuseppe",
          meditation: "San Giuseppe ha santificato il lavoro con le sue mani. Falegname di Nazaret, ha insegnato a Gesù il valore del lavoro onesto. Chiedi la grazia di lavorare con amore e dignità.",
          prayer: `San Giuseppe Lavoratore,
santifica il mio lavoro quotidiano
e quello di tutte le persone che lavorano onestamente.
Che io trovi nel lavoro
non solo il sostentamento per il corpo
ma anche per l'anima.

Intercedi per coloro che non hanno lavoro
e per coloro che soffrono di sfruttamento.

Amen.`,
        },
        {
          title: "Giorno 5 — Il Silenzio di San Giuseppe",
          meditation: "Nei Vangeli, San Giuseppe non parla mai. La sua vita fu una testimonianza di azione silenziosa al servizio di Dio. Chiedi la grazia del silenzio interiore per ascoltare Dio.",
          prayer: `San Giuseppe del silenzio sacro,
insegnami ad ascoltare prima di parlare,
a pregare prima di agire,
a fidarmi prima di voler capire.

Nel rumore di questo mondo,
aiutami a trovare il silenzio interiore
dove Dio parla al mio cuore.

Amen.`,
        },
        {
          title: "Giorno 6 — L'Obbedienza di San Giuseppe",
          meditation: "San Giuseppe ha obbedito a Dio ogni volta che l'angelo gli parlò: accogliendo Maria, fuggendo in Egitto, tornando in Israele. La sua obbedienza ha salvato la vita del Salvatore. Chiedi la grazia dell'obbedienza a Dio.",
          prayer: `Obbediente San Giuseppe,
ti sei alzato ogni volta che Dio ti chiamava,
senza domande, senza esitazioni, senza ritardi.
Dammi la grazia di obbedire a Dio
in ogni circostanza della mia vita,
soprattutto quando non capisco le sue vie.

Che la mia volontà si pieghi sempre
davanti alla volontà divina.

Amen.`,
        },
        {
          title: "Giorno 7 — La Tenerezza di San Giuseppe",
          meditation: "San Giuseppe amò Gesù con la tenerezza di un vero padre. Lo protesse, lo nutrì, gli insegnò a lavorare. Il suo amore fu concreto e fedele. Chiedi la grazia dell'amore familiare.",
          prayer: `San Giuseppe padre amorevole,
tu che hai curato Gesù con mani forti e cuore tenero,
intercedi per i padri e le madri del mondo.

Che le nostre case siano scuole d'amore,
che i bambini crescano sicuri e amati,
e che le famiglie siano il primo riflesso
dell'amore di Dio nel mondo.

Amen.`,
        },
        {
          title: "Giorno 8 — San Giuseppe, Protettore della Chiesa",
          meditation: "Papa Pio IX ha proclamato San Giuseppe Patrono della Chiesa Universale. Ha protetto il Corpo di Cristo a Nazaret; ora protegge il Corpo di Cristo che è la Chiesa. Chiedi la grazia di amare e servire la Chiesa.",
          prayer: `San Giuseppe, custode della Santa Chiesa,
il Corpo Mistico di Cristo è sotto la tua protezione.
Intercedi per il Papa, i vescovi, i sacerdoti
e tutti i fedeli.

Proteggi la Chiesa dagli attacchi del male,
rinnova la sua santità
e aiutala ad essere sempre un segno dell'amore di Dio per il mondo.

Amen.`,
        },
        {
          title: "Giorno 9 — San Giuseppe, Patrono della Buona Morte",
          meditation: "San Giuseppe morì tra le braccia di Gesù e Maria. Per questo è invocato come patrono della buona morte. Chiedi la grazia di morire nella grazia di Dio, assistito dall'amore di Maria e della Chiesa.",
          prayer: `San Giuseppe, patrono della buona morte,
tu che hai chiuso gli occhi al mondo
tra le braccia di Gesù e Maria,
ottienimi la grazia di perseverare nella fede
fino alla fine della mia vita.

Quando verrà la mia ora,
che tu mi trovi in grazia,
e che sia tu ad accompagnarmi
alla presenza di Dio.

Amen.`,
        },
      ],
    },
  },
};

export default it;
