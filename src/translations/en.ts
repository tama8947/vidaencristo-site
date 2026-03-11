const en = {
  nav: {
    home: "Home",
    prayers: "Prayers",
    rosary: "Rosary",
    mercy: "Works of Mercy",
    gallery: "Gallery",
    sanJose: "Saint Joseph",
    catechism: "Catechism",
  },
  hero: {
    tagline: "Vida en Cristo",
    subtitle: "Life in Christ",
    description:
      "A place of prayer, faith, and devotion. Find peace in the Lord's presence.",
    ctaPrayers: "Explore Prayers",
    ctaRosary: "Pray the Rosary",
    verse: '"I am the way, and the truth, and the life." — John 14:6',
  },
  prayers: {
    title: "Sacred Prayers",
    subtitle: "Draw close to God through these timeless prayers of the Church",
    ourFather: {
      title: "The Lord's Prayer",
      subtitle: "Our Father",
      text: `Our Father, who art in heaven,
hallowed be thy name;
thy kingdom come;
thy will be done on earth as it is in heaven.
Give us this day our daily bread;
and forgive us our trespasses
as we forgive those who trespass against us;
and lead us not into temptation,
but deliver us from evil.
Amen.`,
    },
    hailMary: {
      title: "Hail Mary",
      subtitle: "Ave Maria",
      text: `Hail Mary, full of grace,
the Lord is with thee.
Blessed art thou among women,
and blessed is the fruit of thy womb, Jesus.
Holy Mary, Mother of God,
pray for us sinners,
now and at the hour of our death.
Amen.`,
    },
    gloryBe: {
      title: "Glory Be",
      subtitle: "Gloria Patri",
      text: `Glory be to the Father,
and to the Son,
and to the Holy Spirit.
As it was in the beginning,
is now, and ever shall be,
world without end.
Amen.`,
    },
    apostlesCreed: {
      title: "Apostles' Creed",
      subtitle: "Credo",
      text: `I believe in God,
the Father Almighty,
Creator of Heaven and earth;
and in Jesus Christ,
His only Son, our Lord,
Who was conceived by the Holy Spirit,
born of the Virgin Mary,
suffered under Pontius Pilate,
was crucified, died and was buried.
He descended into Hell;
the third day He rose again from the dead;
He ascended into Heaven,
and is seated at the right hand of God the Father Almighty;
from thence He shall come to judge the living and the dead.
I believe in the Holy Spirit,
the Holy Catholic Church,
the communion of Saints,
the forgiveness of sins,
the resurrection of the body,
and life everlasting.
Amen.`,
    },
    holySpirit: {
      title: "Prayer to the Holy Spirit",
      subtitle: "Veni Sancte Spiritus",
      text: `Come, Holy Spirit,
fill the hearts of your faithful
and kindle in them the fire of your love.
Send forth your Spirit and they shall be created,
and you shall renew the face of the earth.
O God, who by the light of the Holy Spirit
did instruct the hearts of the faithful,
grant that by the same Holy Spirit
we may be truly wise
and ever rejoice in His consolation.
Through Christ our Lord.
Amen.`,
    },
    magnificat: {
      title: "The Magnificat",
      subtitle: "Canticle of Mary — Luke 1:46-55",
      text: `My soul proclaims the greatness of the Lord,
my spirit rejoices in God my Savior;
for He has looked with favor on His lowly servant.
From this day all generations will call me blessed:
the Almighty has done great things for me,
and holy is His Name.
He has mercy on those who fear Him
in every generation.
He has shown the strength of His arm,
He has scattered the proud in their conceit.
He has cast down the mighty from their thrones,
and has lifted up the lowly.
He has filled the hungry with good things,
and the rich He has sent away empty.
He has come to the help of His servant Israel
for He has remembered His promise of mercy,
the promise He made to our fathers,
to Abraham and his children for ever.
Amen.`,
    },
  },
  rosary: {
    title: "The Holy Rosary",
    subtitle:
      "Meditate on the mysteries of Christ's life through this ancient prayer",
    intro:
      "The Rosary is a powerful prayer that unites us to Mary and leads us to Christ. Each set of mysteries invites us to contemplate key moments in Jesus's life.",
    mysteries: {
      joyful: {
        name: "Joyful Mysteries",
        day: "Monday & Saturday",
        color: "from-pink-900 to-rose-800",
        items: [
          {
            name: "The Annunciation",
            meditation: "We contemplate the moment the Angel Gabriel announces to Mary that she will be the Mother of the Savior. We meditate on her humble 'yes' to God's will.",
            verse: '"Hail, full of grace, the Lord is with you." — Luke 1:28',
          },
          {
            name: "The Visitation",
            meditation: "Mary, carrying Jesus in her womb, visits her cousin Elizabeth. The presence of Jesus fills Zechariah's home with joy and the Holy Spirit.",
            verse: '"How is it that the mother of my Lord should come to me?" — Luke 1:43',
          },
          {
            name: "The Nativity",
            meditation: "We contemplate the Son of God becoming small, born in a manger, the light of the world coming to illumine our darkness.",
            verse: '"Today in the city of David a Savior has been born for you who is Messiah and Lord." — Luke 2:11',
          },
          {
            name: "The Presentation",
            meditation: "Mary and Joseph offer Jesus to the Father in the temple. Simeon recognizes the promised Savior and prophesies his universal mission.",
            verse: '"This child is destined for the fall and rise of many in Israel." — Luke 2:34',
          },
          {
            name: "The Finding in the Temple",
            meditation: "For three days, Mary and Joseph search for Jesus with anguish. They find him in his Father's house, fulfilling his divine mission.",
            verse: '"Did you not know that I must be in my Father\'s house?" — Luke 2:49',
          },
        ],
      },
      sorrowful: {
        name: "Sorrowful Mysteries",
        day: "Tuesday & Friday",
        color: "from-red-950 to-red-900",
        items: [
          {
            name: "The Agony in the Garden",
            meditation: "Jesus sweats blood in Gethsemane, bearing the weight of all our sins. His love for the Father and for us sustains him in the darkest hour.",
            verse: '"Father, if you are willing, take this cup away from me; still, not my will but yours be done." — Luke 22:42',
          },
          {
            name: "The Scourging at the Pillar",
            meditation: "Jesus's body is torn by scourges. With each blow, he bears our infirmities and heals the wounds of sin.",
            verse: '"He was pierced for our transgressions, crushed for our iniquities." — Isaiah 53:5',
          },
          {
            name: "The Crowning with Thorns",
            meditation: "Soldiers crown Jesus with thorns, mocking his royalty. He endures humiliation with infinite gentleness and love.",
            verse: '"They wove a crown of thorns and placed it on his head." — Matthew 27:29',
          },
          {
            name: "The Carrying of the Cross",
            meditation: "Jesus carries the cross through the streets of Jerusalem, falling several times. His love for us is stronger than any pain.",
            verse: '"Carrying the cross himself, he went out to what is called the Place of the Skull." — John 19:17',
          },
          {
            name: "The Crucifixion",
            meditation: "On the cross, Jesus gives his life out of love for us. With his last words, he entrusts us to Mary and forgives all who have sinned.",
            verse: '"Father, forgive them, they know not what they do." — Luke 23:34',
          },
        ],
      },
      glorious: {
        name: "Glorious Mysteries",
        day: "Wednesday & Sunday",
        color: "from-amber-900 to-yellow-800",
        items: [
          {
            name: "The Resurrection",
            meditation: "At dawn on the third day, Christ rises victorious over death. This is the foundation of our faith and the source of our hope.",
            verse: '"Why do you seek the living one among the dead? He is not here, but he has been raised." — Luke 24:5-6',
          },
          {
            name: "The Ascension",
            meditation: "Jesus ascends to heaven in the presence of his disciples, promising to send the Holy Spirit and to prepare a place for us.",
            verse: '"This Jesus who has been taken up from you into heaven will return in the same way." — Acts 1:11',
          },
          {
            name: "The Descent of the Holy Spirit",
            meditation: "The Holy Spirit descends upon Mary and the Apostles at Pentecost. The Church is born, filled with fire and divine grace.",
            verse: '"They were all filled with the Holy Spirit and began to speak in different tongues." — Acts 2:4',
          },
          {
            name: "The Assumption of Mary",
            meditation: "At the end of her earthly life, Mary is taken into heaven in body and soul. She precedes us in the glory we all hope to share.",
            verse: '"A great sign appeared in the sky, a woman clothed with the sun." — Revelation 12:1',
          },
          {
            name: "The Coronation of Mary",
            meditation: "Mary is crowned Queen of heaven and earth. She intercedes for us constantly before her Son Jesus Christ.",
            verse: '"The queen takes her place at your right hand in gold of Ophir." — Psalm 45:10',
          },
        ],
      },
      luminous: {
        name: "Luminous Mysteries",
        day: "Thursday",
        color: "from-blue-900 to-sky-800",
        items: [
          {
            name: "The Baptism of Jesus",
            meditation: "Jesus is baptized in the Jordan and the Father proclaims his divine identity. Our baptism incorporates us into the family of God.",
            verse: '"This is my beloved Son, with whom I am well pleased." — Matthew 3:17',
          },
          {
            name: "The Wedding at Cana",
            meditation: "At Mary's intercession, Jesus performs his first miracle, turning water into wine. Mary always leads us to her Son.",
            verse: '"Do whatever he tells you." — John 2:5',
          },
          {
            name: "The Proclamation of the Kingdom",
            meditation: "Jesus announces the Kingdom and calls everyone to conversion. His message of love and mercy transforms hearts.",
            verse: '"The kingdom of God is at hand. Repent, and believe in the gospel." — Mark 1:15',
          },
          {
            name: "The Transfiguration",
            meditation: "On Tabor, Jesus reveals his divine glory to Peter, James, and John. This vision gives us strength to face every trial.",
            verse: '"This is my beloved Son, with whom I am well pleased; listen to him." — Matthew 17:5',
          },
          {
            name: "The Institution of the Eucharist",
            meditation: "At the Last Supper, Jesus gives us his Body and Blood as food for the journey. The Eucharist is the heart of the Church.",
            verse: '"Take and eat; this is my body." — Matthew 26:26',
          },
        ],
      },
    },
    howToPray: "How to Pray the Rosary",
    steps: [
      "Begin with the Apostles' Creed on the crucifix",
      "Pray the Our Father on the large bead",
      "Pray 3 Hail Marys on the small beads for faith, hope, and charity",
      "Pray the Glory Be, then announce the First Mystery",
      "Pray the Our Father on the large bead",
      "Pray 10 Hail Marys on the small beads, meditating on the mystery",
      "Pray the Glory Be and the Fatima Prayer",
      "Continue with the remaining mysteries",
      "Conclude with the Hail Holy Queen",
    ],
  },
  mercy: {
    title: "Works of Mercy",
    subtitle:
      "Christ calls us to serve Him in our neighbor through these works of love",
    corporal: {
      title: "Corporal Works",
      subtitle: "Caring for the body",
      items: [
        { title: "Feed the hungry", icon: "🍞" },
        { title: "Give drink to the thirsty", icon: "💧" },
        { title: "Clothe the naked", icon: "👕" },
        { title: "Shelter the homeless", icon: "🏠" },
        { title: "Visit the sick", icon: "❤️‍🩹" },
        { title: "Visit the imprisoned", icon: "🕊️" },
        { title: "Bury the dead", icon: "✝️" },
      ],
    },
    spiritual: {
      title: "Spiritual Works",
      subtitle: "Caring for the soul",
      items: [
        { title: "Counsel the doubtful", icon: "💡" },
        { title: "Instruct the ignorant", icon: "📖" },
        { title: "Admonish the sinner", icon: "🙏" },
        { title: "Comfort the sorrowful", icon: "🌟" },
        { title: "Forgive injuries", icon: "🤝" },
        { title: "Bear wrongs patiently", icon: "☮️" },
        { title: "Pray for the living and the dead", icon: "🕯️" },
      ],
    },
    verse:
      '"Whatever you did for one of these least brothers of mine, you did for me." — Matthew 25:40',
  },
  gallery: {
    title: "Sacred Images",
    subtitle: "Images that inspire devotion and contemplation",
  },
  footer: {
    tagline: "Spread the love of Christ",
    rights: "All rights reserved",
    madeWith: "Made with",
    andFaith: "and faith",
  },
  sanJose: {
    hero: {
      subtitle: "Adoptive Father of Jesus · Spouse of the Virgin Mary",
      quote: "\"Guardian of the Holy Family, Patron of the Universal Church, model of faith, silence and work\"",
    },
    tabs: {
      prayers: "Prayers",
      rosario: "Rosary",
      novena: "Novena",
    },
    prayers: {
      title: "Prayers to Saint Joseph",
      subtitle: "Entrust yourselves to the powerful patronage of Saint Joseph",
      items: [
        {
          title: "Prayer to Saint Joseph",
          subtitle: "Patron of the Universal Church",
          text: `O Saint Joseph, spouse of the Virgin Mary
and adoptive father of Jesus,
come to my aid with your powerful intercession.
You who were a faithful guardian of the Holy Family,
be also my protector in the difficulties of life.

Guide my steps on the path of love and justice,
and obtain for me the grace to live always
in the will of God.

Amen.`,
        },
        {
          title: "Consecration to Saint Joseph",
          subtitle: "Father and Protector",
          text: `Glorious Saint Joseph,
patron of the Universal Church,
I consecrate myself to you today
and place myself under your protection.

As Jesus was under your loving care,
so I entrust myself to your hands with filial confidence.
Be my guide, my support
and my intercessor before the Lord.

May your life of silence and work,
of faith and total obedience to God,
be the model of my Christian life.

Amen.`,
        },
        {
          title: "Prayer for the Family",
          subtitle: "To Saint Joseph, Spouse and Father",
          text: `Saint Joseph, guardian of the Holy Family,
protect our families in these difficult times.
May the love that united the Holy Family
also reign in our homes.

Obtain for us from your Son Jesus
the grace to love one another,
to forgive each other, to serve each other
and to walk together toward heaven.

Amen.`,
        },
        {
          title: "Prayer of the Worker",
          subtitle: "Saint Joseph, Patron of Workers",
          text: `Saint Joseph the Worker,
you who sanctified work with your hands,
bless the work of all men and women.

May no worker lack bread,
may no family suffer injustice,
and may the fruit of human labor
always be a source of dignity and joy.

Intercede for those who seek employment,
for those who work in difficult conditions,
and for all who care for their families.

Amen.`,
        },
      ],
    },
    rosario: {
      title: "Rosary of Saint Joseph",
      subtitle: "Seven Sorrows and Seven Joys",
      intro: `The Rosary of Saint Joseph meditates on the Seven Sorrows and Seven Joys of this great saint.
It is prayed with seven groups of 7 Hail Marys, meditating on each mystery of Saint Joseph's life.
Each decade is preceded by an Our Father and ends with a Glory Be.`,
      dolorLabel: "Sorrow",
      gozoLabel: "Joy",
      closingNote: "Conclude with the Hail Holy Queen and the following ejaculation:",
      closingPrayer: "\"Saint Joseph, pray for us.\"",
      mysteries: [
        {
          title: "First Mystery",
          dolor: "Saint Joseph's doubt about the origin of Mary's pregnancy",
          gozo: "The angel reveals to Saint Joseph that Jesus is the Son of God",
          verse: '"Joseph, son of David, do not be afraid to take Mary as your wife, for what is conceived in her is from the Holy Spirit." — Matthew 1:20',
        },
        {
          title: "Second Mystery",
          dolor: "The poverty of the manger in Bethlehem",
          gozo: "The birth of Jesus, the Savior of the world",
          verse: '"And she gave birth to her firstborn son and wrapped him in swaddling clothes and laid him in a manger." — Luke 2:7',
        },
        {
          title: "Third Mystery",
          dolor: "Simeon's prophecy about Mary's sorrow",
          gozo: "The prophecies about Jesus as the light of the nations",
          verse: '"This child is destined for the fall and rise of many in Israel." — Luke 2:34',
        },
        {
          title: "Fourth Mystery",
          dolor: "The flight to Egypt to escape Herod",
          gozo: "Divine protection over the Holy Family in Egypt",
          verse: '"Rise, take the child and his mother, and flee to Egypt." — Matthew 2:13',
        },
        {
          title: "Fifth Mystery",
          dolor: "The bitterness of exile in a foreign land",
          gozo: "The return to the promised land after the death of Herod",
          verse: '"Rise, take the child and his mother and go to the land of Israel." — Matthew 2:20',
        },
        {
          title: "Sixth Mystery",
          dolor: "The loss of the Child Jesus in Jerusalem",
          gozo: "The finding of Jesus in the Temple among the teachers",
          verse: '"And they found him in the temple, sitting among the teachers." — Luke 2:46',
        },
        {
          title: "Seventh Mystery",
          dolor: "The illness and death of Saint Joseph",
          gozo: "Saint Joseph dies assisted by Jesus and Mary, attaining eternal glory",
          verse: '"Precious in the sight of the Lord is the death of his faithful." — Psalm 116:15',
        },
      ],
    },
    novena: {
      title: "Novena to Saint Joseph",
      subtitle: "Nine days of prayer and meditation",
      meditationLabel: "Meditation",
      prayerLabel: "Prayer of the day",
      finalPrayerTitle: "Final Prayer of the Novena",
      finalPrayer: "\"O Saint Joseph, whose protection is so great, so strong, so prompt before the throne of God, I place in you all my interests and desires. O Saint Joseph, assist me by your powerful intercession and obtain from your Divine Son all spiritual and temporal graces which I need. Amen.\"",
      days: [
        {
          title: "Day 1 — The Vocation of Saint Joseph",
          meditation: "Saint Joseph, chosen by God from eternity to be the spouse of Mary and adoptive father of Jesus. Meditate on the greatness of his vocation and ask God to help you discover yours.",
          prayer: `O Saint Joseph, you were called by God for a unique mission in the history of salvation.
Help me to know and love my own vocation,
to respond with the same generous "yes" that you gave
when the angel revealed the mystery to you.

May I also say with faith: "Thy will be done."

Amen.`,
        },
        {
          title: "Day 2 — The Faith of Saint Joseph",
          meditation: "Saint Joseph believed without seeing, trusted without understanding. His faith in God was tested and purified. Ask for the grace of a strong faith that does not waver before difficulties.",
          prayer: `Saint Joseph, man of deep faith,
you believed the word of the angel
and acted without hesitation.
Give me a firm and trusting faith
that sustains me in my moments of darkness.

When I do not understand God's path in my life,
help me to believe and move forward with confidence.

Amen.`,
        },
        {
          title: "Day 3 — The Purity of Saint Joseph",
          meditation: "Saint Joseph, the \"just man\", lived with perfect purity of heart. His love for Mary was sacred and faithful. Ask for the grace of purity in thoughts, words and deeds.",
          prayer: `Most chaste Saint Joseph,
model of purity and uprightness,
intercede for me that my heart may be clean
and my actions may reflect the love of God.

Protect my soul and that of my family
from all that draws us away from God.

Amen.`,
        },
        {
          title: "Day 4 — The Work of Saint Joseph",
          meditation: "Saint Joseph sanctified work with his hands. As the carpenter of Nazareth, he taught Jesus the value of honest work. Ask for the grace to work with love and dignity.",
          prayer: `Saint Joseph the Worker,
sanctify my daily work
and that of all who work with honesty.
May I find in work
not only sustenance for the body
but also for the soul.

Intercede for those who have no work
and for those who suffer exploitation.

Amen.`,
        },
        {
          title: "Day 5 — The Silence of Saint Joseph",
          meditation: "In the Gospels, Saint Joseph never speaks. His life was a testimony of silent action in the service of God. Ask for the grace of interior silence to listen to God.",
          prayer: `Saint Joseph of sacred silence,
teach me to listen before speaking,
to pray before acting,
to trust before trying to understand.

In the noise of this world,
help me to find the inner silence
where God speaks to my heart.

Amen.`,
        },
        {
          title: "Day 6 — The Obedience of Saint Joseph",
          meditation: "Saint Joseph obeyed God every time the angel spoke to him: receiving Mary, fleeing to Egypt, returning to Israel. His obedience saved the life of the Savior. Ask for the grace of obedience to God.",
          prayer: `Obedient Saint Joseph,
you rose up every time God called you,
without question, without hesitation, without delay.
Give me the grace to obey God
in every circumstance of my life,
especially when I do not understand his ways.

May my will always yield
before the divine will.

Amen.`,
        },
        {
          title: "Day 7 — The Tenderness of Saint Joseph",
          meditation: "Saint Joseph loved Jesus with the tenderness of a true father. He protected him, fed him, taught him to work. His love was concrete and faithful. Ask for the grace of family love.",
          prayer: `Saint Joseph, loving father,
you who cared for Jesus with strong hands and tender heart,
intercede for the fathers and mothers of the world.

May our homes be schools of love,
may children grow up secure and loved,
and may families be the first reflection
of the love of God in the world.

Amen.`,
        },
        {
          title: "Day 8 — Saint Joseph, Protector of the Church",
          meditation: "Pope Pius IX proclaimed Saint Joseph Patron of the Universal Church. He protected the Body of Christ in Nazareth; now he protects the Body of Christ which is the Church. Ask for the grace to love and serve the Church.",
          prayer: `Saint Joseph, guardian of the Holy Church,
the Mystical Body of Christ is under your protection.
Intercede for the Pope, bishops, priests
and all the faithful.

Protect the Church from the attacks of evil,
renew its holiness
and help it to be always a sign of God's love for the world.

Amen.`,
        },
        {
          title: "Day 9 — Saint Joseph, Patron of a Happy Death",
          meditation: "Saint Joseph died in the arms of Jesus and Mary. For this reason he is invoked as patron of a happy death. Ask for the grace to die in God's grace, assisted by the love of Mary and the Church.",
          prayer: `Saint Joseph, patron of a happy death,
you who closed your eyes to the world
in the arms of Jesus and Mary,
obtain for me the grace to persevere in faith
until the end of my life.

When my hour comes,
may you find me in grace,
and may it be you who accompanies me
into the presence of God.

Amen.`,
        },
      ],
    },
  },
  catechism: {
    title: "Catechism of the Catholic Church",
    subtitle: "The four pillars of the faith",
    intro:
      "The Catechism of the Catholic Church (CCC), published in 1992 by Pope John Paul II, is the official compendium of the doctrine of the Church. It is organized into four great pillars that embrace the entirety of the Christian life.",
    sourceLabel: "CCC",
    closingQuote: `"Hear, O Israel: The Lord our God, the Lord is one; and you shall love the Lord your God with all your heart, and with all your soul, and with all your mind, and with all your strength."`,
    closingQuoteRef: "— Mark 12:29-30 · CCC 2196",
    pillars: [
      {
        id: "creed",
        icon: "✝️",
        color: "amber",
        title: "The Profession of Faith",
        subtitle: "What we believe",
        intro:
          "The first pillar expounds the Apostolic Creed — the great symbols of the faith that summarize the mystery of God: Father, Son and Holy Spirit, and his work of creation and salvation.",
        items: [
          {
            number: "CCC 26",
            title: "The Human Capacity for God",
            text: `"Man's life with God begins at that moment when he realizes he has been made in the image of God, oriented toward the fullness of life with him. God never ceases to draw man to himself, and only in God will man find the truth and happiness he never stops seeking."`,
          },
          {
            number: "CCC 234",
            title: "The Mystery of the Holy Trinity",
            text: `"The mystery of the Most Holy Trinity is the central mystery of Christian faith and life. It is the mystery of God in himself. It is therefore the source of all the other mysteries of faith, the light that enlightens them."`,
          },
          {
            number: "CCC 456",
            title: "Why Did the Word Become Flesh?",
            text: `"With the Nicene Creed, we answer by confessing: 'For us men and for our salvation he came down from heaven; by the power of the Holy Spirit he became incarnate from the Virgin Mary, and was made man.' The Word became flesh for us in order to save us by reconciling us with God."`,
          },
          {
            number: "CCC 748",
            title: "Christ — the Light of the Nations",
            text: `"Christ is the light of all nations. This holy council, which is gathered in the Holy Spirit, ardently desires, by proclaiming the Gospel to every creature, to bring the light of Christ to all men."`,
          },
          {
            number: "CCC 988",
            title: "The Resurrection of the Body",
            text: `"The Christian Creed — the profession of our faith in God, the Father, the Son, and the Holy Spirit, and in God's creative, saving, and sanctifying action — culminates in the proclamation of the resurrection of the dead on the last day and in life everlasting."`,
          },
        ],
      },
      {
        id: "sacraments",
        icon: "🕊️",
        color: "blue",
        title: "The Sacraments",
        subtitle: "How we celebrate the faith",
        intro:
          "The seven sacraments are the efficacious signs of grace instituted by Christ and entrusted to the Church. Through them, divine life is dispensed to us. They encompass all the stages and all the important moments of Christian life.",
        items: [
          {
            number: "CCC 1113",
            title: "The Sacraments of Christ",
            text: `"The whole liturgical life of the Church revolves around the Eucharistic sacrifice and the sacraments. There are seven sacraments in the Church: Baptism, Confirmation (or Chrismation), the Eucharist, Penance, the Anointing of the Sick, Holy Orders, and Matrimony."`,
          },
          {
            number: "CCC 1213",
            title: "Baptism — Gateway to Life",
            text: `"Holy Baptism is the basis of the whole Christian life, the gateway to life in the Spirit, and the door which gives access to the other sacraments. Through Baptism we are freed from sin and reborn as sons of God; we become members of Christ, are incorporated into the Church and made sharers in her mission."`,
          },
          {
            number: "CCC 1322",
            title: "The Eucharist — Source and Summit",
            text: `"The holy Eucharist completes Christian initiation. Those who have been raised to the dignity of the royal priesthood by Baptism and configured more deeply to Christ by Confirmation participate with the whole community in the Lord's own sacrifice by means of the Eucharist."`,
          },
          {
            number: "CCC 1440",
            title: "Penance and Reconciliation",
            text: `"Sin is before all else an offense against God, a rupture of communion with him. At the same time it damages communion with the Church. For this reason conversion entails both God's forgiveness and reconciliation with the Church, which are expressed and accomplished liturgically by the sacrament of Penance and Reconciliation."`,
          },
          {
            number: "CCC 1601",
            title: "Matrimony in God's Plan",
            text: `"The matrimonial covenant, by which a man and a woman establish between themselves a partnership of the whole of life, is by its nature ordered toward the good of the spouses and the procreation and education of offspring; this covenant between baptized persons has been raised by Christ the Lord to the dignity of a sacrament."`,
          },
        ],
      },
      {
        id: "life",
        icon: "🌿",
        color: "green",
        title: "Life in Christ",
        subtitle: "How we live the faith",
        intro:
          "The third pillar presents the ultimate vocation of man: beatitude. It traces the path of that vocation through the Ten Commandments, the Beatitudes, and the virtues that lead to a life worthy of the Gospel.",
        items: [
          {
            number: "CCC 1716",
            title: "The Beatitudes",
            text: `"The Beatitudes are at the heart of Jesus' preaching. They take up the promises made to the chosen people since Abraham. The Beatitudes fulfill the promises by ordering them no longer merely to the possession of a territory, but to the Kingdom of heaven."`,
          },
          {
            number: "CCC 1803",
            title: "Human Virtues",
            text: `"A virtue is a habitual and firm disposition to do the good. It allows the person not only to perform good acts, but to give the best of himself. The virtuous person tends toward the good with all his sensory and spiritual powers; he pursues the good and chooses it in concrete actions."`,
          },
          {
            number: "CCC 1858",
            title: "The Ten Commandments",
            text: `"The Ten Commandments state what is required in the love of God and love of neighbor. The first three concern love of God, and the other seven concern love of neighbor. As charity comprises the two commandments to which the Lord related 'the whole Law and the prophets,' so the Decalogue forms a unity."`,
          },
          {
            number: "CCC 2052",
            title: "\"Teacher, what good deed must I do?\"",
            text: `"Young man, if you wish to be perfect, go, sell your possessions, and give the money to the poor, and you will have treasure in heaven; then come, follow me.' This passage makes clear that the way to perfection passes by way of the cross. There is an inseparable link between following Jesus and the Commandments."`,
          },
          {
            number: "CCC 2196",
            title: "The Social Doctrine of the Church",
            text: `"In response to the question about the first of the commandments, Jesus says: 'The first is, Hear, O Israel: The Lord our God, the Lord is one; and you shall love the Lord your God with all your heart, and with all your soul, and with all your mind, and with all your strength. The second is this, You shall love your neighbor as yourself.'"`,
          },
        ],
      },
      {
        id: "prayer",
        icon: "🙏",
        color: "purple",
        title: "Christian Prayer",
        subtitle: "How we speak with God",
        intro:
          "The fourth pillar reveals the meaning and importance of prayer in the life of the Christian. It presents the Lord's Prayer as the model and summit of all Christian prayer, commenting on each of its petitions.",
        items: [
          {
            number: "CCC 2558",
            title: "What is Prayer?",
            text: `"'Great is the mystery of the faith!' The Church professes this mystery in the Apostles' Creed and celebrates it in the sacramental liturgy, so that the life of the faithful may be conformed to Christ in the Holy Spirit to the glory of God the Father. This mystery requires that the faithful believe in it, celebrate it, and live from it in a vital and personal relationship with the living and true God. This relationship is prayer."`,
          },
          {
            number: "CCC 2607",
            title: "Jesus Teaches Us to Pray",
            text: `"When Jesus prays he is already teaching us how to pray. His prayer to his Father is the theological path of our prayer to God. But the Gospels also contain explicit teachings of Jesus on prayer. Like a wise teacher he takes us where we are and leads us progressively toward the Father."`,
          },
          {
            number: "CCC 2759",
            title: "The Lord's Prayer",
            text: `"Jesus 'was praying at a certain place, and when he ceased, one of his disciples said to him, Lord, teach us to pray, as John taught his disciples.' In response to this request the Lord entrusts to his disciples and to his Church the fundamental Christian prayer. St. Luke presents a brief text of five petitions, while St. Matthew gives a more developed version of seven petitions."`,
          },
          {
            number: "CCC 2761",
            title: "The Summary of the Whole Gospel",
            text: `"The Lord's Prayer is truly the summary of the whole gospel. 'Since the Lord... after handing over the practice of prayer, said elsewhere, Ask and you will receive, and since everyone has petitions which are peculiar to his circumstances, the regular and appropriate prayer was taught first, as the foundation of further desires.'"`,
          },
          {
            number: "CCC 2644",
            title: "Forms of Prayer",
            text: `"The Holy Spirit who teaches the Church and recalls to her all that Jesus said also instructs her in the life of prayer, inspiring new expressions of the same basic forms of prayer: blessing and adoration, petition, intercession, thanksgiving, and praise."`,
          },
        ],
      },
    ],
  },
};

export default en;
export type Translations = typeof en;
