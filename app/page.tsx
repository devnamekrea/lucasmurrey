import type { ReactNode } from 'react';
import { EB_Garamond } from 'next/font/google';
import ScrollPortrait from './components/ScrollPortrait';
import TwoTone from './components/TwoTone';

const serif = EB_Garamond({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});


const EMAIL = 'lucas@namekreator.com';
const PORTRAIT = '/images/author/portrait.jpg';
const TITLE = 'Dr. Lucas Murrey, Ph.D Yale University';
const PAPER = '#f5f5f2';

/* ---------- Poem ----------
   Replace each empty string with one line of the poem (the first line follows "from").
   While a line is empty, its "[insert poem here [...]" placeholder is shown. */
const POEM: string[] = [
  'thousands of years of Abrahamic-bacteria:',
  'a small, talentless and necessarily secretive',
  'group of Zionists who can only exist',
  'by virtue of their preeminent toxin:',
  'anonymous money/data',
];
const POEM_PLACEHOLDERS = [
  '[insert poem here [………………………]',
  '[insert poem here [………………………]',
  '[insert poem here [………………..]',
  '[insert poem here […………]',
  '[insert poem here […]',
];

/* ---------- Small building blocks ---------- */

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-1 underline-offset-[3px] decoration-black/30 transition-colors hover:text-[#1f3aa6] hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3aa6]"
    >
      {children}
    </a>
  );
}

type Person = {
  name: string;
  href?: string;
  role: string;
  quotes?: string[];
  lang?: string;
  note?: ReactNode;
  cited?: ReactNode;
  author?: ReactNode;
};

type Discipline = { title: string; people: Person[] };

/* ---------- Praise & Citations ---------- */

