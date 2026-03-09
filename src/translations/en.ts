const en = {
  nav: {
    home: "Home",
    prayers: "Prayers",
    rosary: "Rosary",
    mercy: "Works of Mercy",
    gallery: "Gallery",
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
          "The Annunciation",
          "The Visitation",
          "The Nativity",
          "The Presentation",
          "The Finding in the Temple",
        ],
      },
      sorrowful: {
        name: "Sorrowful Mysteries",
        day: "Tuesday & Friday",
        color: "from-red-950 to-red-900",
        items: [
          "The Agony in the Garden",
          "The Scourging at the Pillar",
          "The Crowning with Thorns",
          "The Carrying of the Cross",
          "The Crucifixion",
        ],
      },
      glorious: {
        name: "Glorious Mysteries",
        day: "Wednesday & Sunday",
        color: "from-amber-900 to-yellow-800",
        items: [
          "The Resurrection",
          "The Ascension",
          "The Descent of the Holy Spirit",
          "The Assumption of Mary",
          "The Coronation of Mary",
        ],
      },
      luminous: {
        name: "Luminous Mysteries",
        day: "Thursday",
        color: "from-blue-900 to-sky-800",
        items: [
          "The Baptism of Jesus",
          "The Wedding at Cana",
          "The Proclamation of the Kingdom",
          "The Transfiguration",
          "The Institution of the Eucharist",
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
};

export default en;
export type Translations = typeof en;
