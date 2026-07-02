import { useState } from "react";
import { ArrowRight, ArrowUpRight, MapPin, Moon, Sun, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme, toggleTheme, switchable } = useTheme();
  const [language, setLanguage] = useState<"en" | "fr">("en");

  const appStoreUrl = "https://apps.apple.com/ca/app/sportlink/id6757758569";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.mlr.sportlink&pcampaignid=web_share";
  const astroWebsiteUrl = "https://someonelostinspace.github.io/Astro-Website/";
  const tr = (en: string, fr: string) => (language === "fr" ? fr : en);

  const navItems = [
    { href: "#story", label: tr("Story", "Vision") },
    { href: "#community", label: tr("Community", "Communaute") },
    { href: "#download", label: tr("Download", "Telecharger") },
  ];

  const heroHighlights = [
    tr("Players, organizers, and clubs", "Joueurs, organisateurs et clubs"),
    tr("A stronger local sports presence", "Une presence sportive locale plus forte"),
    tr("Now on iOS and Android", "Maintenant sur iOS et Android"),
  ];

  const brandPillars = [
    {
      icon: Users,
      title: tr("People first", "Les gens d'abord"),
      description: tr(
        "SportLink is built around the people who make local sport happen, from casual players to organizers and clubs.",
        "SportLink est pense autour des personnes qui font vivre le sport local, des joueurs occasionnels aux organisateurs et aux clubs.",
      ),
    },
    {
      icon: MapPin,
      title: tr("Closer communities", "Des communautes plus proches"),
      description: tr(
        "The brand is rooted in nearby connections, recurring participation, and the shared energy of local sessions.",
        "La marque s'ancre dans les liens de proximite, la participation recurrente et l'energie partagee des activites locales.",
      ),
    },
    {
      icon: Trophy,
      title: tr("Momentum that lasts", "Un elan qui dure"),
      description: tr(
        "The goal is to turn interest into action, and one-time activity into something people want to return to.",
        "L'objectif est de transformer l'interet en action, puis une activite ponctuelle en habitude a laquelle on veut revenir.",
      ),
    },
  ];

  const t = {
    hero: {
      badge: tr(
        "Local sports community • Available on iOS and Android",
        "Communaute sportive locale • Disponible sur iOS et Android",
      ),
      title: tr(
        "SportLink brings local sports communities together.",
        "SportLink rapproche les communautes sportives locales.",
      ),
      description: tr(
        "SportLink is a growing presence for players, organizers, clubs, and everyday athletes who want local sport to feel easier to join, easier to organize, and more alive.",
        "SportLink est une presence en croissance pour les joueurs, organisateurs, clubs et sportifs du quotidien qui veulent un sport local plus simple a rejoindre, plus simple a organiser et plus vivant.",
      ),
      availability: tr(
        "Available now on the App Store and Google Play.",
        "Disponible maintenant sur l'App Store et Google Play.",
      ),
      secondaryCta: tr("See the bigger picture", "Voir la vision d'ensemble"),
    },
    identity: {
      badge: tr("What SportLink stands for", "Ce que represente SportLink"),
      title: tr(
        "A brand shaped by participation, belonging, and local energy.",
        "Une marque portee par la participation, l'appartenance et l'energie locale.",
      ),
      description: tr(
        "The intent is simple: help more people show up, meet others, and keep sport moving inside their own communities.",
        "L'intention est simple : aider plus de gens a se presenter, rencontrer d'autres personnes et faire avancer le sport dans leurs propres communautes.",
      ),
      points: [
        {
          title: tr("Participation over friction", "La participation avant la friction"),
          description: tr(
            "Make it easier for people to join in and stay involved.",
            "Rendre la participation plus simple et l'engagement plus durable.",
          ),
        },
        {
          title: tr("Belonging over isolation", "L'appartenance avant l'isolement"),
          description: tr(
            "Create more chances for people to find their place through sport.",
            "Creer davantage d'occasions de trouver sa place par le sport.",
          ),
        },
        {
          title: tr("Local energy over empty reach", "L'energie locale avant la portee vide"),
          description: tr(
            "Focus on the communities, routines, and gatherings that actually happen nearby.",
            "Mettre l'accent sur les communautes, les routines et les rassemblements qui existent reellement a proximite.",
          ),
        },
      ],
    },
    story: {
      eyebrow: tr("The bigger picture", "La vision"),
      title: tr(
        "SportLink is about the community behind the experience, not just one touchpoint.",
        "SportLink parle de la communaute derriere l'experience, pas d'un seul point de contact.",
      ),
      paragraphOne: tr(
        "Whether someone is looking for their next game, keeping a regular group active, or helping a club create more participation, SportLink exists to strengthen the rhythm of local sport.",
        "Qu'il s'agisse de trouver sa prochaine partie, de garder un groupe actif ou d'aider un club a creer plus de participation, SportLink existe pour renforcer le rythme du sport local.",
      ),
      paragraphTwo: tr(
        "That gives the brand room to grow into a wider community of people, partnerships, and opportunities that all revolve around showing up and playing together.",
        "Cela donne a la marque l'espace necessaire pour grandir vers une communaute plus large de personnes, de partenariats et d'occasions qui tournent tous autour du fait de se presenter et jouer ensemble.",
      ),
      cardTitle: tr("Why that matters", "Pourquoi c'est important"),
      cardDescription: tr(
        "Local sport becomes stronger when people can move from interest to participation without unnecessary barriers.",
        "Le sport local devient plus fort lorsque l'on passe de l'interet a la participation sans barrieres inutiles.",
      ),
      noteTitle: tr("Where it can grow", "Ou cela peut grandir"),
      noteDescription: tr(
        "SportLink can support players, organizers, clubs, and communities under one shared identity instead of reducing the story to one place.",
        "SportLink peut soutenir joueurs, organisateurs, clubs et communautes sous une identite commune, au lieu de reduire l'histoire a un seul endroit.",
      ),
    },
    community: {
      eyebrow: tr("Brand pillars", "Piliers de marque"),
      title: tr("Three ideas at the center of SportLink.", "Trois idees au centre de SportLink."),
      subtitle: tr(
        "This is the language of the brand: community, proximity, and momentum.",
        "Voici le langage de la marque : communaute, proximite et elan.",
      ),
    },
    download: {
      title: tr("Take SportLink with you.", "Emmenez SportLink avec vous."),
      description: tr(
        "Choose the store that matches your device and join SportLink from there.",
        "Choisissez la boutique qui correspond a votre appareil et rejoignez SportLink a partir de la.",
      ),
      availability: tr(
        "Now available on both major mobile stores.",
        "Desormais disponible sur les deux grandes boutiques mobiles.",
      ),
      appStoreAlt: tr("Download SportLink on the App Store", "Telecharger SportLink sur l'App Store"),
      playStoreAlt: tr("Get SportLink on Google Play", "Telecharger SportLink sur Google Play"),
    },
    projects: {
      eyebrow: tr("Personal projects", "Projets personnels"),
      title: tr("More apps by Mathias.", "Autres apps par Mathias."),
      astroTitle: "Astro",
      astroDescription: tr(
        "A minimal iPhone and iPad app for tracking orbital assets, reading space news, and keeping mission context close.",
        "Une app minimale pour iPhone et iPad afin de suivre des objets orbitaux, lire l'actualite spatiale et garder le contexte des missions a portee de main.",
      ),
      astroCta: tr("View Astro", "Voir Astro"),
    },
    footer: {
      tagline: tr(
        "SportLink helps local sports communities meet, organize, and stay in motion.",
        "SportLink aide les communautes sportives locales a se rencontrer, s'organiser et rester en mouvement.",
      ),
      openSource: tr("Open Source", "Open Source"),
      privacy: tr("Privacy Policy", "Politique de confidentialite"),
      terms: tr("Terms", "Conditions"),
      rights: tr("All rights reserved.", "Tous droits reserves."),
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-[#5f1220] dark:text-[#ffd6dd] [&_.text-muted-foreground]:text-[#8e3241] dark:[&_.text-muted-foreground]:text-[#e2b5be]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/screenshots/sportlink-icon.png"
                alt="SportLink logo"
                className="h-10 w-10 rounded-xl object-cover shadow-sm"
              />
              <span className="text-xl font-bold text-[#d11b37] dark:text-[#ff9cab]">SportLink</span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#8f1528] transition-colors hover:text-[#d11b37] dark:text-[#f6c1ca] dark:hover:text-[#ff9cab]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="border-[#d11b37]/40 text-[#d11b37] hover:bg-[#d11b37]/10 dark:border-[#ff9cab]/50 dark:text-[#ff9cab] dark:hover:bg-[#ff9cab]/10"
              >
                {language === "en" ? "FR" : "EN"}
              </Button>
              {switchable && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="border-[#d11b37]/40 text-[#d11b37] hover:bg-[#d11b37]/10 dark:border-[#ff9cab]/50 dark:text-[#ff9cab] dark:hover:bg-[#ff9cab]/10"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span className="ml-2 hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="relative overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(209,27,55,0.16),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(155,22,48,0.16),_transparent_30%),linear-gradient(180deg,_rgba(255,233,237,0.7),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,156,171,0.22),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(209,27,55,0.2),_transparent_28%),linear-gradient(180deg,_rgba(53,16,24,0.9),_transparent_55%)]" />
          <div className="container relative">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="max-w-3xl">
                <Badge className="mb-6 border-[#d11b37]/20 bg-[#d11b37]/10 px-4 py-2 text-sm text-[#a0142b] dark:bg-[#ff9cab]/20 dark:text-[#ffd3da]" variant="secondary">
                  {t.hero.badge}
                </Badge>
                <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl md:leading-[1.05] bg-gradient-to-r from-[#d11b37] via-[#b3172f] to-[#7f1024] bg-clip-text text-transparent dark:from-[#ffd4db] dark:via-[#ff9cab] dark:to-[#ffcad4]">
                  {t.hero.title}
                </h1>
                <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground md:text-2xl">
                  {t.hero.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <img
                      src="/store-badges/app-store-badge.png"
                      alt={t.download.appStoreAlt}
                      className="h-14 w-auto sm:h-16"
                    />
                  </a>
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <img
                      src="/store-badges/google-play-badge.png"
                      alt={t.download.playStoreAlt}
                      className="h-14 w-auto sm:h-16"
                    />
                  </a>
                </div>

                <p className="mt-4 text-sm font-medium text-[#8f1528] dark:text-[#f6c1ca]">
                  {t.hero.availability}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {heroHighlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-full border border-[#d11b37]/15 bg-white/75 px-4 py-2 text-sm font-medium text-[#8f1528] shadow-sm backdrop-blur dark:border-[#ff9cab]/20 dark:bg-[#1c1416]/70 dark:text-[#ffd6dd]"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#d11b37]/25 bg-white/80 text-[#8f1528] shadow-sm hover:bg-[#fff4f6] dark:border-[#ff9cab]/30 dark:bg-[#1c1416]/80 dark:text-[#ffd6dd] dark:hover:bg-[#28171b]"
                  >
                    <a href="#story">
                      {t.hero.secondaryCta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="overflow-hidden border-[#d11b37]/15 bg-white/80 shadow-[0_24px_80px_-40px_rgba(120,12,32,0.55)] backdrop-blur dark:border-[#ff9cab]/15 dark:bg-[#1c1416]/80">
                <div className="h-1 w-full bg-gradient-to-r from-[#d11b37] via-[#ff9cab] to-[#ffd3da]" />
                <CardHeader className="space-y-4 p-8">
                  <Badge variant="secondary" className="w-fit border-[#d11b37]/15 bg-[#fff4f6] text-[#a0142b] dark:bg-[#2a171b] dark:text-[#ffd6dd]">
                    {t.identity.badge}
                  </Badge>
                  <CardTitle className="text-3xl leading-tight text-[#7b1223] dark:text-[#ffd6dd]">
                    {t.identity.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-[#7d3140] dark:text-[#e1b4bc]">
                    {t.identity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 p-8 pt-0">
                  {t.identity.points.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-2xl border border-[#d11b37]/10 bg-[#fff8f9] p-4 dark:border-[#ff9cab]/10 dark:bg-[#24171a]"
                    >
                      <p className="font-semibold text-[#7b1223] dark:text-[#ffd6dd]">{point.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#8e3241] dark:text-[#e1b4bc]">{point.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="story" className="py-20">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b3172f] dark:text-[#ffb6c2]">
                  {t.story.eyebrow}
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-tight text-[#b3172f] dark:text-[#ffb6c2] md:text-5xl">
                  {t.story.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.story.paragraphOne}</p>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">{t.story.paragraphTwo}</p>
              </div>

              <div className="grid gap-5">
                <Card className="border-[#d11b37]/12 bg-white/80 dark:border-[#ff9cab]/12 dark:bg-[#1d1417]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#7b1223] dark:text-[#ffd6dd]">{t.story.cardTitle}</CardTitle>
                    <CardDescription className="text-base leading-7 text-[#8e3241] dark:text-[#e1b4bc]">
                      {t.story.cardDescription}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-[#d11b37]/12 bg-[#fff4f6] dark:border-[#ff9cab]/12 dark:bg-[#26171b]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#7b1223] dark:text-[#ffd6dd]">{t.story.noteTitle}</CardTitle>
                    <CardDescription className="text-base leading-7 text-[#8e3241] dark:text-[#e1b4bc]">
                      {t.story.noteDescription}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="bg-accent/30 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b3172f] dark:text-[#ffb6c2]">
                {t.community.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-bold text-[#b3172f] dark:text-[#ffb6c2] md:text-5xl">
                {t.community.title}
              </h2>
              <p className="mt-5 text-xl text-muted-foreground">{t.community.subtitle}</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {brandPillars.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  className="border-[#d11b37]/12 bg-white/85 shadow-[0_20px_70px_-45px_rgba(120,12,32,0.55)] dark:border-[#ff9cab]/12 dark:bg-[#1b1416]/85"
                >
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1f4] text-[#d11b37] dark:bg-[#2c181c] dark:text-[#ffb6c2]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl text-[#7b1223] dark:text-[#ffd6dd]">{title}</CardTitle>
                    <CardDescription className="text-base leading-7 text-[#8e3241] dark:text-[#e1b4bc]">
                      {description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="py-24">
          <div className="container">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-[#5d0816] via-[#8f1528] to-[#d11b37] text-white shadow-[0_30px_90px_-30px_rgba(93,8,22,0.8)]">
              <CardContent className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffd7de]">
                    {t.download.availability}
                  </p>
                  <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{t.download.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-[#ffe5e9]">{t.download.description}</p>
                </div>

                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <img
                      src="/store-badges/app-store-badge.png"
                      alt={t.download.appStoreAlt}
                      className="h-14 w-auto sm:h-16"
                    />
                  </a>
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <img
                      src="/store-badges/google-play-badge.png"
                      alt={t.download.playStoreAlt}
                      className="h-14 w-auto sm:h-16"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b3172f] dark:text-[#ffb6c2]">
                  {t.projects.eyebrow}
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-tight text-[#b3172f] dark:text-[#ffb6c2] md:text-5xl">
                  {t.projects.title}
                </h2>
              </div>

              <Card className="border-[#d11b37]/12 bg-white/80 dark:border-[#ff9cab]/12 dark:bg-[#1d1417]">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-4 text-2xl text-[#7b1223] dark:text-[#ffd6dd]">
                    {t.projects.astroTitle}
                    <ArrowUpRight className="h-5 w-5 shrink-0" />
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-[#8e3241] dark:text-[#e1b4bc]">
                    {t.projects.astroDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#d11b37]/25 bg-white/80 text-[#8f1528] shadow-sm hover:bg-[#fff4f6] dark:border-[#ff9cab]/30 dark:bg-[#1c1416]/80 dark:text-[#ffd6dd] dark:hover:bg-[#28171b]"
                  >
                    <a href={astroWebsiteUrl} target="_blank" rel="noreferrer">
                      {t.projects.astroCta}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <img
                src="/screenshots/sportlink-icon.png"
                alt="SportLink logo"
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="text-lg font-semibold">SportLink</span>
            </div>

            <p className="max-w-xl text-center text-sm text-muted-foreground md:text-left">
              {t.footer.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                App Store
              </a>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Google Play
              </a>
              <a
                href="/open-source-licenses"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.footer.openSource}
              </a>
              <a
                href="/privacy-policy"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.footer.privacy}
              </a>
              <a
                href="/terms-and-conditions"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.footer.terms}
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2026 SportLink. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