const DISCIPLINES: Discipline[] = [
  {
    title: 'Classics',
    people: [
      {
        name: 'Richard Seaford',
        role: 'British Classicist',
        quotes: [
          'Lucas Murrey shares with his subject, Hölderlin, a vision of the Greeks as bringing something vitally important into our poor world, a vision of which few classical scholars are now capable.',
          'Lucas Murrey has produced a visionary adaptation of the Nietzschean Dionysiac to illuminate the dysfunctionality of twenty-first century capitalism.',
        ],
        author: (
          <>
            Author of{' '}
            <A href="https://doi.org/10.1017/CBO9780511483080">
              <em>Money and the Early Greek Mind</em>
            </A>{' '}
            &amp;{' '}
            <A href="https://www.routledge.com/Dionysos/Seaford/p/book/9780415324885">
              <em>Dionysus</em>
            </A>
          </>
        ),
      },
      {
        name: 'Anton Bierl',
        role: 'German Classicist, Professor of Greek Philology, University of Basel',
        quotes: [
          'Lucas Murrey takes the god of tragedy, Dionysus, finally serious as a manifestation of the ecstatic scream of liberation and visual strategies of dissolution: he pleasantly portrays Hölderlin’s idiosyncratic poetic sympathy.',
          'A congenial and rigorous new landmark study regarding Nietzsche’s understanding of Dionysus in Greek tragedy during his Basel year. Well versed in classical scholarship and challenging in its original insights into ancient and modern visual culture.',
        ],
        cited: (
          <>
            Cited in Bierl’s{' '}
            <A href="https://doi.org/10.1515/9783110535150">
              “The Bacchic-Chor(a)ic Chronotope: Dionysus, Chora and Chorality in the Fifth Stasimon of Sophocles’
              Antigone”
            </A>{' '}
            from <em>Time and Space in Ancient Myth, Religion and Culture</em>, edited by A. Bierl, M. Christopoulos
            and A. Papachrysostomou; MythosEikonPoiesis 10 (Berlin: De Gruyter, 2017)
          </>
        ),
        author: (
          <>
            Author of{' '}
            <A href="https://www.hup.harvard.edu/books/9780674023734">
              <em>Der Chor in den Alten Komödie: Ritual und Performativität</em>
            </A>
          </>
        ),
      },
      {
        name: 'David Hernández de la Fuente',
        href: 'http://www.davidhdelafuente.com/',
        role: 'Spanish Classical Philologist, Universidad Complutense de Madrid',
        lang: 'es',
        quotes: [
          'El dios del despertar y de la reconciliación de la luz y la oscuridad es la pura afirmación de la vida cíclica, como se ve en el culminar del poema que inspiraría más adelante a Nietzsche. Y es el dios que permite la asimilación a lo divino, la pervivencia última y cíclica del alma en el atardecer, entre vegetación exuberante y siempre viva y con la presencia inefable de la vid. Como epígono de la tradición pagana y continuador natural aparece Cristo, señor del pan y el vino, heredero de Deméter y Dioniso en los versos de Hölderlin[3] que, a su vez, heredan la antigua comparación entre los misterios de la liturgia cristiana y los misterios griegos que ya vio la Antigüedad tardía. Dioniso y Cristo como dos caras del mismo medallón deben ser estudiados a la par a propósito de la evolución del dios griego del éxtasis como dios salvífico del último paganismo, sobre todo durante los siglos IV y V, en la coexistencia y progresiva confrontación con el cristianismo.',
        ],
        note: (
          <span lang="es">
            [3]. Lo dionisíaco en Hölderlin es estudiado en L. Murrey 2015. Para la interpretación filosófica de este
            poema en clave de comparación dionisíaco-cristiana sobre el dios que viene (<em>der kommende Gott</em>),
            véase el imprescindible Manfred 1994.
          </span>
        ),
        cited: (
          <>
            Cited in de la Fuente’s{' '}
            <A href="https://www.planetadelibros.us/libro-el-despertar-del-alma/251586">
              <em>El despertar del alma: Dioniso y Ariadna; mito y misterio</em>
            </A>{' '}
            (Barcelona: Ariel, 2017), Chapter “Cuarto despertar: resurrección”
          </>
        ),
      },
      {
        name: 'Vassilios P. Vertoudakis',
        role: 'Greek Classical Philologist',
        cited: (
          <>
            Cited in Vertoudakis’{' '}
            <A href="https://enlinea.uia.mx/libreriavirtual/detalle.cfm?clave=LET0173&tipoPublicacion=LIBRO">
              <em>Hiperión en las ruinas de Atenas</em>
            </A>{' '}
            (Mexico City: Universidad Iberoamericana, 2024), “Epílogo”
          </>
        ),
      },
      {
        name: 'Matías S. Fernandez Robbio',
        role: 'Argentine Classicist',
        cited: (
          <>
            Cited as authority for reading Hölderlin’s poetry through the Dionysian in Robbio’s{' '}
            <A href="http://hdl.handle.net/11086/553335">
              “La recepción de las categorías nietzscheanas de lo apolíneo y lo dionisíaco en el discurso
              antropológico de Ruth Benedict”
            </A>
            , from <em>Qué dicen el arte y la literatura a las ciencias sociales</em>, ed. Marcelo Casarin and Baal
            Delupi, 71–84; Colección Posdoc. (Córdoba: Editorial del Centro de Estudios Avanzados, Universidad
            Nacional de Córdoba, 2024), pp. 71 and 83
          </>
        ),
      },
    ],
  },
  {
    title: 'Theology',
    people: [
      {
        name: 'Ulrich Duchrow',
        role: 'German Theologian, University of Heidelberg',
        lang: 'de',
        quotes: [
          'Religion kommt bei Nietzsche und in diesem ganzen Zusammenhang nur in ihrer an die Geldzivilisation angepassten Form in den Blick. Hier wäre es interessant, die kritische Perspektive der hebräischen Bibel und vor allem des Paulus ins Gespräch zu bringen. Dann würde deutlich, dass es nicht nur die Tragödien sind, die gegen die entstehende Geldzivilisation aufstehen, sondern vielmehr auch alle Religionen und Philosophien der Achsenzeit – von Amos über Buddha, Zoroaster, Laotse, Konfuzius und Jesus bis hin zu Muhammad. Das wiederum würde zeigen, dass im kulturellen Erbe von Jahrtausenden Ressourcen schlummern, die wir dringend brauchen, um langfristig eine neue Kultur des Lebens zu entwickeln. Denn das ist dringend nötig, da die herrschende westliche Geldzivilisation, unterstützt von den Medien, die das Sehen der Wirklichkeit zerstören, Erde und Menschheit in den Tod führen. Darauf weist Murrey in seinen Schlussbemerkungen hin. Ihm kommt das Verdienst zu, Hölderlin und – teilweise – Nietzsche als Bundesgenossen für die neue Kultur entdeckt zu haben.',
        ],
        cited: <>From “Wider das Geld im Denken und Fühlen – Hölderlin und Nietzsche als Kapitalismuskritiker”</>,
        author: (
          <>
            Author of{' '}
            <A href="https://ulrich-duchrow.de/wp-content/uploads/2017/02/0000-Buch-Gieriges-Geld-komplett-9783466370696.pdf">
              <em>Gieriges Geld</em>
            </A>
          </>
        ),
      },
    ],
  },
  {
    title: 'Literature & Literary Science',
    people: [
      {
        name: 'Bernhard Böschenstein',
        role: 'Swiss Literary Scholar and Hölderlin specialist',
        quotes: [
          'Here triumphs a temperament guided by ancient religion and that excavates, in Hölderlin’s translations, the central god Dionysus of Greek tragedy.',
          'As a new contemporary interpreter of Nietzsche, Lucas Murrey offers a critical analysis of the catastrophes that this German philosopher prophesised. In particular, Murrey’s historical placement of Nietzsche that, on the one hand, looks explicitly backward to the poetry of Friedrich Hölderlin and, on the other hand, implicitly forward to the poetry of Stefan George, opens new doors of thought.',
        ],
        author: (
          <>
            Author of{' '}
            <A href="https://katalog.ub.uni-heidelberg.de/titel/3549551">
              <em>“Frucht des Gewitters”: Zu Hölderlins Dionysos als Gott der Revolution</em>
            </A>{' '}
            and{' '}
            <A href="https://digitale-sammlungen.de/de/details/bsb00052986">
              <em>Von Morgen nach Abend: Filiationen der Dichtung von Hölderlin zu Celan</em>
            </A>
          </>
        ),
      },
    ],
  },
  {
    title: 'Philosophy',
    people: [
      {
        name: 'Jean-François Kervégan',
        role: 'French Philosopher, Université Paris 1 Panthéon-Sorbonne',
        quotes: ['Hölderlin most surely deserved such a book.'],
        author: (
          <>
            Author of{' '}
            <A href="https://www.gallimard.fr/Catalogue/GALLIMARD/Tel/Que-faire-de-Carl-Schmitt">
              <em>Que faire de Carl Schmitt?</em>
            </A>
          </>
        ),
      },
      {
        name: 'Babette Babich',
        role: 'American Philosopher, Fordham University',
        cited: (
          <>
            Cited in Babich’s{' '}
            <A href="https://direct.mit.edu/books/book/4454/chapter/190522/Heidegger-s-Black-Night-The-Nachlass-and-Its">
              “Heidegger’s Black Night: The Nachlass and Its Wirkungsgeschichte”
            </A>
            , from <em>Reading Heidegger’s Black Notebooks 1931–1941</em>, ed. by Ingo Farin and Jeff Malpas
            (Cambridge, MA: MIT Press, 2016)
          </>
        ),
      },
      {
        name: 'Manuel Knoll',
        role: 'German Philosopher and Political Theorist',
        cited: (
          <>
            Cited in Knoll’s{' '}
            <A href="https://doi.org/10.1515/nietzstu-2018-0024">
              “Nietzsche’s Jewish Problem and Great Politics: The Continued Research Interest in His Political
              Thought”
            </A>{' '}
            from <em>Nietzsche-Studien</em> 47, no. 1 (2018): 479 n. 37
          </>
        ),
      },
      {
        name: 'Joshua M. Hall',
        role: 'American Philosopher',
        cited: (
          <>
            Cited in Hall’s{' '}
            <A href="https://www.pdcnet.org/philtoday/content/philtoday_2022_0066_0001_0057_0074">
              “Dionysus Lyseus Reborn: The Revolutionary Philosophy Chorus”
            </A>{' '}
            from <em>Philosophy Today</em> 66, no. 1 (2022): 57–74
          </>
        ),
      },
      {
        name: 'Víctor Ibarra Becerra',
        role: 'Chilean Philosopher',
        cited: (
          <>
            Cited in Ibarra B’s{' '}
            <A href="https://www.transcript-publishing.com/978-3-8376-7414-9/hegel-on-sacred-poetry/">
              <em>Hegel on Sacred Poetry: Love, Freedom, and the Practical Roots of the Sublime</em>
            </A>
            . Literality and Liminality. Bielefeld: transcript Verlag, 2024
          </>
        ),
      },
      {
        name: 'Jan Clefferson Costa de Freitas',
        role: 'Brazilian Philosopher, Universidade Federal do Rio Grande do Norte',
        cited: (
          <>
            Cited with Walter Kaufmann as one of two authorities for the article’s Nietzsche argument; Murrey’s
            reading of the last human is paraphrased and quoted directly (p. 45 of{' '}
            <em>Nietzsche: The Meaning of Earth</em>) in Freitas’s{' '}
            <A href="https://periodicos.ufam.edu.br/index.php/prisma/article/view/15202">
              “Ser-para-a-Terra: Lugares da Ecologia na Filosofia de Nietzsche e Heidegger”
            </A>
            . <em>PRISMA: Revista de Filosofia</em> 6, no. 1 (2024): 216–232. Cited at pp. 219, 220, 221–222 and
            n. 6, 229, 231
          </>
        ),
      },
    ],
  },
  {
    title: 'Social Critique & Linguistics',
    people: [
      {
        name: 'Noam Chomsky',
        role: 'American Linguist & Social-Political Theorist and Activist',
        quotes: [
          '…fascinating material…',
          'Once again, fascinating material. It is exciting to see the meaning of Orwell’s unpublished preface ‘The Freedom of the Press’ enter into the orbit of German philosophy.',
        ],
        author: (
          <>
            Author, with Ilan Pappé, of{' '}
            <A href="https://www.haymarketbooks.org/books/560-gaza-in-crisis">
              <em>Gaza in Crisis: Reflections on the US-Israeli War Against Palestinians</em>
            </A>
          </>
        ),
      },
    ],
  },
  {
    title: 'Slavic Studies',
    people: [
      {
        name: 'Dennis Ioffe',
        role: 'Slavist, Université libre de Bruxelles; co-editor, Russian Literature',
        cited: (
          <>
            Cited in Ioffe’s{' '}
            <A href="https://difusion.ulb.ac.be/vufind/Record/ULB-DIPOT:oai:dipot.ulb.ac.be:2013/330548/TOC">
              “Bezumie kak istok: Gël’derlin i psikhicheskie anomalii v russkoi kul’ture XIX veka”
            </A>{' '}
            [Madness as source: Hölderlin and psychic anomalies in nineteenth-century Russian culture];{' '}
            <em>New Zealand Slavonic Journal</em> 47–48 (2013–2014 [pub. 2016]): 77–101, at pp. 89 and 101
          </>
        ),
      },
    ],
  },
  {
    title: 'Literary, Romance & Latin American Studies',
    people: [
      {
        name: 'Vanessa Gubbins',
        href: 'https://romancestudies.cornell.edu/vanessa-gubbins',
        role: 'Latin American Studies',
        cited: (
          <>
            Cited in Gubbins’{' '}
            <A href="https://doi.org/10.1353/mln.2021.0084">
              “Hölderlin’s Dionysiac Foundations: Translation and the Communal Politics of (Un)natural Mothers”
            </A>
            . <em>MLN</em> 136, no. 5 (2021): 1154–87
          </>
        ),
      },
    ],
  },
  {
    title: 'Sociology and Social Theory',
    people: [
      {
        name: 'Simon Susen',
        role: 'Professor of Sociology, City St George’s, University of London; co-editor, Journal of Classical Sociology',
        cited: (
          <>
            Cited in Susen’s{' '}
            <A href="https://link.springer.com/book/10.1057/9781137318237">
              <em>The ‘Postmodern Turn’ in the Social Sciences</em>
            </A>{' '}
            (Basingstoke: Palgrave Macmillan, 2015), and in Susen’s{' '}
            <A href="https://link.springer.com/book/10.1007/978-3-030-38424-1">
              <em>Sociology in the Twenty-First Century: Key Trends, Debates, and Challenges</em>
            </A>{' '}
            (Cham: Palgrave Macmillan, 2020)
          </>
        ),
      },
    ],
  },
];

/* ---------- Page ---------- */

// One size for all text, scaled to the window, as in the original document.
const FONT_SIZE = 'clamp(15px, 1.77vw, 30px)';
// Spacing between the lines of the opening, as in the document (about 4 lines apart).
const STEP = 'mt-[2.1em]';

export default function Home() {
  return (
    <main
      className={`${serif.variable} relative min-h-screen text-black`}
      style={{ background: PAPER, fontFamily: 'var(--font-serif), Georgia, serif', fontSize: FONT_SIZE }}
    >
      <ScrollPortrait src={PORTRAIT} />

      <TwoTone>
        <div data-content className="pb-[4em] pl-[8.7vw] pr-[10.4vw] pt-[3.5em] leading-[1.9]">
          {/* First line: name at the left, email at the right */}
          <header data-photo-top className="flex flex-wrap items-baseline justify-between gap-x-8">
            <h1 className="font-normal">{TITLE}</h1>
            <a href={`mailto:${EMAIL}`} className="underline-offset-4 hover:underline">
              {EMAIL}
            </a>
          </header>

          {/* Opening statement, with its stepped indentations */}
          <div className="lg:whitespace-nowrap">
            <p className={STEP}>Dionysiac thinker</p>
            <p className={STEP} style={{ paddingLeft: '7.7%' }}>
              with an abiding interest in the spatio<span data-hyphen>-</span>temporal events
            </p>
            <p className={STEP} style={{ paddingLeft: '61.6%' }}>
              of Greek tragedy
            </p>
            <p className={STEP} style={{ paddingLeft: '44.2%' }}>
              destined to facilitate the cleansing of humankind
            </p>
            {POEM_PLACEHOLDERS.map((placeholder, i) => (
              <p key={i} className={`${STEP} text-right`} data-photo-bottom={i === 1 ? '' : undefined}>
                {i === 0 ? 'from ' : ''}
                {POEM[i]?.trim() ? POEM[i] : placeholder}
              </p>
            ))}
          </div>

          {/* Work */}
          <p className={STEP}>my work includes, but is not limited to:</p>
          <div className={STEP}>
            <p>Hölderlin’s Dionysiac Poetry</p>
            <p className="break-all">
              <A href="https://link.springer.com/book/10.1007/978-3-319-10205-4">
                https://link.springer.com/book/10.1007/978-3-319-10205-4
              </A>
            </p>
          </div>
          <div className={STEP}>
            <p>Nietzsche: The Meaning of Earth</p>
            <p className="break-all">
              <A href="https://www.bloomsbury.com/us/nietzsche-9781611461558/">
                https://www.bloomsbury.com/us/nietzsche-9781611461558/
              </A>
            </p>
            <p className="break-all">
              <A href="https://lupress.lehigh.edu/publication/nietzsche">https://lupress.lehigh.edu/publication/nietzsche</A>
            </p>
          </div>

          {/* Praise & Citations */}
          <div className="mt-[4em] max-w-[34em]">
            <h2 className="font-normal">Praise &amp; Citations</h2>
            <p>
              from scholars in Classics, Philosophy, Theology, Literary Studies, Romance Studies, Slavic Studies,
              Sociology and Linguistics; working in English, German, Spanish, Portuguese and Russian; in Europe, North
              and South America
            </p>

            {DISCIPLINES.map((d) => (
              <section key={d.title} className="mt-[3em]">
                <h3 className="font-normal italic">{d.title}</h3>

                {d.people.map((p) => (
                  <article key={p.name} className="mt-[1.6em]">
                    <h4 className="font-normal">
                      {p.href ? <A href={p.href}>{p.name}</A> : p.name} – {p.role}
                    </h4>

                    {p.quotes?.map((q, i) => (
                      <blockquote key={i} lang={p.lang} className="mt-[0.6em]">
                        “{q}”
                      </blockquote>
                    ))}

                    {p.note && <p className="mt-[0.4em] text-[0.8em] leading-[1.6]">{p.note}</p>}
                    {p.cited && <p className="mt-[0.6em] text-[0.8em] leading-[1.6]">{p.cited}</p>}
                    {p.author && <p className="mt-[0.4em] text-[0.8em] leading-[1.6]">{p.author}</p>}
                  </article>
                ))}
              </section>
            ))}
          </div>

          {/* Closing */}
          <footer className="mt-[4em]">
            <a href={`mailto:${EMAIL}`} className="underline decoration-1 underline-offset-4 decoration-black/30">
              {EMAIL}
            </a>
            <p className="mt-[1em]">© {new Date().getFullYear()} Dr. Lucas Murrey</p>
          </footer>
        </div>
      </TwoTone>
    </main>
  );
}
